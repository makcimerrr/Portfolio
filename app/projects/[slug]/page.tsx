import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Github, Globe } from "lucide-react"
import { format } from "date-fns"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { MDXContent } from "@/components/mdx-content"

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl py-20 px-4 md:px-6 lg:px-8">
      <Button variant="ghost" size="sm" className="mb-8" asChild>
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          src={project.image || "/placeholder.svg?height=600&width=1200"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <time dateTime={project.date}>
              {new Date(project.date) > new Date() ? "Coming Soon" : format(new Date(project.date), "MMMM dd, yyyy")}
            </time>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-xl text-muted-foreground">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {project.github && (
          <Button asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source
            </a>
          </Button>
        )}
        {project.demo && (
          <Button variant="outline" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>

      <Card className="p-6 prose dark:prose-invert max-w-none">
        <MDXContent code={project.body.code} />
      </Card>
    </div>
  )
}


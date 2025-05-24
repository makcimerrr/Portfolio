"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects, getAllTags } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const allTags: string[] = getAllTags() as string[]
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter projects based on search and tags
  const filteredProjects = allProjects
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((project) => selectedTags.length === 0 || selectedTags.every((tag) => project.tags?.includes(tag)))

  // Group projects by year
  const projectsByYear: { [key: number]: typeof allProjects } = {}
  filteredProjects.forEach((project) => {
    const year = new Date(project.date).getFullYear()
    if (!projectsByYear[year]) {
      projectsByYear[year] = []
    }
    projectsByYear[year].push(project)
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="container mx-auto max-w-5xl py-20 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">My Projects</h1>
      <p className="text-muted-foreground max-w-[700px] mb-10 mx-auto text-center">
        A collection of my work across various technologies and industries. Each project represents a unique challenge
        and solution.
      </p>

      {/* Search and filter */}
      <div className="mb-8 space-y-4 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(tag)}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <X
                  className="ml-1 h-3 w-3"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleTag(tag)
                  }}
                />
              )}
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button variant="ghost" size="sm" className="text-xs h-7" onClick={() => setSelectedTags([])}>
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Projects timeline */}
      {Object.keys(projectsByYear).length > 0 ? (
        <div className="space-y-8">
          {Object.keys(projectsByYear).map((year) => (
            <div key={year}>
              <h2 className="text-2xl font-bold mb-4">{year}</h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {projectsByYear[year].map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("")
              setSelectedTags([])
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  )
}

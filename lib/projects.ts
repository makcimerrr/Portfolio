let allProjectsFromContentlayer = []
let Project

try {
  // Try to dynamically import from contentlayer/generated
  const contentlayer = require("contentlayer/generated")
  allProjectsFromContentlayer = contentlayer.allProjects || []
  Project = contentlayer.Project
} catch (error) {
  console.warn("Contentlayer generated files not found, using fallback data")
  allProjectsFromContentlayer = []
}

export type Project = any

// Fallback project data for when contentlayer hasn't generated yet
/*const sampleProjects: Project[] = [
  {
    _id: "1",
    _raw: {
      sourceFilePath: "projects/e-commerce-platform.mdx",
      sourceFileName: "e-commerce-platform.mdx",
      sourceFileDir: "projects",
      contentType: "mdx",
      flattenedPath: "projects/e-commerce-platform",
    },
    type: "Project",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS",
    date: "2023-10-15",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
    slug: "e-commerce-platform",
    body: {
      raw: "",
      code: "",
    },
    slugAsParams: "e-commerce-platform",
  },
  {
    _id: "2",
    _raw: {
      sourceFilePath: "projects/ai-task-manager.mdx",
      sourceFileName: "ai-task-manager.mdx",
      sourceFileDir: "projects",
      contentType: "mdx",
      flattenedPath: "projects/ai-task-manager",
    },
    type: "Project",
    title: "AI-Powered Task Manager",
    description: "A productivity app that uses AI to categorize and prioritize tasks",
    date: "2023-08-22",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    github: "https://github.com/yourusername/ai-task-manager",
    demo: "https://ai-tasks-demo.vercel.app",
    featured: true,
    slug: "ai-task-manager",
    body: {
      raw: "",
      code: "",
    },
    slugAsParams: "ai-task-manager",
  },
  {
    _id: "3",
    _raw: {
      sourceFilePath: "projects/collaborative-whiteboard.mdx",
      sourceFileName: "collaborative-whiteboard.mdx",
      sourceFileDir: "projects",
      contentType: "mdx",
      flattenedPath: "projects/collaborative-whiteboard",
    },
    type: "Project",
    title: "Real-time Collaborative Whiteboard",
    description: "A digital whiteboard that allows multiple users to collaborate in real-time",
    date: "2023-12-05",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "WebSockets", "Canvas API", "Firebase"],
    github: "https://github.com/yourusername/collaborative-whiteboard",
    demo: "https://whiteboard-collab.vercel.app",
    featured: true,
    slug: "collaborative-whiteboard",
    body: {
      raw: "",
      code: "",
    },
    slugAsParams: "collaborative-whiteboard",
  },
  {
    _id: "4",
    _raw: {
      sourceFilePath: "projects/portfolio-website.mdx",
      sourceFileName: "portfolio-website.mdx",
      sourceFileDir: "projects",
      contentType: "mdx",
      flattenedPath: "projects/portfolio-website",
    },
    type: "Project",
    title: "Developer Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS",
    date: "2024-01-10",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
    featured: false,
    slug: "portfolio-website",
    body: {
      raw: "",
      code: "",
    },
    slugAsParams: "portfolio-website",
  },
]*/

// Get all projects
export function getAllProjects() {
  // If contentlayer data is available, use it
  if (allProjectsFromContentlayer && allProjectsFromContentlayer.length > 0) {
/*    console.log(allProjectsFromContentlayer)*/
    return allProjectsFromContentlayer.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }

  /*// Otherwise, use sample data
  console.warn("Contentlayer data not available, using sample data instead")
  return sampleProjects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })*/
}

// Get featured projects
export function getFeaturedProjects() {
  return getAllProjects()
    .filter((project) => project.featured)
    .slice(0, 3)
}

// Get project by slug
export function getProjectBySlug(slug) {
  return getAllProjects().find((project) => project.slug === slug)
}

// Get unique tags from all projects
export function getAllTags() {
  const tags = new Set()

  getAllProjects().forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => {
        tags.add(tag)
      })
    }
  })

  return Array.from(tags).sort()
}


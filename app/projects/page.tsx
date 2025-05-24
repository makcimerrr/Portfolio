import ProjectsPageClient from "@/app/projects/ProjectsPageClient"
import {ProjectsTimeline} from "@/app/projects/ProjectsTimeline";

export const metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development and design projects",
}

export default function ProjectsPage() {
  return <ProjectsTimeline />
}


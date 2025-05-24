"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number // 1-5
  category: "frontend" | "backend" | "design" | "tools" | "languages"
}

interface SkillsShowcaseProps {
  className?: string
}

export function SkillsShowcase({ className }: SkillsShowcaseProps) {
  const skills: Skill[] = [
    // Frontend
    { name: "React", level: 5, category: "frontend" },
    { name: "Next.js", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "HTML/CSS", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Framer Motion", level: 4, category: "frontend" },
    { name: "Redux", level: 4, category: "frontend" },

    // Backend
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "GraphQL", level: 3, category: "backend" },
    { name: "REST API", level: 5, category: "backend" },
    { name: "PostgreSQL", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },

    // Design
    { name: "Figma", level: 4, category: "design" },
    { name: "UI/UX", level: 4, category: "design" },
    { name: "Responsive Design", level: 5, category: "design" },

    // Tools
    { name: "Git", level: 5, category: "tools" },
    { name: "Docker", level: 3, category: "tools" },
    { name: "CI/CD", level: 3, category: "tools" },
    { name: "Jest", level: 4, category: "tools" },

    // Languages
    { name: "Python", level: 3, category: "languages" },
    { name: "Java", level: 2, category: "languages" },
  ]

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools" },
    { id: "languages", label: "Languages" },
  ]

  return (
    <div className={cn("space-y-8", className)}>
      {categories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category.id)
        if (categorySkills.length === 0) return null

        return (
          <div key={category.id} className="space-y-4">
            <h3 className="text-xl font-semibold">{category.label}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="font-normal">
                      {getLevelLabel(skill.level)}
                    </Badge>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level * 20}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function getLevelLabel(level: number): string {
  switch (level) {
    case 1:
      return "Beginner"
    case 2:
      return "Basic"
    case 3:
      return "Intermediate"
    case 4:
      return "Advanced"
    case 5:
      return "Expert"
    default:
      return "Intermediate"
  }
}


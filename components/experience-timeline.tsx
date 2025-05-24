"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: "work" | "education"
}

interface ExperienceTimelineProps {
  className?: string
}

export function ExperienceTimeline({ className }: ExperienceTimelineProps) {
  const timelineItems: TimelineItem[] = [
    {
      id: "job1",
      title: "Apprentice Developer Coach",
      organization: "Zone01 Rouen Normandie",
      period: "2024 - Present",
      description:
        "Providing technical and pedagogical support to learners in a peer-to-peer, project-based learning environment. Guiding students through problem-solving, debugging, and best coding practices while fostering autonomy and collaboration.",
      type: "work",
    },
    {
      id: "edu1",
      title: "Application Developer Designer",
      organization: "Zone01 Rouen Normandie",
      period: "2023 - Present",
      description:
          "Fullstack web development training with a focus on modern JavaScript frameworks, backend technologies, and database management. Gained hands-on experience in building responsive, accessible, and performant web applications through project-based learning.",
      type: "education",
    },
    {
      id: "edu2",
      title: "Bachelor in Computer Science",
      organization: "University of Rouen Normandie",
      period: "2022 - 2023",
      description:
        "Completed a university diploma focused on managing digital projects, covering areas such as agile methodologies, team coordination, digital communication, and technical project planning. Developed practical skills through collaborative projects and real-world case studies.",
      type: "education",
    },
  ]

  return (
    <div className={cn("space-y-8", className)}>
      <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
              {item.type === "work" ? <Briefcase className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{item.title}</h4>
                <span className="text-sm text-muted-foreground">• {item.organization}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-3 w-3" />
                <span>{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


import Link from "next/link"
import { Frame, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-8 text-center">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Frame className="h-6 w-6" />
          <span>Portfolio</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Maxime Dubois All rights reserved.</p>
      </div>
    </footer>
  )
}


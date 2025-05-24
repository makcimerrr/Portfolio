import { Mail, Github, Linkedin } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Me",
  description: "Get in touch for project inquiries, collaborations, or just to say hello",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl py-20 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 text-center">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-muted-foreground" />
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>I'm currently available for freelance work and full-time positions</CardDescription>
          </CardHeader>
          <ContactForm />
        </Card>
      </div>
    </div>
  )
}


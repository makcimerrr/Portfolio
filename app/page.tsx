"use client";

import Link from "next/link"
import {ArrowRight} from "lucide-react"

import {Button} from "@/components/ui/button"
import {ParallaxSection} from "@/components/parallax-section"
import {getFeaturedProjects} from "@/lib/projects"
import {ProjectCard} from "@/components/project-card"
import {CellularBackground} from "@/components/cellular-background"
import {Particles} from "@/components/particles-background"
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function HomePage() {
    const featuredProjects = getFeaturedProjects()

    const {theme} = useTheme()
    const [color, setColor] = useState("#ffffff")

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000")
    }, [theme])

    return (
        <>
            {theme === "dark" ? (
                <CellularBackground/>
            ) : <Particles
                className="absolute inset-0"
                quantity={500}
                ease={100}
                color={color}
                refresh
            />
            }
            <div className="flex flex-col">
                {/* Hero Section with Parallax */}
                <ParallaxSection className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block">Developer.</span>
                        <span className="block mt-2">Designer.</span>
                        <span className="block mt-2">Problem Solver.</span>
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground mt-6 md:text-xl">
                        I build exceptional digital experiences that live at the intersection of design and technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                        <Button asChild size="lg">
                            <Link href="/projects">View My Work</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Get In Touch</Link>
                        </Button>
                    </div>
                </ParallaxSection>

                {/* Featured Projects Preview */}
                <section className="py-20 px-4 md:px-6 lg:px-8 bg-background/80 backdrop-blur-sm">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-[700px] mb-10 mx-auto text-center">
                            A selection of my recent work. Each project represents a unique challenge and solution.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project._id} project={project}/>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Button asChild variant="outline">
                                <Link href="/projects" className="inline-flex items-center">
                                    View All Projects
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

"use client";

import React, {useState} from "react";
import {Timeline} from "@/components/ui/timeline";
import {getAllProjects, getAllTags} from "@/lib/projects";

export function ProjectsTimeline() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const projects = getAllProjects()
    const allTags: string[] = getAllTags() as string[]

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
        return matchesSearch && matchesTags;
    });

    const groupedProjects = filteredProjects.reduce((acc, project) => {
        const year = new Date(project.date).getFullYear();
        const currentYear = new Date().getFullYear();
        const yearKey = year > currentYear ? "Coming Soon" : year.toString();
        if (!acc[yearKey]) {
            acc[yearKey] = [];
        }
        acc[yearKey].push(project);
        acc[yearKey].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        return acc;
    }, {});

    const data = Object.entries(groupedProjects).map(([year, projects]: [string, typeof projects]) => ({
        title: year,
        content: (
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <a key={project.id || index} href={`/projects/${project.slug}`} className="block">
                        <div className="rounded-lg shadow-md p-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold">{project.title}</h3>
                            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                                {project.description.length > 100 ? project.description.substring(0, 100) + "..." : project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        ),
    }));

    return (
        <Timeline data={data}/>
    );
}

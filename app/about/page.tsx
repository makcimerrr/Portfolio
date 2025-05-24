import {SkillsShowcase} from "@/components/skills-showcase"
import {ExperienceTimeline} from "@/components/experience-timeline"

export const metadata = {
    title: "About Me",
    description: "Learn more about my skills, experience, and background",
}

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-5xl py-20 px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 text-center">About Me</h1>

            <div className="grid grid-cols-1 gap-16">
                {/* Bio Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">My Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <p className="text-lg">
                                I'm a passionate web developer with expertise in modern JavaScript frameworks like
                                React, Next.js, and
                                Vue. I specialize in building responsive, accessible, and performant web applications.
                            </p>
                            <p className="text-lg">
                                With a strong foundation in both frontend and backend technologies, I create seamless
                                user experiences
                                that are both beautiful and functional.
                            </p>
                            <p className="text-lg">
                                My approach to development is centered around solving real problems for users. I believe
                                in writing
                                clean, maintainable code and staying up-to-date with the latest industry trends and best
                                practices.
                            </p>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden bg-muted">
                            <img src="/profile.png" alt="Profile" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">Experience & Education</h2>
                    <ExperienceTimeline/>
                </section>

                {/* Skills Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h2>
                    <SkillsShowcase/>
                </section>
            </div>
        </div>
    )
}


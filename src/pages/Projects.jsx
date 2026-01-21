import ProjectCard from "../components/ProjectCard";
import { projects } from "../Details";

export default function Projects() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Featured projects and applications I've built
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="animate-slide-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

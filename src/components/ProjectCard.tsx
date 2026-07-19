import StatusBadge from "./StatusBadge";
import type { Project } from "../types/portfolio";

function ArrowUpRightIcon() {
    return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
    );
}

interface ProjectCardProps {
    readonly project: Project;
    readonly index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const flip = index % 2 === 1;
    const layoutClass = flip ? "lg:grid-cols-[0.92fr_1.08fr]" : "lg:grid-cols-[1.08fr_0.92fr]";

    return (
        <article className="scandi-card project-showcase overflow-hidden">
            <div className={`grid ${layoutClass}`}>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-media group min-h-[300px] sm:min-h-[380px] ${project.visualClass || "bg-scandi-surface"} ${flip ? "lg:order-2" : ""}`}
                    aria-label={`Open ${project.title}`}
                >
                    <img
                        src={project.image}
                        alt={`${project.title} product screenshot`}
                        className={`image-reveal h-full w-full ${project.imageClass || "object-cover"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-scandi-charcoal/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <span className="rounded-full border border-white/30 bg-white/85 px-3 py-1 text-xs font-semibold text-scandi-charcoal backdrop-blur-md">
                            {project.category}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/85 text-scandi-charcoal shadow-lg backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                            <ArrowUpRightIcon />
                        </span>
                    </div>
                </a>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            {project.status && <StatusBadge>{project.status}</StatusBadge>}
                            {project.role && (
                                <span className="scandi-pill">{project.role}</span>
                            )}
                        </div>

                        <h3 className="mt-8 max-w-xl font-serif text-4xl leading-none tracking-tight text-scandi-charcoal sm:text-5xl">
                            {project.title}
                        </h3>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-scandi-text-body sm:text-[15px]">
                            {project.description}
                        </p>
                        {project.impact && (
                            <p className="mt-5 border-l border-scandi-sage/50 pl-4 text-sm leading-7 text-scandi-text-secondary">
                                {project.impact}
                            </p>
                        )}

                        {project.highlights?.length > 0 && (
                            <div className="mt-8 grid gap-2">
                                {project.highlights.map((highlight) => (
                                    <div key={highlight} className="flex items-center gap-3 text-sm text-scandi-text-body">
                                        <span className="h-1.5 w-1.5 rounded-full bg-scandi-sage" aria-hidden="true" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="scandi-pill">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

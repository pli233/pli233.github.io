import { useEffect, useRef, useState } from "react";
import type { Project } from "../types/portfolio";
import CardSwap, { Card, type CardSwapHandle } from "./CardSwap";
import StatusBadge from "./StatusBadge";

function ArrowUpRightIcon({ className = "h-4 w-4" }: { readonly className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
    );
}

function ChevronIcon({ direction }: { readonly direction: "left" | "right" }) {
    const path = direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6";
    return (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
        </svg>
    );
}

function useCompactSwap() {
    const [compact, setCompact] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px)");
        const sync = () => setCompact(media.matches);

        sync();
        media.addEventListener("change", sync);

        return () => media.removeEventListener("change", sync);
    }, []);

    return compact;
}

export default function ProjectCardSwap({ projects }: { readonly projects: readonly Project[] }) {
    const compact = useCompactSwap();
    const cardSwapRef = useRef<CardSwapHandle>(null);

    return (
        <div className="project-card-swap relative flex h-[520px] w-full items-center justify-center overflow-hidden md:h-[650px]" aria-label="Selected projects" role="region">
            <div className="pointer-events-none absolute inset-x-8 top-1/2 h-24 -translate-y-1/2 rounded-full bg-scandi-sage/10 blur-3xl" />

            <CardSwap
                ref={cardSwapRef}
                width={compact ? "min(82vw, 340px)" : 760}
                height={compact ? 350 : 500}
                cardDistance={compact ? 24 : 52}
                verticalDistance={compact ? 22 : 44}
                delay={3600}
                pauseOnHover
                skewAmount={compact ? 2.2 : 4}
                easing="smooth"
            >
                {projects.map((project) => (
                    <Card key={project.title}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full w-full flex-col bg-white"
                        >
                            <div className={`relative min-h-0 flex-1 overflow-hidden ${project.visualClass || "bg-scandi-surface"}`}>
                                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.55),transparent_34%)]" />
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    className={`relative h-full w-full transition duration-700 group-hover:scale-[1.035] ${project.imageClass || "object-cover"}`}
                                />
                                <div className="absolute right-4 top-4 z-20 inline-flex translate-z-px transform-gpu items-center gap-1.5 rounded-full border border-scandi-border bg-white px-3.5 py-2 text-sm font-semibold leading-none text-scandi-charcoal antialiased shadow-[0_8px_24px_rgba(26,26,46,0.12)] [backface-visibility:hidden]">
                                    Visit
                                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                                </div>
                            </div>

                            <div className="border-t border-scandi-border bg-white p-5 md:p-6">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="scandi-pill text-[10px] uppercase">
                                        {project.category}
                                    </span>
                                    {project.status && <StatusBadge>{project.status}</StatusBadge>}
                                </div>
                                <div className="mt-3 flex items-end justify-between gap-4">
                                    <div className="min-w-0">
                                        <h3 className="font-serif text-2xl font-semibold leading-none text-scandi-charcoal md:text-3xl">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {project.techStack?.[0] && (
                                        <span className="hidden rounded-full bg-scandi-surface px-3 py-1 text-[10px] font-medium text-scandi-charcoal md:inline-flex">
                                            {project.techStack[0]}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </a>
                    </Card>
                ))}
            </CardSwap>

            <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-3 md:bottom-5">
                <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => cardSwapRef.current?.previous()}
                    className="grid h-12 w-12 place-items-center rounded-full border border-scandi-border bg-white text-scandi-charcoal shadow-[0_8px_24px_rgba(26,26,46,0.08)] transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-scandi-text-secondary/40 hover:shadow-[0_12px_30px_rgba(26,26,46,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/30"
                >
                    <ChevronIcon direction="left" />
                </button>
                <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => cardSwapRef.current?.next()}
                    className="grid h-12 w-12 place-items-center rounded-full border border-scandi-border bg-white text-scandi-charcoal shadow-[0_8px_24px_rgba(26,26,46,0.08)] transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-scandi-text-secondary/40 hover:shadow-[0_12px_30px_rgba(26,26,46,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/30"
                >
                    <ChevronIcon direction="right" />
                </button>
            </div>
        </div>
    );
}

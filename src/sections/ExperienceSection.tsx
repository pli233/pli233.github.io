import { useState } from "react";
import { experienc } from "../Details";
import BorderGlow from "../components/BorderGlow";
import RevealOnScroll from "../components/RevealOnScroll";
import StatusBadge from "../components/StatusBadge";

function getCompanySlug(company: string) {
    return company
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export default function ExperienceSection() {
    const [openCompany, setOpenCompany] = useState<string | null>(null);

    return (
        <section id="experience" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Experience</h2>
                        <p>Professional work experience and internships</p>
                    </div>
                </RevealOnScroll>

                <div className="flex flex-col gap-5">
                    {experienc.map((job, i) => {
                        const panelId = `experience-details-${getCompanySlug(job.company)}`;
                        const isOpen = openCompany === job.company;
                        const toggleLabel = isOpen ? "Hide details" : "More details";
                        const hasDetails = Boolean(job.details);

                        return (
                            <RevealOnScroll key={`${job.company}-${job.title}`} delay={i * 100}>
                                <div className="scandi-card timeline-card relative flex flex-col items-start gap-6 p-7 sm:flex-row">
                                    <span className="absolute right-7 top-7 flex max-w-[46%] items-center justify-end gap-1.5 text-right text-xs text-scandi-text-secondary">
                                        <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{job.location}</span>
                                    </span>

                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        {job.logo ? (
                                            <BorderGlow
                                                className="logo-border-glow"
                                                effect="specular"
                                                borderRadius={18}
                                                glowColor="255 255 255"
                                                backgroundColor="#ffffff"
                                                glowRadius={36}
                                                glowIntensity={0.95}
                                                coneSpread={25}
                                                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                                            >
                                                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-white p-2">
                                                    <img src={job.logo} alt={job.company} className="h-full w-full object-contain" />
                                                </div>
                                            </BorderGlow>
                                        ) : (
                                            <div className="w-[72px] h-[72px] rounded-2xl bg-scandi-sage flex items-center justify-center">
                                                <span className="text-white font-serif text-[28px]">{job.company[0]}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-semibold text-scandi-charcoal leading-snug sm:pr-44">
                                            {job.company}
                                        </h3>
                                        <p className="text-sm text-scandi-text-body mt-1.5">
                                            {job.title}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                                            <span className="flex items-center gap-1.5 text-scandi-text-secondary text-xs">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {job.period}
                                            </span>
                                            {job.badge && (
                                                <StatusBadge className="sm:ml-auto">
                                                    {job.badge}
                                                </StatusBadge>
                                            )}
                                        </div>

                                        {hasDetails && (
                                            <>
                                                <button
                                                    type="button"
                                                    id={`${panelId}-toggle`}
                                                    className="mt-4 inline-flex items-center gap-2 border-b border-scandi-sage/45 pb-1 text-sm font-semibold text-scandi-charcoal transition-colors hover:border-scandi-sage hover:text-scandi-sage"
                                                    aria-expanded={isOpen}
                                                    aria-controls={panelId}
                                                    onClick={() =>
                                                        setOpenCompany((current) => (current === job.company ? null : job.company))
                                                    }
                                                >
                                                    {toggleLabel}
                                                    <span
                                                        className={`h-2 w-2 border-r-2 border-b-2 border-current transition-transform duration-300 ${
                                                            isOpen ? "-rotate-[135deg] translate-y-0.5" : "rotate-45 -translate-y-0.5"
                                                        }`}
                                                        aria-hidden="true"
                                                    />
                                                </button>

                                                <div
                                                    id={panelId}
                                                    role="region"
                                                    aria-labelledby={`${panelId}-toggle`}
                                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                                    aria-hidden={!isOpen}
                                                >
                                                    <div className="min-h-0 overflow-hidden">
                                                        <div className="mt-5 border-t border-scandi-border pt-5">
                                                            {job.details.summary && (
                                                                <p className="text-sm font-medium leading-7 text-scandi-text-secondary">
                                                                    {job.details.summary}
                                                                </p>
                                                            )}
                                                            <ul className="mt-4 space-y-3 text-sm leading-7 text-scandi-text-body">
                                                                {job.details.bullets.map((bullet) => (
                                                                    <li key={bullet} className="flex gap-3">
                                                                        <span className="mt-[0.8em] h-px w-3 flex-shrink-0 bg-scandi-sage/70" aria-hidden="true" />
                                                                        <span>{bullet}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            {job.details.technologies?.length > 0 && (
                                                                <div className="mt-5">
                                                                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-scandi-text-secondary">
                                                                        Technologies
                                                                    </p>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {job.details.technologies.map((technology) => (
                                                                            <span key={technology} className="scandi-pill">
                                                                                {technology}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

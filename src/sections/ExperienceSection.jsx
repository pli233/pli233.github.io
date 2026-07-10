import { experienc } from "../Details";
import RevealOnScroll from "../components/RevealOnScroll";
import StatusBadge from "../components/StatusBadge";

export default function ExperienceSection() {
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
                    {experienc.map((job, i) => (
                        <RevealOnScroll key={`${job.company}-${job.title}`} delay={i * 100}>
                            <div className="scandi-card relative p-7 flex flex-col sm:flex-row items-start gap-6">
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
                                        <div className="w-[72px] h-[72px] rounded-2xl bg-white border border-scandi-border p-3 flex items-center justify-center">
                                            <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                                        </div>
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
                                    {job.signal && (
                                        <p className="text-xs text-scandi-text-secondary mt-2">
                                            {job.signal}
                                        </p>
                                    )}
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
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { educations } from "../Details";
import BorderGlow from "../components/BorderGlow";
import RevealOnScroll from "../components/RevealOnScroll";
import StatusBadge from "../components/StatusBadge";

export default function EducationSection() {
    return (
        <section id="education" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Education</h2>
                        <p>Academic background and qualifications</p>
                    </div>
                </RevealOnScroll>

                <div className="flex flex-col gap-5">
                    {educations.map((edu, i) => (
                        <RevealOnScroll key={edu.school} delay={i * 100}>
                            <div className="scandi-card timeline-card relative flex flex-col items-start gap-6 p-7 sm:flex-row">
                                <span className="absolute right-7 top-7 flex max-w-[46%] items-center justify-end gap-1.5 text-right text-xs text-scandi-text-secondary">
                                    <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{edu.location}</span>
                                </span>

                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    {edu.logo ? (
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
                                                <img src={edu.logo} alt={edu.school} className="h-full w-full object-contain" />
                                            </div>
                                        </BorderGlow>
                                    ) : (
                                        <div className="w-[72px] h-[72px] rounded-2xl bg-scandi-sage flex items-center justify-center">
                                            <span className="text-white font-serif text-[28px]">{edu.school[0]}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-semibold text-scandi-charcoal leading-snug sm:pr-44">
                                        {edu.school}
                                    </h3>
                                    <p className="text-sm text-scandi-text-body mt-1.5">
                                        {edu.program}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                                        <span className="flex items-center gap-1.5 text-scandi-text-secondary text-xs">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {edu.period}
                                        </span>
                                        <StatusBadge className="sm:ml-auto">
                                            {edu.badge.includes("Master") ? "Master's" : "Bachelor's"}
                                        </StatusBadge>
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

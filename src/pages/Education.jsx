import SchoolCard from "../components/SchoolCard";
import { educations } from "../Details";

export default function Education() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="gradient-text">Education</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        My academic background and achievements
                    </p>
                </div>

                <div className="space-y-6">
                    {educations.map((edu, idx) => (
                        <div key={`${edu.school}-${edu.period}-${idx}`} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <SchoolCard
                                program={edu.program}
                                degree={edu.degree}
                                school={edu.school}
                                period={edu.period}
                                location={edu.location}
                                badge={edu.badge}
                                logo={edu.logo}
                                highlights={edu.highlights}
                                gpa={edu.gpa}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

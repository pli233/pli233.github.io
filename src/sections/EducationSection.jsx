import SchoolCard from "../components/SchoolCard";
import { educations } from "../Details";

export default function EducationSection() {
    return (
        <section id="education" className="py-20">
            <div className="section-container">
                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        My academic background and achievements
                    </p>
                </div>

                <div className="space-y-6">
                    {educations.map((edu, idx) => (
                        <div key={`${edu.school}-${edu.period}-${idx}`}>
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
        </section>
    );
}

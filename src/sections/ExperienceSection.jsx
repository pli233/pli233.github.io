import Work from "../components/Work";
import { experienc } from "../Details";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20">
            <div className="section-container">
                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        My professional journey and accomplishments
                    </p>
                </div>

                <div className="space-y-6">
                    {experienc.map((job, idx) => (
                        <div key={`${job.company}-${job.title}-${idx}`}>
                            <Work
                                title={job.title}
                                company={job.company}
                                period={job.period}
                                location={job.location}
                                badge={job.badge}
                                logo={job.logo}
                                bullets={job.bullets}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

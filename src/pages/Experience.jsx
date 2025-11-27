import Work from "../components/Work";
import { experienc } from "../Details";

export default function Experience() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        My professional journey and accomplishments
                    </p>
                </div>

                <div className="space-y-6">
                    {experienc.map((job, idx) => (
                        <div key={`${job.company}-${job.title}-${idx}`} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
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
        </main>
    );
}

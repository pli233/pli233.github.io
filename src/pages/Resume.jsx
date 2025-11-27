import { socialMediaUrl } from "../Details.js";

export default function Resume() {
    const src = `${socialMediaUrl.resume}#toolbar=1&navpanes=0&view=FitH`;

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        View or download my full resume
                    </p>
                </div>

                <div className="glass-card p-4 sm:p-6">
                    <div className="h-[70vh] md:h-[80vh] w-full rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                        <iframe
                            title="Resume PDF"
                            src={src}
                            className="w-full h-full"
                            style={{ border: 0 }}
                        />
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            If the preview doesn't load,{" "}
                            <a
                                href={socialMediaUrl.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 dark:text-red-400 hover:underline font-medium"
                            >
                                open the PDF in a new tab
                            </a>
                        </p>

                        <a
                            href={socialMediaUrl.resume}
                            download
                            className="btn-gradient inline-flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

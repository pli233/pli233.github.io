import { socialMediaUrl } from "../Details";
import reactLogo from "../assets/react.svg";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Copyright */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        © {year} Peiyuan Li. All rights reserved.
                    </div>

                    {/* Center: Social Links */}
                    <div className="flex items-center space-x-6">
                        <a
                            href={socialMediaUrl.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={socialMediaUrl.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm font-medium"
                        >
                            GitHub
                        </a>
                        <a
                            href={socialMediaUrl.email}
                            className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                        >
                            Email
                        </a>
                    </div>

                    {/* Right: Powered by React */}
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
                        aria-label="Powered by React"
                    >
                        <img
                            src={reactLogo}
                            alt="React"
                            className="w-5 h-5 group-hover:animate-spin"
                        />
                        <span className="text-sm font-medium">Powered by React</span>
                    </a>
                </div>

                {/* Optional: Additional Footer Content */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                        Built with React, Tailwind CSS, and Vite
                    </p>
                </div>
            </div>
        </footer>
    );
}

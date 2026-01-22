export default function ProjectCard({
    title,
    description,
    url,
    image,
    techStack,
    category,
    status,
}) {
    return (
        <div className="glass-card overflow-hidden group h-full flex flex-col">
            {/* Project Image */}
            {image && (
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 dark:from-slate-800 dark:to-slate-900">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            {category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {title}
                        </h3>
                    </div>
                    {status && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 flex-shrink-0">
                            {status}
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4 content-start">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-grow"></div>

                {/* Action Button */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex items-center justify-center space-x-2 w-full text-center"
                >
                    <span>View Project</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

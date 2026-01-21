const stacks = [
    {
        title: "Languages",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: "blue",
        items: ["Python", "Java", "C", "SQL", "R", "HTML", "CSS", "JavaScript", "TypeScript", "GO"],
    },
    {
        title: "AI / ML",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        color: "purple",
        items: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "RAG", "MCP", "Lightly"],
    },
    {
        title: "Frameworks",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        color: "cyan",
        items: ["React", "Next.js", "Spring Boot", "Django", "GTEST", "MOCKCPP"],
    },
    {
        title: "UI / UX",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        color: "pink",
        items: ["Figma", "Tailwind CSS", "Material UI", "Radix UI"],
    },
    {
        title: "Databases",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        color: "green",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
        title: "DevOps & Tools",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        color: "orange",
        items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "GCP", "Jira", "Confluence", "Agile/Scrum"],
    },
];

const colorClasses = {
    blue: {
        icon: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        tag: "hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    purple: {
        icon: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        tag: "hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30",
    },
    cyan: {
        icon: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-50 dark:bg-cyan-900/20",
        border: "border-cyan-200 dark:border-cyan-800",
        tag: "hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/30",
    },
    pink: {
        icon: "text-pink-600 dark:text-pink-400",
        bg: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-200 dark:border-pink-800",
        tag: "hover:border-pink-400 dark:hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30",
    },
    green: {
        icon: "text-green-600 dark:text-green-400",
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        tag: "hover:border-green-400 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30",
    },
    orange: {
        icon: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        tag: "hover:border-orange-400 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30",
    },
};

export default function TechnologiesSection() {
    return (
        <section id="technologies" className="py-20">
            <div className="section-container">
                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stacks.map((stack, idx) => (
                        <div
                            key={stack.title}
                            className="glass-card p-6 group"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className={`p-2.5 rounded-xl ${colorClasses[stack.color].bg} ${colorClasses[stack.color].border} border ${colorClasses[stack.color].icon} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {stack.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {stack.title}
                                    </h3>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {stack.items.length} skills
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {stack.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`px-3 py-1.5 rounded-full text-sm font-medium bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 ${colorClasses[stack.color].tag} transition-all duration-300 hover:scale-105 cursor-default`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

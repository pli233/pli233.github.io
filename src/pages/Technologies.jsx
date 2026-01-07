const stacks = [
    {
        title: "Languages",
        icon: "💻",
        items: ["Python", "Java", "C", "SQL", "R", "HTML", "CSS", "JavaScript", "TypeScript", "GO"],
    },
    {
        title: "AI / ML",
        icon: "🤖",
        items: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "RAG", "MCP", "Lightly"],
    },
    {
        title: "Frameworks",
        icon: "⚛️",
        items: ["React", "Spring Boot", "Django", "GTEST", "MOCKCPP"],
    },
    {
        title: "UI / UX",
        icon: "🎨",
        items: ["Figma", "Tailwind", "Material UI"],
    },
    {
        title: "Databases",
        icon: "🗄️",
        items: ["Postgres", "MySQL", "MongoDB", "Redis"],
    },
    {
        title: "Project Management",
        icon: "📋",
        items: ["Github", "CI/CD", "Agile / Scrum", "Kanban", "Jira", "Confluence", "GCP", "AWS", "Docker"],
    },
];

export default function Technologies() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stacks.map((stack, idx) => (
                        <div
                            key={stack.title}
                            className="glass-card p-6 group animate-slide-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                    {stack.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {stack.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {stack.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

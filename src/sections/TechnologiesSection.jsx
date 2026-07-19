import RevealOnScroll from "../components/RevealOnScroll";
import GoogleTechIcon from "../components/GoogleTechIcon";

const stacks = [
    {
        title: "Languages",
        count: "10 skills",
        icon: "languages",
        items: ["Python", "C++", "C", "Go", "Java", "SQL", "R", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
        title: "AI / ML",
        count: "7 skills",
        icon: "ai",
        items: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "RAG", "MCP", "Lightly"],
    },
    {
        title: "Frameworks",
        count: "6 skills",
        icon: "frameworks",
        items: ["React", "Next.js", "Spring Boot", "Django", "GTEST", "MOCKCPP"],
    },
    {
        title: "UI / UX",
        count: "4 skills",
        icon: "uiux",
        items: ["Figma", "Tailwind CSS", "Material UI", "Radix UI"],
    },
    {
        title: "Databases",
        count: "4 skills",
        icon: "databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
        title: "DevOps & Tools",
        count: "9 skills",
        icon: "devops",
        items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "GCP", "Jira", "Confluence", "Agile/Scrum"],
    },
];

export default function TechnologiesSection() {
    return (
        <section id="technologies" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Technologies</h2>
                        <p>Tools and technologies I work with</p>
                    </div>
                </RevealOnScroll>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stacks.map((stack, i) => (
                        <RevealOnScroll key={stack.title} delay={i * 80}>
                            <div className="scandi-card p-6 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-11 w-11 items-center justify-center">
                                        <GoogleTechIcon name={stack.icon} className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-scandi-charcoal">{stack.title}</h3>
                                        <span className="text-xs text-scandi-text-muted">{stack.count}</span>
                                    </div>
                                </div>

                                {/* Pills */}
                                <div className="flex flex-wrap gap-1.5">
                                    {stack.items.map((item) => (
                                        <span key={item} className="scandi-pill hover:bg-scandi-muted cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}

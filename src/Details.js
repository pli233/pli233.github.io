import me from "/src/assets/brown-id-photo.jpg";
import huaweiLogo from "/src/assets/logos/huawei.png";
import epicLogo from "/src/assets/logos/epic.png";
import greensandLogo from "/src/assets/logos/greensand.png";
import googleLogo from "/src/assets/logos/google.png";
import brownLogo from "/src/assets/logos/brown.png";
import uwmadisonLogo from "/src/assets/logos/uwmadison.png";
import latestResume from "/src/assets/Peiyuan Li Resume 26NG.pdf";
import googleAdsImage from "/src/assets/projects/project-google-ads-4k.png";
import greenSandAiImage from "/src/assets/projects/project-greensand-ai-4k.webp";
import myChartImage from "/src/assets/projects/project-mychart-4k.webp";
import unifiedBusImage from "/src/assets/projects/project-unifiedbus-4k.webp";

export const personalDetails = {
    name: "Peiyuan Li",
    tagline: "AI-native software engineer.",
    img: me, // 你可以把头像放到 public/me.jpg，然后这里写 "/me.jpg"
    about: `I build AI-native products and the systems behind them—reliable software, clear product thinking, and tools that hold up in real workflows.`,
};

export const socialMediaUrl = {
    linkedin: "https://www.linkedin.com/in/peiyuan-li-257958277",
    github: "https://github.com/pli233",
    email: "mailto:peiyuanli3627@outlook.com",
    resume: latestResume, // public/下的PDF
};

export const experienc = [
    {
        title: "Software Engineer",
        company: "Google",
        logo: googleLogo,
        location: "Mountain View, California",
        period: "Jul 2026 – Now",
        badge: "Full-time",
        details: {
            summary: "Google Ads product engineering.",
            bullets: [
                "Contributing to Google Ads.",
            ],
            technologies: ["Google Ads", "Software Engineering"],
        },
    },
    {
        title: "Software Engineer Intern (Agentic AI)",
        company: "Greensand AI",
        logo: greensandLogo,
        location: "Remote",
        period: "Nov 2025 – Feb 2026",
        badge: "Internship",
        details: {
            summary: "Agent workflows, product architecture, and AI tooling.",
            bullets: [
                "Orchestrated the core ingestion infrastructure on GCP with TypeScript and MinerU, building a robust pipeline that parses complex PDF layouts into clean markdown, which enabled downstream LLM analysis of legal contracts.",
                "Engineered a Hybrid RAG system (Vector + Keyword) for indexing 800+ legal statutes and internal playbooks; optimized retrieval precision by enforcing citation-backed generation, reducing unverified claims by ~12% in internal benchmarks.",
                "Developed a multi-step reasoning agent that automates contract auditing, reducing average review time per document from 45 mins to 6 mins (87% reduction) by providing pre-generated citations for human auditors.",
            ],
            technologies: ["GCP", "TypeScript", "MinerU", "Hybrid RAG", "Agentic AI"],
        },
    },
    {
        title: "Software Engineer Intern (AI Infrastructure)",
        company: "Huawei",
        logo: huaweiLogo,
        location: "Shenzhen, China",
        period: "Jul 2025 – Sep 2025",
        badge: "Internship",
        details: {
            summary: "Infrastructure orchestration and reliable platform services.",
            bullets: [
                "Implemented the DMA subsystem for the Unified Bus protocol by engineering a high-throughput receive-queue mechanism, improving data transfer rates by 20% in staging benchmarks and validating scalability for AI training clusters with 900+ nodes.",
                "Revamped the distributed integration testing framework for mission-critical firmware; increased critical-path code coverage from 93% to 98.9% by removing 40% of redundant mocks, reducing regression defect rates by ~30%.",
            ],
            technologies: ["Unified Bus", "DMA", "Distributed Systems", "Integration Testing"],
        },
    },
    {
        title: "Software Engineer Co-op",
        company: "Epic",
        logo: epicLogo,
        location: "Madison, Wisconsin",
        period: "Feb 2024 – May 2024",
        badge: "Internship",
        details: {
            summary: "Applied AI product work in a healthcare engineering context.",
            bullets: [
                "Prototyped a Medical Simplification Service for the MyChart backend, utilizing RAG to map complex clinical standards (SNOMED CT / ICD-10) and dense clinical narratives to patient-friendly explanations, enabling successful internal pilot testing of the new workflow.",
                "Validated the pipeline via controlled user studies, demonstrating a 12% increase in comprehension scores and a projected 20% reduction in support resolution time by isolating and rewriting high-frequency jargon.",
            ],
            technologies: ["MyChart", "RAG", "SNOMED CT", "ICD-10", "User Studies"],
        },
    },
];

export const educations = [
    {
        program: "Computer Science",
        school: "Brown University",
        logo: brownLogo,
        location: "Providence, Rhode Island",
        period: "Sep 2024 – Present",
        badge: "Master of Science",
    },
    {
        program: "Computer Science & Data Science",
        school: "University of Wisconsin – Madison",
        logo: uwmadisonLogo,
        location: "Madison, Wisconsin",
        period: "Sep 2020 – May 2024",
        badge: "Bachelor of Science",
    },
];

export const projects = [
    {
        title: "Google Ads",
        description: "Contributed to Google Ads, Google's online advertising product for building and managing campaigns.",
        url: "https://ads.google.com/",
        image: googleAdsImage,
        techStack: ["Google Ads", "Software Engineering"],
        category: "Ads Platform",
        status: "Contributed",
        role: "Product systems, ads platform",
        impact: "Working on product and systems surfaces that help advertisers create, manage, and improve campaigns.",
        highlights: ["campaign workflows", "ads systems", "product engineering"],
        visualClass: "bg-[#F8FAFC]",
        imageClass: "object-contain p-10 md:p-16",
    },
    {
        title: "GreenSand AI",
        description: "Service-contract intelligence that turns contract terms, risks, and fields into actionable workflows.",
        url: "https://sci.greensand.ai/",
        image: greenSandAiImage,
        techStack: ["Agentic AI", "RAG", "Contract Intelligence"],
        category: "Agentic AI Product",
        status: "Contributed",
        role: "Agent workflows, retrieval, product architecture",
        impact: "Built ingestion, retrieval, and reasoning workflows for legal contract analysis.",
        highlights: ["document ingestion", "hybrid retrieval", "audit automation"],
        visualClass: "bg-[#071A24]",
        imageClass: "object-cover",
    },
    {
        title: "UnifiedBus",
        description: "High-throughput protocol and data movement systems for AI infrastructure.",
        url: "https://www.unifiedbus.com/en",
        image: unifiedBusImage,
        techStack: ["UnifiedBus", "DMA", "Distributed Systems"],
        category: "AI Infrastructure",
        status: "Contributed",
        role: "Protocol systems, validation, infrastructure",
        impact: "Implemented receive-queue and validation work for scalable communication paths.",
        highlights: ["receive queue", "distributed tests", "AI training clusters"],
        visualClass: "bg-[#FAF9FF]",
        imageClass: "object-cover",
    },
    {
        title: "MyChart",
        description: "Healthcare product work focused on patient-friendly clinical information.",
        url: "https://www.mychart.org/l/en-us/",
        image: myChartImage,
        techStack: ["MyChart", "RAG", "Healthcare UX"],
        category: "Healthcare Product",
        status: "Contributed",
        role: "Applied AI product prototype",
        impact: "Prototyped simplification workflows for clearer patient-facing explanations.",
        highlights: ["medical simplification", "patient UX", "clinical language"],
        visualClass: "bg-[#FFF7F8]",
        imageClass: "object-cover",
    },
];

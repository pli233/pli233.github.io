import brownLogo from "@/assets/logos/brown.png"
import epicLogo from "@/assets/logos/epic.png"
import googleLogo from "@/assets/logos/google.png"
import greensandLogo from "@/assets/logos/greensand.png"
import huaweiLogo from "@/assets/logos/huawei.png"
import uwMadisonLogo from "@/assets/logos/uwmadison.png"
import profileImage from "@/assets/brown-id-photo.jpg"
import latestResume from "@/assets/Peiyuan Li Resume 26NG.pdf"
import googleAdsImage from "@/assets/projects/project-google-ads-4k.png"
import greensandImage from "@/assets/projects/project-greensand-ai-4k.webp"
import myChartImage from "@/assets/projects/project-mychart-4k.webp"
import unifiedBusImage from "@/assets/projects/project-unifiedbus-4k.webp"
import type {
  Education,
  Experience,
  NavigationItem,
  PersonalDetails,
  Project,
  SocialLinks,
  TechnologyGroup,
} from "@/types/portfolio"

export const personalDetails = {
  name: "Peiyuan Li",
  role: "Software Engineer at Google",
  location: "Mountain View, California",
  tagline: "AI-native software engineer.",
  about:
    "I build AI-native products and the systems behind them—reliable software, clear product thinking, and tools that hold up in real workflows.",
  image: profileImage,
} as const satisfies PersonalDetails

export const socialLinks = {
  email: "mailto:peiyuanli3627@outlook.com",
  github: "https://github.com/pli233",
  linkedin: "https://www.linkedin.com/in/peiyuan-li-257958277",
  resume: latestResume,
} as const satisfies SocialLinks

export const navigationItems = [
  { id: "overview", label: "Overview", href: "/#overview" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "toolkit", label: "Toolkit", href: "/#toolkit" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const satisfies readonly NavigationItem[]

export const experiences = [
  {
    id: "google",
    title: "Software Engineer",
    company: "Google",
    logo: googleLogo,
    location: "Mountain View, California",
    period: "Jul 2026 – Present",
    badge: "Full-time",
    details: {
      summary: "Google Ads product engineering.",
      bullets: ["Contributing to Google Ads."],
      technologies: ["Google Ads", "Software Engineering"],
    },
  },
  {
    id: "greensand-ai",
    title: "Software Engineer Intern · Agentic AI",
    company: "Greensand AI",
    logo: greensandLogo,
    location: "Remote",
    period: "Nov 2025 – Feb 2026",
    badge: "Internship",
    details: {
      summary: "Agent workflows, product architecture, and AI tooling.",
      bullets: [
        "Orchestrated the core ingestion infrastructure on GCP with TypeScript and MinerU, turning complex PDF layouts into clean markdown for downstream contract analysis.",
        "Engineered hybrid vector and keyword retrieval for 800+ legal statutes and internal playbooks, with citation-backed generation that reduced unverified claims by about 12% in internal benchmarks.",
        "Built a multi-step contract-auditing agent that reduced average review time from 45 minutes to 6 minutes by preparing citations for human auditors.",
      ],
      technologies: ["GCP", "TypeScript", "MinerU", "Hybrid RAG", "Agentic AI"],
    },
  },
  {
    id: "huawei",
    title: "Software Engineer Intern · AI Infrastructure",
    company: "Huawei",
    logo: huaweiLogo,
    location: "Shenzhen, China",
    period: "Jul 2025 – Sep 2025",
    badge: "Internship",
    details: {
      summary: "Infrastructure orchestration and reliable platform services.",
      bullets: [
        "Implemented the DMA subsystem for the Unified Bus protocol, improving staging data-transfer rates by 20% and validating scale for AI training clusters with more than 900 nodes.",
        "Revamped distributed firmware integration tests, raising critical-path coverage from 93% to 98.9% while removing 40% of redundant mocks.",
      ],
      technologies: ["Unified Bus", "DMA", "Distributed Systems", "Integration Testing"],
    },
  },
  {
    id: "epic",
    title: "Software Engineer Co-op",
    company: "Epic",
    logo: epicLogo,
    location: "Madison, Wisconsin",
    period: "Feb 2024 – May 2024",
    badge: "Internship",
    details: {
      summary: "Applied AI product work in a healthcare engineering context.",
      bullets: [
        "Prototyped a MyChart medical-simplification service that mapped clinical standards and dense narratives to patient-friendly explanations for an internal workflow pilot.",
        "Validated the pipeline in controlled studies, measuring a 12% lift in comprehension and a projected 20% reduction in support resolution time.",
      ],
      technologies: ["MyChart", "RAG", "SNOMED CT", "ICD-10", "User Studies"],
    },
  },
] as const satisfies readonly Experience[]

export const education = [
  {
    id: "brown",
    program: "Computer Science",
    school: "Brown University",
    logo: brownLogo,
    location: "Providence, Rhode Island",
    period: "Sep 2024 – Present",
    degree: "Master of Science",
  },
  {
    id: "uw-madison",
    program: "Computer Science & Data Science",
    school: "University of Wisconsin–Madison",
    logo: uwMadisonLogo,
    location: "Madison, Wisconsin",
    period: "Sep 2020 – May 2024",
    degree: "Bachelor of Science",
  },
] as const satisfies readonly Education[]

export const projects = [
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Advertising product systems for creating, managing, and improving campaigns.",
    url: "https://ads.google.com/",
    image: googleAdsImage,
    technology: ["Google Ads", "Product Engineering"],
    category: "Ads platform",
    role: "Product systems and ads platform",
    impact: "Contributing to product and systems surfaces used by advertisers around the world.",
    imageTreatment: "contain",
    surface: "bg-[#f7f9fc]",
  },
  {
    id: "greensand-ai",
    title: "GreenSand AI",
    description: "Contract intelligence that turns terms, risks, and fields into actionable workflows.",
    url: "https://sci.greensand.ai/",
    image: greensandImage,
    technology: ["Agentic AI", "Hybrid RAG", "GCP"],
    category: "AI product",
    role: "Agent workflows, retrieval, and product architecture",
    impact: "Built ingestion, retrieval, and reasoning workflows for legal contract analysis.",
    imageTreatment: "cover",
    surface: "bg-[#071a24]",
  },
  {
    id: "unified-bus",
    title: "UnifiedBus",
    description: "High-throughput protocol and data-movement systems for AI infrastructure.",
    url: "https://www.unifiedbus.com/en",
    image: unifiedBusImage,
    technology: ["DMA", "Distributed Systems", "Testing"],
    category: "AI infrastructure",
    role: "Protocol systems, validation, and infrastructure",
    impact: "Implemented receive-queue and validation work for scalable communication paths.",
    imageTreatment: "cover",
    surface: "bg-[#f8f7fb]",
  },
  {
    id: "mychart",
    title: "MyChart",
    description: "Patient-facing healthcare work focused on clearer clinical information.",
    url: "https://www.mychart.org/l/en-us/",
    image: myChartImage,
    technology: ["RAG", "Healthcare UX", "Clinical NLP"],
    category: "Healthcare product",
    role: "Applied AI product prototype",
    impact: "Prototyped simplification workflows for more understandable patient explanations.",
    imageTreatment: "cover",
    surface: "bg-[#fff7f8]",
  },
] as const satisfies readonly Project[]

export const technologyGroups = [
  {
    id: "languages",
    title: "Languages",
    icon: "braces",
    items: ["TypeScript", "Python", "C++", "Go", "Java", "SQL", "R"],
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    icon: "brain",
    items: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "RAG", "MCP"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "layers",
    items: ["React", "Next.js", "Spring Boot", "Django", "Tailwind CSS"],
  },
  {
    id: "data",
    title: "Data",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    id: "product",
    title: "Product craft",
    icon: "palette",
    items: ["Figma", "Design Systems", "Accessibility", "User Studies"],
  },
  {
    id: "platform",
    title: "Platform",
    icon: "workflow",
    items: ["GCP", "AWS", "Docker", "CI/CD", "GitHub", "Distributed Systems"],
  },
] as const satisfies readonly TechnologyGroup[]

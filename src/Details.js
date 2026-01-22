import me from "/src/assets/me.jpg";
import huaweiLogo from "/src/assets/logos/huawei.png";
import epicLogo from "/src/assets/logos/epic.png";
import greensandLogo from "/src/assets/logos/greensand.png";
import brownLogo from "/src/assets/logos/brown.png";
import uwmadisonLogo from "/src/assets/logos/uwmadison.png";
import latestResume from "/src/assets/Peiyuan Li Resume 26NG.pdf";
import aiLearningImg from "/src/assets/projects/ai_learning_platform.png";
import yoloOmrImg from "/src/assets/projects/yolo_omr.png";
import eplInsightImg from "/src/assets/projects/epl_insight.png";

export const personalDetails = {
    name: "Peiyuan Li",
    tagline: "Software Developer · AI Enthusiast",
    img: me, // 你可以把头像放到 public/me.jpg，然后这里写 "/me.jpg"
    about: `I’m currently pursuing an MS Degree in Computer Science at Brown University, 
    where my work spans software engineering and applied AI. During my intern at Huawei, 
    I focused on system infrastructure and orchestration, helping services become 
    more reliable and scalable across platforms. I’ve also built AI products, 
    including a medical chatbot during my co-op in Epic, and I’m exploring dataset 
    distillation research at Brown to make models more efficient with less data. 
    I’m driven by the challenge of translating AI ideas into robust, user-centered 
    systems that make a tangible difference.`,
};

export const socialMediaUrl = {
    linkedin: "https://www.linkedin.com/in/peiyuan-li-257958277",
    github: "https://github.com/pli233",
    email: "mailto:peiyuanli3627@outlook.com",
    resume: latestResume, // public/下的PDF
};

export const experienc = [
    {
        title: "AI Software Engineer Intern",
        company: "Greensand AI",
        logo: greensandLogo,
        location: "Remote, US",
        period: "Oct 2025 – Jan 2026",
        badge: "Internship",
    },
    {
        title: "AI Infrastructure Engineer Intern",
        company: "Huawei",
        logo: huaweiLogo,
        location: "Shenzhen, China",
        period: "Jul 2025 – Sep 2025",
        badge: "Internship",
    },
    {
        title: "Software Engineer Co-op",
        company: "Epic",
        logo: epicLogo,
        location: "Madison, WI, US",
        period: "Feb 2024 – Apr 2024",
        badge: "Internship",
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
        title: "AI Learning Platform",
        description: "Interactive AI/ML learning platform with comprehensive educational content including hands-on projects, concept notebooks, interview questions, and practice quizzes.",
        url: "https://ai-learning-pink.vercel.app/",
        image: aiLearningImg,
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Radix UI", "Laravel"],
        category: "Education Platform",
        status: "Live",
    },
    {
        title: "YOLO OMR",
        description: "Optical Music Recognition system powered by YOLO object detection, converting sheet music images into digital musical notation.",
        url: "https://yolo-omr.vercel.app/",
        image: yoloOmrImg,
        techStack: ["PyTorch", "YOLO", "Python", "Gradio", "Next.js"],
        category: "AI / Computer Vision",
        status: "Live",
    },
    {
        title: "EPL Insight",
        description: "AI-powered football analytics platform aggregating 50+ match metrics, utilizing GenAI to generate tactical reports and visualize predictive insights. Currently focused on EPL data with plans to expand.",
        url: "https://football-insight.vercel.app/",
        image: eplInsightImg,
        techStack: ["Next.js", "Python", "Pandas", "LangChain", "Supabase"],
        category: "Sports Analytics",
        status: "Live",
    },
];
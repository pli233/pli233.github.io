import me from "/src/assets/me.jpg";
import huaweiLogo from "/src/assets/logos/huawei.png";
import epicLogo from "/src/assets/logos/epic.png";
import brownLogo from "/src/assets/logos/brown.png";
import uwmadisonLogo from "/src/assets/logos/uwmadison.png";
import latestResume from "/src/assets/Peiyuan Li Resume 26NG.pdf"

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
        title: "Software Engineer Intern",
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
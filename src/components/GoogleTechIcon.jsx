import { useId } from "react";

const colors = {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC05",
    green: "#34A853",
    ink: "#202124",
    muted: "#DADCE0",
};

const themes = {
    white: ["#FFFFFF", "#F3F6FA"],
    blue: ["#1A73E8", "#0B57D0"],
    dark: ["#202124", "#050B18"],
    green: ["#1ECF75", "#0F9D58"],
    red: ["#FF4F6D", "#EA4335"],
};

function iconId(seed) {
    return seed.replace(/:/g, "").replace(/[^a-zA-Z0-9_-]/g, "");
}

function AppIcon({ children, className = "h-5 w-5", title, name, theme = "white" }) {
    const rawId = useId();
    const id = iconId(`${name}-${rawId}`);
    const [from, to] = themes[theme] || themes.white;

    return (
        <svg
            className={`google-tech-icon ${className}`}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={title ? undefined : true}
            role={title ? "img" : undefined}
            data-google-tech-icon={name}
        >
            {title && <title>{title}</title>}
            <defs>
                <linearGradient id={`${id}-bg`} x1="10" y1="7" x2="54" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stopColor={from} />
                    <stop offset="1" stopColor={to} />
                </linearGradient>
                <linearGradient id={`${id}-gloss`} x1="12" y1="6" x2="45" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
            </defs>
            <rect x="5" y="5" width="54" height="54" rx="14" fill={`url(#${id}-bg)`} />
            <rect x="6" y="5.5" width="52" height="31" rx="13" fill={`url(#${id}-gloss)`} opacity="0.55" />
            <rect x="5.5" y="5.5" width="53" height="53" rx="13.5" stroke="#DADCE0" strokeOpacity="0.75" />
            {children}
        </svg>
    );
}

const stroke = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

function ResumeIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <path d="M22 14h15l8 8v27a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z" fill="#FFFFFF" stroke="#DADCE0" strokeWidth="2" />
            <path d="M37 14v8h8" fill="#E8F0FE" stroke={colors.blue} strokeWidth="2" {...stroke} />
            <path d="M24 30h16" stroke={colors.blue} strokeWidth="3" {...stroke} />
            <path d="M24 37h12" stroke={colors.green} strokeWidth="3" {...stroke} />
            <path d="M24 44h6" stroke={colors.yellow} strokeWidth="3" {...stroke} />
            <path d="M34 44h8" stroke={colors.red} strokeWidth="3" {...stroke} />
        </AppIcon>
    );
}

function ContactIcon(props) {
    return (
        <AppIcon {...props} theme="blue">
            <path d="M18 20h28a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H30l-9 7v-7h-3a7 7 0 0 1-7-7V27a7 7 0 0 1 7-7Z" fill="#FFFFFF" />
            <circle cx="24" cy="32" r="3" fill={colors.blue} />
            <circle cx="32" cy="32" r="3" fill={colors.green} />
            <circle cx="40" cy="32" r="3" fill={colors.yellow} />
            <circle cx="48" cy="18" r="7" fill={colors.red} stroke="#FFFFFF" strokeWidth="2" />
        </AppIcon>
    );
}

function EmailIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <path d="M15 22v22a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V22L32 35 15 22Z" fill="#FFFFFF" stroke="#E6EAEE" strokeWidth="2" />
            <path d="M15 22 32 35 49 22" stroke={colors.red} strokeWidth="6" {...stroke} />
            <path d="M15 22v22" stroke={colors.blue} strokeWidth="6" {...stroke} />
            <path d="M49 22v22" stroke={colors.green} strokeWidth="6" {...stroke} />
            <path d="m15 22 17 13" stroke={colors.yellow} strokeWidth="4" {...stroke} />
            <path d="m49 22-17 13" stroke={colors.red} strokeWidth="4" {...stroke} />
        </AppIcon>
    );
}

function LinkedInIcon(props) {
    return (
        <AppIcon {...props} theme="blue">
            <circle cx="21" cy="22" r="4" fill="#FFFFFF" />
            <path d="M18 30v16" stroke="#FFFFFF" strokeWidth="6" {...stroke} />
            <path d="M29 46V31" stroke="#FFFFFF" strokeWidth="6" {...stroke} />
            <path d="M29 36c1.6-3.4 4.2-5.3 7.6-5.3 5.1 0 8.4 3.7 8.4 9.6V46" stroke="#FFFFFF" strokeWidth="6" {...stroke} />
        </AppIcon>
    );
}

function RepositoryIcon(props) {
    return (
        <AppIcon {...props} theme="dark">
            <path d="M16 22a5 5 0 0 1 5-5h9l4 5h11a5 5 0 0 1 5 5v17a5 5 0 0 1-5 5H21a5 5 0 0 1-5-5V22Z" fill="#FFFFFF" />
            <path d="m28 32-6 5 6 5" stroke={colors.blue} strokeWidth="4" {...stroke} />
            <path d="m38 32 6 5-6 5" stroke={colors.green} strokeWidth="4" {...stroke} />
            <path d="m34 29-4 16" stroke={colors.yellow} strokeWidth="4" {...stroke} />
        </AppIcon>
    );
}

function CodeIcon(props) {
    return (
        <AppIcon {...props} theme="blue">
            <path d="m25 23-9 9 9 9" stroke="#FFFFFF" strokeWidth="6" {...stroke} />
            <path d="m39 23 9 9-9 9" stroke="#FFFFFF" strokeWidth="6" {...stroke} />
            <path d="m34 19-5 26" stroke={colors.yellow} strokeWidth="5" {...stroke} />
        </AppIcon>
    );
}

function AiIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <path d="M22 26 32 18l10 8v12L32 46l-10-8V26Z" fill="#E8F0FE" stroke={colors.blue} strokeWidth="3" {...stroke} />
            <circle cx="32" cy="32" r="6" fill={colors.blue} />
            <circle cx="22" cy="26" r="4" fill={colors.red} />
            <circle cx="42" cy="26" r="4" fill={colors.green} />
            <circle cx="22" cy="38" r="4" fill={colors.yellow} />
            <circle cx="42" cy="38" r="4" fill={colors.blue} />
            <path d="M26 28 32 32l6-4M26 36l6-4 6 4" stroke="#FFFFFF" strokeWidth="2.4" {...stroke} />
        </AppIcon>
    );
}

function FrameworksIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <rect x="16" y="18" width="14" height="14" rx="4" fill={colors.blue} />
            <rect x="34" y="18" width="14" height="14" rx="4" fill={colors.red} />
            <rect x="16" y="36" width="14" height="14" rx="4" fill={colors.yellow} />
            <rect x="34" y="36" width="14" height="14" rx="4" fill={colors.green} />
            <path d="M30 25h4M23 32v4M41 32v4M30 43h4" stroke="#FFFFFF" strokeWidth="3" {...stroke} />
        </AppIcon>
    );
}

function UiUxIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <rect x="15" y="16" width="34" height="26" rx="6" fill="#E8F0FE" stroke={colors.blue} strokeWidth="3" />
            <path d="M15 24h34" stroke={colors.green} strokeWidth="3" {...stroke} />
            <rect x="21" y="29" width="10" height="7" rx="2" fill={colors.yellow} />
            <path d="m35 33 13 6-6 2.3-2.5 6.2-5-14.5Z" fill={colors.ink} stroke="#FFFFFF" strokeWidth="2" {...stroke} />
            <path d="M22 48h18" stroke={colors.red} strokeWidth="4" {...stroke} />
        </AppIcon>
    );
}

function DatabasesIcon(props) {
    return (
        <AppIcon {...props} theme="green">
            <ellipse cx="32" cy="20" rx="15" ry="7" fill="#FFFFFF" />
            <path d="M17 20v18c0 4 6.7 7 15 7s15-3 15-7V20" fill="#FFFFFF" />
            <path d="M17 29c0 4 6.7 7 15 7s15-3 15-7" stroke={colors.blue} strokeWidth="4" {...stroke} />
            <path d="M17 38c0 4 6.7 7 15 7s15-3 15-7" stroke={colors.yellow} strokeWidth="4" {...stroke} />
            <ellipse cx="32" cy="20" rx="15" ry="7" stroke="#FFFFFF" strokeWidth="3" />
        </AppIcon>
    );
}

function DevopsIcon(props) {
    return (
        <AppIcon {...props} theme="dark">
            <circle cx="32" cy="32" r="12" fill="#FFFFFF" />
            <path d="M32 16v6M32 42v6M16 32h6M42 32h6M21 21l4 4M39 39l4 4M43 21l-4 4M25 39l-4 4" stroke="#FFFFFF" strokeWidth="4" {...stroke} />
            <path d="M27 31a7 7 0 0 1 11-5" stroke={colors.blue} strokeWidth="4" {...stroke} />
            <path d="M37 33a7 7 0 0 1-11 5" stroke={colors.green} strokeWidth="4" {...stroke} />
            <path d="m38 23 1 6-6-1M26 41l-1-6 6 1" stroke={colors.yellow} strokeWidth="3" {...stroke} />
        </AppIcon>
    );
}

function CopyIcon(props) {
    return (
        <AppIcon {...props} theme="white">
            <rect x="18" y="16" width="24" height="30" rx="5" fill="#E8F0FE" stroke={colors.blue} strokeWidth="3" />
            <rect x="25" y="22" width="21" height="27" rx="5" fill="#FFFFFF" stroke={colors.green} strokeWidth="3" />
            <path d="M30 31h11M30 38h8" stroke={colors.red} strokeWidth="3" {...stroke} />
        </AppIcon>
    );
}

function CheckIcon(props) {
    return (
        <AppIcon {...props} theme="green">
            <path d="m20 33 8 8 17-19" stroke="#FFFFFF" strokeWidth="8" {...stroke} />
        </AppIcon>
    );
}

const iconMap = {
    resume: ResumeIcon,
    contact: ContactIcon,
    email: EmailIcon,
    linkedin: LinkedInIcon,
    github: RepositoryIcon,
    repository: RepositoryIcon,
    languages: CodeIcon,
    code: CodeIcon,
    ai: AiIcon,
    frameworks: FrameworksIcon,
    uiux: UiUxIcon,
    databases: DatabasesIcon,
    devops: DevopsIcon,
    copy: CopyIcon,
    check: CheckIcon,
};

export default function GoogleTechIcon({ name, className, title }) {
    const Icon = iconMap[name] || ResumeIcon;
    return <Icon name={name} className={className} title={title} />;
}

import {
    MdArticle,
    MdAutoAwesome,
    MdChatBubble,
    MdCheckCircle,
    MdCode,
    MdContentCopy,
    MdDesignServices,
    MdEmail,
    MdStorage,
    MdSync,
    MdViewModule,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const iconMap = {
    resume: { icon: MdArticle, tone: "blue" },
    contact: { icon: MdChatBubble, tone: "blue" },
    email: { icon: MdEmail, tone: "red" },
    linkedin: { icon: FaLinkedin, tone: "linkedin", brand: true },
    github: { icon: FaGithub, tone: "github", brand: true },
    repository: { icon: MdCode, tone: "gray" },
    languages: { icon: MdCode, tone: "blue" },
    code: { icon: MdCode, tone: "blue" },
    ai: { icon: MdAutoAwesome, tone: "yellow" },
    frameworks: { icon: MdViewModule, tone: "green" },
    uiux: { icon: MdDesignServices, tone: "red" },
    databases: { icon: MdStorage, tone: "green" },
    devops: { icon: MdSync, tone: "purple" },
    copy: { icon: MdContentCopy, tone: "blue" },
    check: { icon: MdCheckCircle, tone: "green" },
};

const toneStyles = {
    blue: {
        color: "#1a73e8",
        "--icon-color": "#1a73e8",
        "--icon-rgb": "26, 115, 232",
        "--icon-surface": "#e8f0fe",
    },
    red: {
        color: "#ea4335",
        "--icon-color": "#ea4335",
        "--icon-rgb": "234, 67, 53",
        "--icon-surface": "#fce8e6",
    },
    yellow: {
        color: "#f9ab00",
        "--icon-color": "#f9ab00",
        "--icon-rgb": "249, 171, 0",
        "--icon-surface": "#fef7e0",
    },
    green: {
        color: "#188038",
        "--icon-color": "#188038",
        "--icon-rgb": "24, 128, 56",
        "--icon-surface": "#e6f4ea",
    },
    purple: {
        color: "#673ab7",
        "--icon-color": "#673ab7",
        "--icon-rgb": "103, 58, 183",
        "--icon-surface": "#f1ecff",
    },
    gray: {
        color: "#3c4043",
        "--icon-color": "#3c4043",
        "--icon-rgb": "60, 64, 67",
        "--icon-surface": "#f8fafd",
    },
    linkedin: {
        color: "#0a66c2",
        "--icon-color": "#0a66c2",
    },
    github: {
        color: "#181717",
        "--icon-color": "#181717",
    },
};

function classNames(...values) {
    return values.filter(Boolean).join(" ");
}

function IconShell({ config, name, className = "h-5 w-5", title }) {
    const Icon = config.icon;
    const toneStyle = toneStyles[config.tone] || toneStyles.blue;
    const accessibility = title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true };

    if (config.brand) {
        return (
            <Icon
                className={classNames(
                    "google-tech-icon google-tech-icon-brand",
                    className,
                )}
                data-google-tech-icon={name}
                data-icon-tone={config.tone}
                focusable="false"
                style={toneStyle}
                {...accessibility}
            />
        );
    }

    return (
        <span
            className={classNames(
                "google-tech-icon google-tech-icon-tile",
                className,
            )}
            data-google-tech-icon={name}
            data-icon-tone={config.tone}
            style={toneStyle}
            {...accessibility}
        >
            <Icon aria-hidden="true" focusable="false" />
        </span>
    );
}

export default function GoogleTechIcon({ name, className, title }) {
    const config = iconMap[name] || iconMap.resume;
    return <IconShell config={config} name={name} className={className} title={title} />;
}

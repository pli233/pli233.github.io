import {
    MdAutoAwesome,
    MdChatBubble,
    MdCheckCircle,
    MdCode,
    MdContentCopy,
    MdDesignServices,
    MdStorage,
    MdSync,
    MdViewModule,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import gmailLogo from "../assets/logos/gmail.svg";
import resumeIcon from "../assets/icons/resume-3d.png";

type IconTone = "blue" | "red" | "yellow" | "green" | "purple" | "gray" | "linkedin" | "github" | "gmail";

interface IconConfig {
    readonly icon?: IconType;
    readonly image?: string;
    readonly tone: IconTone;
    readonly brand?: boolean;
}

type IconStyle = CSSProperties & Record<`--${string}`, string | number>;

const iconMap = {
    resume: { image: resumeIcon, tone: "blue", brand: true },
    contact: { icon: MdChatBubble, tone: "blue", brand: true },
    email: { image: gmailLogo, tone: "gmail", brand: true },
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
} satisfies Record<string, IconConfig>;

export type GoogleTechIconName = keyof typeof iconMap;

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
    gmail: {
        color: "#ea4335",
        "--icon-color": "#ea4335",
    },
} satisfies Record<IconTone, IconStyle>;

function classNames(...values: Array<string | false | null | undefined>) {
    return values.filter(Boolean).join(" ");
}

interface IconShellProps {
    readonly config: IconConfig;
    readonly name: GoogleTechIconName;
    readonly className?: string;
    readonly title?: string;
    readonly plain?: boolean;
}

function IconShell({ config, name, className = "h-5 w-5", title, plain = false }: IconShellProps) {
    const Icon = config.icon;
    const toneStyle = toneStyles[config.tone];
    const accessibility = title
        ? { role: "img", "aria-label": title }
        : { "aria-hidden": true };

    if (config.brand) {
        if (config.image) {
            return (
                <img
                    src={config.image}
                    alt={title || ""}
                    className={classNames(
                        "google-tech-icon google-tech-icon-brand",
                        className,
                    )}
                    data-google-tech-icon={name}
                    data-icon-tone={config.tone}
                    {...(title ? {} : { "aria-hidden": true })}
                />
            );
        }

        if (Icon) return (
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

        return null;
    }

    if (!Icon) return null;

    if (plain) {
        return (
            <Icon
                className={classNames("google-tech-icon google-tech-icon-plain", className)}
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

interface GoogleTechIconProps {
    readonly name: GoogleTechIconName;
    readonly className?: string;
    readonly title?: string;
    readonly plain?: boolean;
}

export default function GoogleTechIcon({ name, className, title, plain = false }: GoogleTechIconProps) {
    const config: IconConfig = iconMap[name];
    return <IconShell config={config} name={name} className={className} title={title} plain={plain} />;
}

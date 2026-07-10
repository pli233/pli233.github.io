const colors = {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC05",
    green: "#34A853",
    ink: "#1A1A2E",
    muted: "#A7B4C8",
};

function IconBase({ children, className = "h-5 w-5", title, name }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={title ? undefined : true}
            role={title ? "img" : undefined}
            data-google-tech-icon={name}
        >
            {title && <title>{title}</title>}
            {children}
        </svg>
    );
}

const strokeProps = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.9,
};

const icons = {
    resume: (
        <>
            <path {...strokeProps} d="M7 3.5h6.6L18 7.9V20.5H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" stroke={colors.blue} />
            <path {...strokeProps} d="M13.5 3.8v4.4h4.1" stroke={colors.yellow} />
            <path {...strokeProps} d="M8.5 11.5h7" stroke={colors.green} />
            <path {...strokeProps} d="M8.5 15h5.2" stroke={colors.red} />
        </>
    ),
    email: (
        <>
            <path {...strokeProps} d="M4.5 6.5h15a1.8 1.8 0 0 1 1.8 1.8v8.9a1.8 1.8 0 0 1-1.8 1.8h-15a1.8 1.8 0 0 1-1.8-1.8V8.3a1.8 1.8 0 0 1 1.8-1.8Z" stroke={colors.blue} />
            <path {...strokeProps} d="m4 8 7.1 5.1a1.6 1.6 0 0 0 1.8 0L20 8" stroke={colors.green} />
            <path {...strokeProps} d="m5 18 4.4-4" stroke={colors.yellow} />
            <path {...strokeProps} d="m19 18-4.4-4" stroke={colors.red} />
        </>
    ),
    linkedin: (
        <>
            <rect x="4" y="4" width="16" height="16" rx="4" stroke={colors.blue} strokeWidth="1.9" />
            <path {...strokeProps} d="M8 10v6.2" stroke={colors.blue} />
            <path d="M8 8.3h.01" stroke={colors.yellow} strokeWidth="2.6" strokeLinecap="round" />
            <path {...strokeProps} d="M11.3 16.2v-3.4c0-1.4.9-2.4 2.2-2.4s2.4.9 2.4 2.7v3.1" stroke={colors.green} />
            <path {...strokeProps} d="M11.3 10.7v5.5" stroke={colors.red} />
        </>
    ),
    github: (
        <>
            <path {...strokeProps} d="M7 6.8a7.1 7.1 0 0 1 10 0 7 7 0 0 1 1 8.6" stroke={colors.blue} />
            <path {...strokeProps} d="M6.3 16.3A7 7 0 0 1 7 6.8" stroke={colors.green} />
            <path {...strokeProps} d="M9 18.4c.8.4 1.9.6 3 .6s2.2-.2 3-.6" stroke={colors.red} />
            <path {...strokeProps} d="M9.2 15.5c-.5-.7-.8-1.4-.8-2.4 0-1 .3-1.8 1-2.5-.1-.8 0-1.5.3-2.1.8 0 1.6.4 2.2.9.7-.2 1.5-.2 2.2 0 .6-.5 1.4-.9 2.2-.9.3.6.4 1.3.3 2.1.7.7 1 1.5 1 2.5 0 1-.3 1.7-.8 2.4" stroke={colors.ink} />
            <path {...strokeProps} d="M10 17.5v-1.1c0-.4.3-.8.8-.8h2.4c.5 0 .8.4.8.8v1.1" stroke={colors.yellow} />
        </>
    ),
    contact: (
        <>
            <path {...strokeProps} d="M4.5 7.2h15a1.8 1.8 0 0 1 1.8 1.8v8.2a1.8 1.8 0 0 1-1.8 1.8h-15a1.8 1.8 0 0 1-1.8-1.8V9a1.8 1.8 0 0 1 1.8-1.8Z" stroke={colors.blue} />
            <path {...strokeProps} d="m4 8.7 7.1 4.9a1.7 1.7 0 0 0 1.8 0L20 8.7" stroke={colors.green} />
            <circle cx="18.2" cy="5.8" r="2.2" fill={colors.red} />
            <path d="M18.2 4.8v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M17.2 5.8h2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <path {...strokeProps} d="M6.5 17h4" stroke={colors.yellow} />
        </>
    ),
    languages: (
        <>
            <path {...strokeProps} d="m8.8 7-4.2 5 4.2 5" stroke={colors.blue} />
            <path {...strokeProps} d="m15.2 7 4.2 5-4.2 5" stroke={colors.green} />
            <path {...strokeProps} d="m13.2 5-2.4 14" stroke={colors.red} />
            <path {...strokeProps} d="M9.6 12h4.8" stroke={colors.yellow} />
        </>
    ),
    ai: (
        <>
            <circle cx="12" cy="12" r="2.7" stroke={colors.blue} strokeWidth="1.9" />
            <circle cx="6" cy="7" r="1.7" fill={colors.red} />
            <circle cx="18" cy="7" r="1.7" fill={colors.yellow} />
            <circle cx="7" cy="18" r="1.7" fill={colors.green} />
            <circle cx="18" cy="17" r="1.7" fill={colors.blue} />
            <path {...strokeProps} d="M7.3 8.2 10 10.4M16.7 8.2 14 10.4M8.5 17l2.4-2.8M15.3 15l1.6 1.1" stroke={colors.muted} />
            <path {...strokeProps} d="M12 3.8v2.4M20.2 12h-2.4" stroke={colors.green} />
        </>
    ),
    frameworks: (
        <>
            <rect x="4" y="5" width="7" height="6" rx="1.4" stroke={colors.blue} strokeWidth="1.9" />
            <rect x="13" y="5" width="7" height="6" rx="1.4" stroke={colors.red} strokeWidth="1.9" />
            <rect x="4" y="13" width="7" height="6" rx="1.4" stroke={colors.yellow} strokeWidth="1.9" />
            <rect x="13" y="13" width="7" height="6" rx="1.4" stroke={colors.green} strokeWidth="1.9" />
        </>
    ),
    uiux: (
        <>
            <rect x="4" y="4" width="16" height="13" rx="2.2" stroke={colors.blue} strokeWidth="1.9" />
            <path {...strokeProps} d="M7 8h4.5M7 11.5h8.5M7 20h10" stroke={colors.muted} />
            <path {...strokeProps} d="m14 14 5 2-2.2 1-1 2.2-1.8-5.2Z" stroke={colors.red} />
            <path {...strokeProps} d="M6.5 4.2v12.6" stroke={colors.yellow} />
            <path {...strokeProps} d="M4.2 7h15.6" stroke={colors.green} />
        </>
    ),
    databases: (
        <>
            <ellipse cx="12" cy="6" rx="7" ry="3" stroke={colors.blue} strokeWidth="1.9" />
            <path {...strokeProps} d="M5 6v5.5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke={colors.green} />
            <path {...strokeProps} d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" stroke={colors.red} />
            <path {...strokeProps} d="M6.8 13.3c1.2.8 3 1.2 5.2 1.2s4-.4 5.2-1.2" stroke={colors.yellow} />
        </>
    ),
    devops: (
        <>
            <path {...strokeProps} d="M8.8 9a4 4 0 0 1 6.4 0" stroke={colors.blue} />
            <path {...strokeProps} d="M8.8 15a4 4 0 0 0 6.4 0" stroke={colors.green} />
            <circle cx="6.5" cy="12" r="2.2" stroke={colors.red} strokeWidth="1.9" />
            <circle cx="17.5" cy="12" r="2.2" stroke={colors.yellow} strokeWidth="1.9" />
            <path {...strokeProps} d="M8.8 12h6.4M12 5v2.2M12 16.8V19" stroke={colors.muted} />
            <path {...strokeProps} d="M6.5 5.5h3M14.5 18.5h3" stroke={colors.blue} />
        </>
    ),
    external: (
        <>
            <path {...strokeProps} d="M6.5 6.5h6.5" stroke={colors.blue} />
            <path {...strokeProps} d="M6.5 17.5 17.5 6.5" stroke={colors.green} />
            <path {...strokeProps} d="M14 6.5h3.5V10" stroke={colors.red} />
            <path {...strokeProps} d="M6.5 10v7.5H14" stroke={colors.yellow} />
        </>
    ),
    copy: (
        <>
            <rect x="8" y="8" width="10" height="10" rx="2" stroke={colors.blue} strokeWidth="1.9" />
            <path {...strokeProps} d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" stroke={colors.green} />
            <path {...strokeProps} d="M11 13h4M11 16h2.5" stroke={colors.yellow} />
        </>
    ),
    check: (
        <>
            <circle cx="12" cy="12" r="8" stroke={colors.green} strokeWidth="1.9" />
            <path {...strokeProps} d="m8.4 12.2 2.4 2.4 5-5.2" stroke={colors.blue} />
            <path {...strokeProps} d="M6.2 8.6 8 7.4" stroke={colors.yellow} />
            <path {...strokeProps} d="M17.8 15.4 16 16.6" stroke={colors.red} />
        </>
    ),
};

export default function GoogleTechIcon({ name, className, title }) {
    return (
        <IconBase className={className} title={title} name={name}>
            {icons[name] || icons.resume}
        </IconBase>
    );
}

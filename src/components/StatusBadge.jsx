const badgeStyles = {
    masters: "bg-rose-50 text-rose-700 border-rose-200",
    bachelors: "bg-amber-50 text-amber-700 border-amber-200",
    internship: "bg-emerald-50 text-emerald-700 border-emerald-200",
    fulltime: "bg-blue-50 text-blue-700 border-blue-200",
    live: "bg-green-50 text-green-700 border-green-200",
    contributed: "bg-cyan-50 text-cyan-700 border-cyan-200",
    default: "bg-scandi-surface text-scandi-text-body border-scandi-border",
};

function getBadgeKey(label = "") {
    const normalized = label.toLowerCase().replace(/[\s-]/g, "");
    if (normalized.includes("master")) return "masters";
    if (normalized.includes("bachelor")) return "bachelors";
    if (normalized.includes("intern")) return "internship";
    if (normalized.includes("fulltime")) return "fulltime";
    if (normalized.includes("full")) return "fulltime";
    if (normalized.includes("live")) return "live";
    if (normalized.includes("contributed")) return "contributed";
    return "default";
}

export default function StatusBadge({ children, className = "" }) {
    const styleKey = getBadgeKey(String(children));

    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[styleKey]} ${className}`}>
            {children}
        </span>
    );
}

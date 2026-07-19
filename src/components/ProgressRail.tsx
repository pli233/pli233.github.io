import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import type { NavigationItem } from "../types/portfolio";
import GoogleTechIcon from "./GoogleTechIcon";
import LineSidebar from "./LineSidebar";
import signature from "../assets/signature.png";

interface ProgressRailProps {
    readonly items: readonly NavigationItem[];
    readonly isActive: (section: string) => boolean;
    readonly onNavigate: (
        event: MouseEvent<HTMLAnchorElement> | null,
        href: string,
        section: string,
    ) => void;
    readonly isExpanded: boolean;
    readonly onToggle: () => void;
    readonly showSectionRail: boolean;
    readonly isResumePage: boolean;
}

export default function ProgressRail({
    items,
    isActive,
    onNavigate,
    isExpanded,
    onToggle,
    showSectionRail,
    isResumePage,
}: ProgressRailProps) {
    const railItems = items.filter((item) => item.section !== "home");
    const activeIndex = railItems.findIndex((item) => isActive(item.section));

    return (
        <aside className="pointer-events-none fixed inset-0 z-50">
            <div className="relative h-full w-full">
                {showSectionRail && (
                    <div className="pointer-events-auto absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
                        <LineSidebar
                            items={railItems.map((item) => item.label)}
                            accentColor="#707070"
                            textColor="#5f6368"
                            markerColor="#d1d1d1"
                            showIndex={false}
                            showMarker
                            proximityRadius={100}
                            maxShift={18}
                            falloff="smooth"
                            markerLength={12}
                            markerGap={0}
                            railInset={16}
                            tickScale={0.5}
                            scaleTick
                            itemGap={0}
                            fontSize={0.4}
                            smoothing={100}
                            defaultActive={activeIndex >= 0 ? activeIndex : null}
                            activeIndex={activeIndex >= 0 ? activeIndex : null}
                            onItemClick={(index) => {
                                const item = railItems[index];
                                if (item) {
                                    onNavigate(null, item.href, item.section);
                                }
                            }}
                            className="line-sidebar-hidden-resting"
                        />
                    </div>
                )}

                <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
                    {isExpanded && (
                        <div id="progress-navigation" className="progress-navigation-panel pointer-events-auto absolute bottom-[calc(100%+8px)] right-0 w-48 rounded-2xl border border-scandi-border/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(60,64,67,0.14)] backdrop-blur-xl">
                            <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-scandi-text-muted">Navigate</p>
                            <div className="flex flex-col gap-1">
                                {items.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={(event) => onNavigate(event, item.href, item.section)}
                                        className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                                            isActive(item.section)
                                                ? "bg-scandi-surface text-scandi-charcoal"
                                                : "text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <Link
                                    to="/resume"
                                    onClick={() => {
                                        if (isExpanded) onToggle();
                                    }}
                                    aria-current={isResumePage ? "page" : undefined}
                                    className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                                        isResumePage
                                            ? "bg-scandi-surface text-scandi-charcoal"
                                            : "text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal"
                                    }`}
                                >
                                    Resume
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="flex min-w-[272px] items-center justify-center gap-2 rounded-[28px] border border-scandi-border/80 bg-white/92 px-4 py-2 shadow-[0_12px_32px_rgba(60,64,67,0.12)] backdrop-blur-md">
                        <Link to="/" aria-label="Peiyuan Li home" className="rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35">
                            <img src={signature} alt="Peiyuan Li" className="h-8 w-24 object-contain" />
                        </Link>
                        <Link
                            to="/resume"
                            aria-label="Resume"
                            aria-current={isResumePage ? "page" : undefined}
                            className={`rounded-xl p-2 transition-[opacity,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35 ${
                                isResumePage
                                    ? "bg-scandi-surface opacity-100"
                                    : "opacity-75 hover:bg-scandi-surface hover:opacity-100"
                            }`}
                        >
                            <GoogleTechIcon name="resume" className="h-6 w-6" />
                        </Link>
                        <button
                            type="button"
                            onClick={onToggle}
                            aria-expanded={isExpanded}
                            aria-controls="progress-navigation"
                            aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
                            className="rounded-xl p-2 text-scandi-text-secondary transition-[background-color,color,transform] hover:bg-scandi-surface hover:text-scandi-charcoal active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {isExpanded ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

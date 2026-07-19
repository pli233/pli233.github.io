import { Link } from "react-router-dom";
import GoogleTechIcon from "./GoogleTechIcon";
import LineSidebar from "./LineSidebar";
import signature from "../assets/signature.png";

export default function ProgressRail({ items, isActive, onNavigate, isExpanded, onToggle }) {
    const activeIndex = items.findIndex((item) => isActive(item.section));

    return (
        <aside className="pointer-events-none fixed inset-0 z-50">
            <div className="relative h-full w-full">
                <div className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 sm:left-6">
                    <LineSidebar
                        items={items.map((item) => item.label)}
                        accentColor="#1a73e8"
                        textColor="#5f6368"
                        markerColor="#dfe6f3"
                        showIndex={false}
                        showMarker
                        proximityRadius={100}
                        maxShift={22}
                        falloff="smooth"
                        markerLength={32}
                        markerGap={12}
                        tickScale={0.5}
                        scaleTick
                        itemGap={12}
                        fontSize={0.78}
                        smoothing={100}
                        defaultActive={activeIndex >= 0 ? activeIndex : null}
                        activeIndex={activeIndex >= 0 ? activeIndex : null}
                        onItemClick={(index) => {
                            const item = items[index];
                            if (item) {
                                onNavigate({ preventDefault() {} }, item.href, item.section);
                            }
                        }}
                        className="line-sidebar-hidden-resting"
                    />
                </div>

                <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
                    <div className="flex min-w-[248px] items-center justify-center gap-2 rounded-[28px] border border-scandi-border/80 bg-white/92 p-3 shadow-[0_12px_32px_rgba(60,64,67,0.12)] backdrop-blur-md">
                        <Link to="/" aria-label="Peiyuan Li home" className="rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35">
                            <img src={signature} alt="Peiyuan Li" className="h-8 w-24 object-contain" />
                        </Link>
                        <a
                            href="/resume"
                            aria-label="Resume"
                            className="rounded-xl p-2 opacity-75 transition-[opacity,background-color] hover:bg-scandi-surface hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35"
                        >
                            <GoogleTechIcon name="resume" className="h-6 w-6" />
                        </a>
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

                {isExpanded && (
                    <div id="progress-navigation" className="absolute bottom-[68px] left-1/2 w-48 -translate-x-1/2 rounded-2xl border border-scandi-border/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(60,64,67,0.14)] backdrop-blur-xl">
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
                            <a href="/resume" className="rounded-xl px-3 py-2 text-sm font-medium text-scandi-text-secondary transition-colors hover:bg-scandi-surface hover:text-scandi-charcoal">
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}

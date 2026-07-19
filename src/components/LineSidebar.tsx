import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { cn } from "@/lib/utils";

type Falloff = "linear" | "smooth" | "sharp";

export interface LineSidebarProps {
    items?: readonly string[];
    accentColor?: string;
    textColor?: string;
    markerColor?: string;
    showIndex?: boolean;
    showMarker?: boolean;
    proximityRadius?: number;
    maxShift?: number;
    falloff?: Falloff;
    markerLength?: number;
    markerGap?: number;
    railInset?: number;
    /** Kept for API compatibility; the between-item ticks are intentionally hidden. */
    tickScale?: number;
    /** Kept for API compatibility; the between-item ticks are intentionally hidden. */
    scaleTick?: boolean;
    itemGap?: number;
    fontSize?: number;
    smoothing?: number;
    defaultActive?: number | null;
    activeIndex?: number | null;
    onItemClick?: (index: number, label: string) => void;
    className?: string;
}

const FALLOFF_CURVES: Record<Falloff, (progress: number) => number> = {
    linear: (progress) => progress,
    smooth: (progress) => progress * progress * (3 - 2 * progress),
    sharp: (progress) => progress * progress * progress,
};

const DEFAULT_ITEMS = [
    "Overview",
    "Components",
    "Animations",
    "Backgrounds",
    "Showcase",
    "Playground",
    "Templates",
    "Changelog",
    "Community",
    "Resources",
    "Documentation",
    "Support",
] as const;

export default function LineSidebar({
    items = DEFAULT_ITEMS,
    accentColor = "#A855F7",
    textColor = "#c4c4c4",
    markerColor = "#6c6c6c",
    showIndex = true,
    showMarker = true,
    proximityRadius = 100,
    maxShift = 30,
    falloff = "smooth",
    markerLength = 60,
    markerGap = 0,
    railInset = 0,
    itemGap = 20,
    fontSize = 1.1,
    smoothing = 100,
    defaultActive = null,
    activeIndex: controlledActiveIndex,
    onItemClick,
    className = "",
}: LineSidebarProps) {
    const listRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const targetsRef = useRef<number[]>([]);
    const currentRef = useRef<number[]>([]);
    const rafRef = useRef<number | null>(null);
    const lastRef = useRef(0);
    const activeRef = useRef<number | null>(defaultActive);
    const smoothingRef = useRef(smoothing);
    const [uncontrolledActiveIndex, setUncontrolledActiveIndex] = useState<number | null>(defaultActive);
    const activeIndex = controlledActiveIndex ?? uncontrolledActiveIndex;
    const markerOffset = showMarker ? markerLength + markerGap : 0;
    const railOffset = markerOffset + railInset;

    activeRef.current = activeIndex;
    smoothingRef.current = smoothing;

    const runFrame = useCallback((now: number) => {
        const delta = Math.min((now - lastRef.current) / 1000, 0.05);
        lastRef.current = now;
        const tau = Math.max(smoothingRef.current, 1) / 1000;
        const easing = 1 - Math.exp(-delta / tau);
        let moving = false;

        itemRefs.current.forEach((element, index) => {
            if (!element) {
                return;
            }

            const target = Math.max(targetsRef.current[index] || 0, activeRef.current === index ? 1 : 0);
            const current = currentRef.current[index] || 0;
            const next = current + (target - current) * easing;
            const settled = Math.abs(target - next) < 0.0015;
            const value = settled ? target : next;

            currentRef.current[index] = value;
            element.style.setProperty("--effect", value.toFixed(4));

            if (!settled) {
                moving = true;
            }
        });

        rafRef.current = moving ? window.requestAnimationFrame(runFrame) : null;
    }, []);

    const startLoop = useCallback(() => {
        if (rafRef.current !== null) {
            return;
        }

        lastRef.current = window.performance.now();
        rafRef.current = window.requestAnimationFrame(runFrame);
    }, [runFrame]);

    const handlePointerMove = useCallback((event: PointerEvent<HTMLUListElement>) => {
        const list = listRef.current;
        if (!list) {
            return;
        }

        const rect = list.getBoundingClientRect();
        const pointerY = event.clientY - rect.top;
        const ease = FALLOFF_CURVES[falloff] ?? FALLOFF_CURVES.linear;
        let nearestIndex = -1;
        let nearestDistance = Number.POSITIVE_INFINITY;

        itemRefs.current.forEach((element, index) => {
            if (!element) {
                return;
            }

            const center = element.offsetTop + element.offsetHeight / 2;
            const distance = Math.abs(pointerY - center);
            targetsRef.current[index] = ease(Math.max(0, 1 - distance / proximityRadius));
            delete element.dataset.nearby;

            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        const nearestElement = itemRefs.current[nearestIndex];
        if (nearestElement) {
            nearestElement.dataset.nearby = "true";
        }

        startLoop();
    }, [falloff, proximityRadius, startLoop]);

    const handlePointerLeave = useCallback(() => {
        targetsRef.current = targetsRef.current.map(() => 0);
        itemRefs.current.forEach((element) => {
            if (element) {
                delete element.dataset.nearby;
            }
        });
        startLoop();
    }, [startLoop]);

    const handleClick = useCallback((index: number, label: string) => {
        setUncontrolledActiveIndex(index);
        onItemClick?.(index, label);
    }, [onItemClick]);

    useEffect(() => {
        startLoop();
    }, [activeIndex, startLoop]);

    useEffect(() => () => {
        if (rafRef.current !== null) {
            window.cancelAnimationFrame(rafRef.current);
        }
    }, []);

    return (
        <nav
            aria-label="Page progress"
            className={cn("line-sidebar relative flex justify-start", className)}
            style={{
                "--accent-color": accentColor,
                "--text-color": textColor,
                "--marker-color": markerColor,
                "--marker-length": `${markerLength}px`,
                "--marker-gap": `${markerGap}px`,
                "--max-shift": `${maxShift}px`,
                "--item-gap": `${itemGap}px`,
                "--font-size": `${fontSize}rem`,
                paddingLeft: `${railOffset}px`,
            } as CSSProperties}
        >
            <ul
                ref={listRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="m-0 flex list-none flex-col py-5 pr-[60px]"
                style={{
                    gap: `${itemGap}px`,
                    marginLeft: `-${railOffset}px`,
                    paddingLeft: `${railOffset}px`,
                }}
            >
                {items.map((label, index) => (
                    <li
                        key={label}
                        ref={(element) => {
                            itemRefs.current[index] = element;
                        }}
                        data-active={activeIndex === index ? "true" : undefined}
                        className="group relative py-0"
                    >
                        <button
                            type="button"
                            aria-current={activeIndex === index ? "location" : undefined}
                            onClick={() => handleClick(index, label)}
                            className="relative block w-full cursor-pointer py-0 text-left focus-visible:outline-none"
                        >
                            {showMarker && (
                                <span
                                    aria-hidden="true"
                                    className="line-sidebar-marker absolute top-1/2 block h-[2px] origin-left -translate-y-1/2 rounded-full"
                                    style={{
                                        left: `calc(-1 * ${markerLength + markerGap}px)`,
                                        width: `${markerLength}px`,
                                        backgroundColor: "color-mix(in srgb, var(--accent-color) calc(var(--effect, 0) * 100%), var(--marker-color))",
                                        transform: "translateY(-50%) scaleX(calc(0.7 + var(--effect, 0) * 0.5))",
                                    }}
                                />
                            )}
                            <span
                                className="line-sidebar-label relative inline-flex items-baseline leading-[1.2]"
                                style={{
                                    color: "color-mix(in srgb, var(--accent-color) calc(var(--effect, 0) * 100%), var(--text-color))",
                                    fontSize: "var(--font-size)",
                                    transform: "translateX(calc(var(--effect, 0) * var(--max-shift)))",
                                }}
                            >
                                {showIndex && (
                                    <span className="mr-[0.6rem] font-mono text-[0.85em] opacity-70">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                )}
                                <span>{label}</span>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

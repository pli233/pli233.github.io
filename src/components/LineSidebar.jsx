import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.jsx";

const FALLOFF_CURVES = {
    linear: (progress) => progress,
    smooth: (progress) => progress * progress * (3 - 2 * progress),
    sharp: (progress) => progress * progress * progress,
};

export default function LineSidebar({
    items = [],
    accentColor = "#1a73e8",
    textColor = "#5f6368",
    markerColor = "#dfe6f3",
    showIndex = false,
    showMarker = true,
    proximityRadius = 100,
    maxShift = 30,
    falloff = "smooth",
    markerLength = 32,
    markerGap = 12,
    tickScale = 0.5,
    scaleTick = true,
    itemGap = 16,
    fontSize = 0.85,
    smoothing = 100,
    defaultActive = null,
    activeIndex: controlledActiveIndex,
    onItemClick,
    className = "",
}) {
    const listRef = useRef(null);
    const itemRefs = useRef([]);
    const targetsRef = useRef([]);
    const currentRef = useRef([]);
    const frameRef = useRef(null);
    const lastRef = useRef(0);
    const smoothingRef = useRef(smoothing);
    const prefersReducedMotion = usePrefersReducedMotion();
    const [uncontrolledActiveIndex, setUncontrolledActiveIndex] = useState(defaultActive);
    const activeIndex = controlledActiveIndex ?? uncontrolledActiveIndex;

    smoothingRef.current = smoothing;

    const runFrame = useCallback((now) => {
        const delta = Math.min((now - lastRef.current) / 1000, 0.05);
        lastRef.current = now;
        const tau = Math.max(smoothingRef.current, 1) / 1000;
        const easing = 1 - Math.exp(-delta / tau);
        let moving = false;

        itemRefs.current.forEach((element, index) => {
            if (!element) {
                return;
            }

            const target = Math.max(targetsRef.current[index] || 0, activeIndex === index ? 1 : 0);
            const current = currentRef.current[index] || 0;
            const next = current + (target - current) * easing;
            const settled = Math.abs(target - next) < 0.0015;
            const value = settled ? target : next;

            currentRef.current[index] = value;
            element.style.setProperty("--line-effect", value.toFixed(4));

            if (!settled) {
                moving = true;
            }
        });

        frameRef.current = moving ? window.requestAnimationFrame(runFrame) : null;
    }, [activeIndex]);

    const startLoop = useCallback(() => {
        if (frameRef.current !== null) {
            return;
        }

        lastRef.current = window.performance.now();
        frameRef.current = window.requestAnimationFrame(runFrame);
    }, [runFrame]);

    const handlePointerMove = useCallback((event) => {
        if (prefersReducedMotion) {
            return;
        }

        const list = listRef.current;
        if (!list) {
            return;
        }

        const rect = list.getBoundingClientRect();
        const pointerY = event.clientY - rect.top;
        const ease = FALLOFF_CURVES[falloff] || FALLOFF_CURVES.linear;

        itemRefs.current.forEach((element, index) => {
            if (!element) {
                return;
            }

            const center = element.offsetTop + element.offsetHeight / 2;
            const distance = Math.abs(pointerY - center);
            targetsRef.current[index] = ease(Math.max(0, 1 - distance / proximityRadius));
        });

        startLoop();
    }, [falloff, prefersReducedMotion, proximityRadius, startLoop]);

    const handlePointerLeave = useCallback(() => {
        targetsRef.current = targetsRef.current.map(() => 0);
        startLoop();
    }, [startLoop]);

    const handleClick = useCallback((index, label) => {
        setUncontrolledActiveIndex(index);
        onItemClick?.(index, label);
    }, [onItemClick]);

    useEffect(() => {
        startLoop();
    }, [activeIndex, startLoop]);

    useEffect(() => () => {
        if (frameRef.current !== null) {
            window.cancelAnimationFrame(frameRef.current);
        }
    }, []);

    return (
        <nav
            aria-label="Page progress"
            className={`line-sidebar relative flex justify-start ${className}`}
            style={{
                "--line-accent": accentColor,
                "--line-text": textColor,
                "--line-marker": markerColor,
                "--line-marker-length": `${markerLength}px`,
                "--line-marker-gap": `${markerGap}px`,
                "--line-tick-scale": tickScale,
                "--line-max-shift": `${maxShift}px`,
                "--line-item-gap": `${itemGap}px`,
                "--line-font-size": `${fontSize}rem`,
                paddingLeft: showMarker ? `${markerLength + markerGap}px` : undefined,
            }}
        >
            <ul
                ref={listRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="m-0 flex list-none flex-col py-4"
                style={{ gap: `${itemGap}px` }}
            >
                {items.map((label, index) => (
                    <li
                        key={`${label}-${index}`}
                        ref={(element) => {
                            itemRefs.current[index] = element;
                        }}
                        role="link"
                        tabIndex={0}
                        aria-current={activeIndex === index ? "location" : undefined}
                        onClick={() => handleClick(index, label)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                handleClick(index, label);
                            }
                        }}
                        className="group relative cursor-pointer py-1 focus-visible:outline-none"
                    >
                        {showMarker && (
                            <>
                                <span
                                    aria-hidden="true"
                                    className="line-sidebar-marker absolute top-1/2 block h-[3px] origin-left -translate-y-1/2 rounded-full transition-[height,box-shadow] duration-150 group-focus-visible:h-1"
                                    style={{
                                        left: `calc(-1 * ${markerLength + markerGap}px)`,
                                        width: `${markerLength}px`,
                                        backgroundColor: `color-mix(in srgb, var(--line-accent) calc(var(--line-effect, 0) * 100%), var(--line-marker))`,
                                        transform: `translateY(-50%) scaleX(${scaleTick ? "calc(0.7 + var(--line-effect, 0) * 0.5)" : "1"})`,
                                        boxShadow: "0 0 0 0 rgba(26, 115, 232, 0)",
                                    }}
                                />
                                {index < items.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="line-sidebar-tick absolute left-[calc(-1*var(--line-marker-length)-var(--line-marker-gap))] top-[calc(100%+var(--line-item-gap)/2)] h-px origin-left"
                                        style={{
                                            width: `${markerLength * tickScale}px`,
                                            backgroundColor: `color-mix(in srgb, var(--line-accent) calc(var(--line-effect, 0) * 100%), var(--line-marker))`,
                                            transform: `translateY(-50%) scaleX(${scaleTick ? "calc(0.7 + var(--line-effect, 0) * 0.6)" : "1"})`,
                                        }}
                                    />
                                )}
                            </>
                        )}
                        <span
                            className="line-sidebar-label relative inline-flex items-baseline leading-[1.2] transition-[color,transform,opacity,font-weight] duration-150 group-focus-visible:font-semibold"
                            style={{
                                color: `color-mix(in srgb, var(--line-accent) calc(var(--line-effect, 0) * 100%), var(--line-text))`,
                                fontSize: "var(--line-font-size)",
                                transform: "translateX(calc(var(--line-effect, 0) * var(--line-max-shift)))",
                                opacity: "var(--line-effect, 0)",
                            }}
                        >
                            {showIndex && (
                                <span className="mr-2 font-mono text-[0.85em] opacity-70">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            )}
                            <span>{label}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

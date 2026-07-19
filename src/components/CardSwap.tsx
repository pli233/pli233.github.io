import {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
} from "react";
import type {
    CSSProperties,
    HTMLAttributes,
    MouseEvent,
    ReactElement,
    ReactNode,
    RefAttributes,
} from "react";
import gsap from "gsap";

interface CardSlot {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly zIndex: number;
}

export interface CardSwapHandle {
    next: () => void;
    previous: () => void;
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    readonly customClass?: string;
}

interface CardSwapProps {
    readonly width?: CSSProperties["width"];
    readonly height?: CSSProperties["height"];
    readonly cardDistance?: number;
    readonly verticalDistance?: number;
    readonly delay?: number;
    readonly pauseOnHover?: boolean;
    readonly onCardClick?: (index: number) => void;
    readonly skewAmount?: number;
    readonly easing?: "smooth" | "elastic";
    readonly children: ReactNode;
}

type CardElement = ReactElement<CardProps & RefAttributes<HTMLDivElement>>;

const makeSlot = (index: number, distanceX: number, distanceY: number, total: number): CardSlot => ({
    x: index * distanceX,
    y: -index * distanceY,
    z: -index * distanceX * 1.5,
    zIndex: total - index,
});

const placeNow = (element: HTMLDivElement, slot: CardSlot, skew: number) => {
    gsap.set(element, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skew,
        transformOrigin: "center center",
        zIndex: slot.zIndex,
        force3D: true,
    });
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card({ customClass = "", className = "", ...rest }, ref) {
    return (
        <div
            ref={ref}
            {...rest}
            className={`absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] border border-scandi-border bg-white shadow-[0_18px_60px_rgba(26,26,46,0.12)] [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform] ${customClass} ${className}`.trim()}
        />
    );
});

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(function CardSwap(
    {
        width = 500,
        height = 400,
        cardDistance = 60,
        verticalDistance = 70,
        delay = 5000,
        pauseOnHover = false,
        onCardClick,
        skewAmount = 6,
        easing = "smooth",
        children,
    },
    ref
) {
    const childArray = useMemo(
        () => Children.toArray(children).filter(
            (child): child is CardElement => isValidElement<CardProps & RefAttributes<HTMLDivElement>>(child),
        ),
        [children]
    );
    const refs = useRef<Array<HTMLDivElement | null>>([]);
    const order = useRef<number[]>([]);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const timeoutId = useRef<number | null>(null);
    const paused = useRef(false);
    const container = useRef<HTMLDivElement>(null);
    const controls = useRef<CardSwapHandle>({
        next: () => {},
        previous: () => {},
    });

    useImperativeHandle(ref, () => ({
        next: () => controls.current.next(),
        previous: () => controls.current.previous(),
    }));

    useEffect(() => {
        const total = childArray.length;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        order.current = Array.from({ length: total }, (_, index) => index);

        refs.current.forEach((element, index) => {
            if (element) {
                placeNow(
                    element,
                    makeSlot(index, cardDistance, verticalDistance, total),
                    skewAmount
                );
            }
        });

        const config = prefersReducedMotion
            ? {
                ease: "none",
                dropDuration: 0,
                moveDuration: 0,
                returnDuration: 0,
                promoteOverlap: 0,
            }
            : easing === "elastic"
                ? {
                    ease: "elastic.out(0.6, 0.9)",
                    dropDuration: 1.45,
                    moveDuration: 1.25,
                    returnDuration: 1.35,
                    promoteOverlap: 0.72,
                }
                : {
                    ease: "power3.out",
                    dropDuration: 0.62,
                    moveDuration: 0.62,
                    returnDuration: 0.62,
                    promoteOverlap: 0.32,
                };

        const clearScheduledSwap = () => {
            if (timeoutId.current !== null) {
                window.clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        };

        const scheduleSwap = (swap: () => void) => {
            clearScheduledSwap();
            if (!paused.current && !prefersReducedMotion) {
                timeoutId.current = window.setTimeout(swap, delay);
            }
        };

        const interruptActiveSwap = () => {
            if (!timeline.current) return;
            timeline.current.kill();
            timeline.current = null;
        };

        const swapNext = (manual = false) => {
            if (order.current.length < 2 || (!manual && paused.current)) return;

            interruptActiveSwap();
            clearScheduledSwap();

            const front = order.current[0];
            const rest = order.current.slice(1);
            if (front === undefined) return;
            const frontElement = refs.current[front];

            if (!frontElement) return;

            const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
            const nextTimeline = gsap.timeline({
                onComplete: () => {
                    order.current = [...rest, front];
                    timeline.current = null;
                    scheduleSwap(() => swapNext());
                },
            });

            timeline.current = nextTimeline;

            nextTimeline.to(frontElement, {
                yPercent: 75,
                duration: config.dropDuration,
                ease: config.ease,
            });

            nextTimeline.addLabel("promote", `-=${config.dropDuration * config.promoteOverlap}`);

            rest.forEach((index, slotIndex) => {
                const element = refs.current[index];
                if (!element) return;

                const slot = makeSlot(slotIndex, cardDistance, verticalDistance, total);
                nextTimeline.set(element, { zIndex: slot.zIndex }, "promote");
                nextTimeline.to(
                    element,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        yPercent: -50,
                        duration: config.moveDuration,
                        ease: config.ease,
                    },
                    `promote+=${slotIndex * 0.08}`
                );
            });

            nextTimeline.set(frontElement, { zIndex: backSlot.zIndex }, "promote");
            nextTimeline.to(
                frontElement,
                {
                    x: backSlot.x,
                    y: backSlot.y,
                    z: backSlot.z,
                    yPercent: -50,
                    duration: config.returnDuration,
                    ease: config.ease,
                },
                `promote+=${config.moveDuration * 0.12}`
            );
        };

        const swapPrevious = (manual = false) => {
            if (order.current.length < 2 || (!manual && paused.current)) return;

            interruptActiveSwap();
            clearScheduledSwap();

            const current = order.current;
            const previous = current[current.length - 1];
            const rest = current.slice(0, -1);
            if (previous === undefined) return;
            const previousElement = refs.current[previous];

            if (!previousElement) return;

            const nextTimeline = gsap.timeline({
                onComplete: () => {
                    order.current = [previous, ...rest];
                    timeline.current = null;
                    scheduleSwap(() => swapNext());
                },
            });

            timeline.current = nextTimeline;

            const frontSlot = makeSlot(0, cardDistance, verticalDistance, total);
            nextTimeline.set(previousElement, { zIndex: total + 1 }, 0);
            nextTimeline.to(previousElement, {
                x: frontSlot.x,
                y: frontSlot.y,
                z: frontSlot.z,
                yPercent: -50,
                duration: config.moveDuration,
                ease: config.ease,
            });

            rest.forEach((index, slotIndex) => {
                const element = refs.current[index];
                if (!element) return;

                const slot = makeSlot(slotIndex + 1, cardDistance, verticalDistance, total);
                nextTimeline.set(element, { zIndex: slot.zIndex }, 0);
                nextTimeline.to(
                    element,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        yPercent: -50,
                        duration: config.moveDuration,
                        ease: config.ease,
                    },
                    slotIndex * 0.08
                );
            });
        };

        controls.current = {
            next: () => swapNext(true),
            previous: () => swapPrevious(true),
        };

        scheduleSwap(() => swapNext());

        const node = container.current;
        const pause = () => {
            if (!pauseOnHover) return;
            paused.current = true;
            clearScheduledSwap();
            timeline.current?.pause();
        };
        const resume = () => {
            if (!pauseOnHover) return;
            paused.current = false;
            if (timeline.current) {
                timeline.current.resume();
            } else {
                scheduleSwap(() => swapNext());
            }
        };

        node?.addEventListener("mouseenter", pause);
        node?.addEventListener("mouseleave", resume);

        return () => {
            clearScheduledSwap();
            controls.current = {
                next: () => {},
                previous: () => {},
            };
            timeline.current?.kill();
            timeline.current = null;
            node?.removeEventListener("mouseenter", pause);
            node?.removeEventListener("mouseleave", resume);
        };
    }, [
        cardDistance,
        childArray.length,
        delay,
        easing,
        pauseOnHover,
        skewAmount,
        verticalDistance,
    ]);

    const renderedChildren = childArray.map((child, index) =>
        cloneElement(child, {
            key: child.key ?? index,
            ref: (node: HTMLDivElement | null) => {
                refs.current[index] = node;
            },
            style: {
                width,
                height,
                ...child.props.style,
            },
            onClick: (event: MouseEvent<HTMLDivElement>) => {
                child.props.onClick?.(event);
                onCardClick?.(index);
            },
        })
    );

    return (
        <div
            ref={container}
            className="relative transform-gpu [perspective:1200px]"
            style={{ width, height }}
        >
            <div className="absolute inset-0 [transform-style:preserve-3d]">
                {renderedChildren}
            </div>
        </div>
    );
});

export default CardSwap;

import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealOnScrollProps {
    readonly children: ReactNode;
    readonly className?: string;
    readonly delay?: number;
    readonly direction?: RevealDirection;
}

export default function RevealOnScroll({ children, className = "", delay = 0, direction = "up" }: RevealOnScrollProps) {
    const { ref, isVisible } = useScrollReveal();

    const directionStyles: Record<RevealDirection, string> = {
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
        none: "",
    };

    return (
        <div
            ref={ref}
            className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
                isVisible
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : `opacity-0 ${directionStyles[direction]}`
            } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                willChange: isVisible ? "auto" : "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}

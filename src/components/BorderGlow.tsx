import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type GlowEffect = "border" | "specular";

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>;

interface BorderGlowProps {
    readonly children: ReactNode;
    readonly edgeSensitivity?: number;
    readonly glowColor?: string;
    readonly backgroundColor?: string;
    readonly borderRadius?: number;
    readonly glowRadius?: number;
    readonly glowIntensity?: number;
    readonly coneSpread?: number;
    readonly animated?: boolean;
    readonly effect?: GlowEffect;
    readonly colors?: readonly string[];
    readonly className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function BorderGlow({
    children,
    edgeSensitivity = 30,
    glowColor = "40 80 80",
    backgroundColor = "transparent",
    borderRadius = 28,
    glowRadius = 40,
    glowIntensity = 1,
    coneSpread = 25,
    animated = false,
    effect = "border",
    colors = ["#c084fc", "#f472b6", "#38bdf8"],
    className = "",
}: BorderGlowProps) {
    const shellRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => () => {
        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }
    }, []);

    const resetGlow = () => {
        const shell = shellRef.current;

        if (!shell) {
            return;
        }

        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }

        shell.style.setProperty("--border-glow-opacity", "0");
        shell.style.setProperty("--border-glow-x", "50%");
        shell.style.setProperty("--border-glow-y", "50%");
        shell.removeAttribute("data-glowing");
    };

    const updateGlow = (event: PointerEvent<HTMLDivElement>) => {
        const shell = shellRef.current;

        if (!shell || effect === "specular" || prefersReducedMotion || event.pointerType === "touch") {
            return;
        }

        const rect = shell.getBoundingClientRect();
        const x = clamp(event.clientX - rect.left, 0, rect.width);
        const y = clamp(event.clientY - rect.top, 0, rect.height);
        const distanceToEdge = Math.min(x, y, rect.width - x, rect.height - y);
        const proximity = clamp(1 - distanceToEdge / Math.max(edgeSensitivity, 1), 0, 1);

        if (proximity <= 0) {
            resetGlow();
            return;
        }

        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI) + 90;

        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = window.requestAnimationFrame(() => {
            shell.style.setProperty("--border-glow-opacity", `${proximity * glowIntensity}`);
            shell.style.setProperty("--border-glow-x", `${((x / rect.width) * 100).toFixed(1)}%`);
            shell.style.setProperty("--border-glow-y", `${((y / rect.height) * 100).toFixed(1)}%`);
            shell.style.setProperty("--border-glow-angle", `${animated ? angle : 0}deg`);
            shell.dataset.glowing = "true";
        });
    };

    return (
        <div
            ref={shellRef}
            className={`border-glow-shell ${effect === "specular" ? "border-glow-shell-specular" : ""} ${animated ? "border-glow-shell-animated" : ""} ${className}`}
            style={{
                "--border-glow-radius": `${borderRadius}px`,
                "--border-glow-radius-inner": `${Math.max(borderRadius - 1, 0)}px`,
                "--border-glow-background": backgroundColor,
                "--border-glow-color": glowColor.includes(" ") ? `rgb(${glowColor})` : glowColor,
                "--border-glow-radius-size": `${glowRadius}px`,
                "--border-glow-cone-spread": `${coneSpread}deg`,
                "--border-glow-color-1": colors[0] || "#c084fc",
                "--border-glow-color-2": colors[1] || colors[0] || "#f472b6",
                "--border-glow-color-3": colors[2] || colors[1] || colors[0] || "#38bdf8",
            } as GlowStyle}
            onPointerMove={updateGlow}
            onPointerLeave={resetGlow}
            onPointerCancel={resetGlow}
        >
            {children}
        </div>
    );
}

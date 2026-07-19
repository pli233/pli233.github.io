import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEventHandler, PointerEvent } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type ProfileStyle = CSSProperties & Record<`--${string}`, string | number>;

interface ProfileCardProps {
    readonly name: string;
    readonly title: string;
    readonly handle?: string;
    readonly status?: string;
    readonly contactText?: string;
    readonly avatarUrl: string;
    readonly showUserInfo?: boolean;
    readonly enableTilt?: boolean;
    readonly enableMobileTilt?: boolean;
    readonly onContactClick?: MouseEventHandler<HTMLButtonElement>;
    readonly behindGlowColor?: string;
    readonly iconUrl?: string;
    readonly behindGlowEnabled?: boolean;
    readonly innerGradient?: string;
    readonly grainUrl?: string;
    readonly className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProfileCard({
    name,
    title,
    handle,
    status = "Online",
    contactText = "Contact Me",
    avatarUrl,
    showUserInfo = true,
    enableTilt = true,
    enableMobileTilt = false,
    onContactClick,
    behindGlowColor = "rgba(125, 190, 255, 0.67)",
    iconUrl,
    behindGlowEnabled = true,
    innerGradient = "linear-gradient(145deg, rgba(96, 73, 110, 0.55) 0%, rgba(113, 196, 255, 0.18) 100%)",
    grainUrl,
    className = "",
}: ProfileCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => () => {
        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }
    }, []);

    const setCardPosition = (event: PointerEvent<HTMLDivElement>) => {
        const card = cardRef.current;

        if (
            !card ||
            prefersReducedMotion ||
            !enableTilt ||
            (event.pointerType === "touch" && !enableMobileTilt)
        ) {
            return;
        }

        const rect = card.getBoundingClientRect();
        const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        const rotateX = (0.5 - y) * 10;
        const rotateY = (x - 0.5) * 12;

        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = window.requestAnimationFrame(() => {
            card.style.setProperty("--profile-rotate-x", `${rotateX.toFixed(2)}deg`);
            card.style.setProperty("--profile-rotate-y", `${rotateY.toFixed(2)}deg`);
            card.dataset.engaged = "true";
        });
    };

    const resetCardPosition = () => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        if (frameRef.current) {
            window.cancelAnimationFrame(frameRef.current);
        }

        card.style.setProperty("--profile-rotate-x", "0deg");
        card.style.setProperty("--profile-rotate-y", "0deg");
        delete card.dataset.engaged;
    };

    return (
        <div
            className={`profile-card-shell ${className}`}
            style={{
                "--profile-glow-color": behindGlowColor,
                "--profile-inner-gradient": innerGradient,
            } as ProfileStyle}
        >
            {behindGlowEnabled && <div className="profile-card-glow" aria-hidden="true" />}

            <div
                ref={cardRef}
                className="profile-card"
                onPointerMove={setCardPosition}
                onPointerLeave={resetCardPosition}
                onPointerCancel={resetCardPosition}
                role="img"
                aria-label={`${name || "Profile"}${title ? `, ${title}` : ""}`}
            >
                <img src={avatarUrl} alt="" className="profile-card-avatar" />
                <div className="profile-card-gradient" aria-hidden="true" />

                {iconUrl && (
                    <img src={iconUrl} alt="" className="profile-card-pattern" aria-hidden="true" />
                )}

                {grainUrl && (
                    <img src={grainUrl} alt="" className="profile-card-grain" aria-hidden="true" />
                )}

                <div className="profile-card-vignette" aria-hidden="true" />

                <div className="profile-card-info">
                    <div className="profile-card-status-row">
                        <span>{status}</span>
                    </div>
                    <p className="profile-card-title">{title}</p>

                    {showUserInfo && (name || handle) && (
                        <div className="profile-card-user-info">
                            {name && <span>{name}</span>}
                            {handle && <span>@{handle}</span>}
                        </div>
                    )}

                    {onContactClick && (
                        <button type="button" className="profile-card-contact" onClick={onContactClick}>
                            {contactText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
    readonly rootMargin?: string;
    readonly threshold?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const rootMargin = options.rootMargin ?? "0px 0px -40px 0px";
    const threshold = options.threshold ?? 0.15;

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        const el = ref.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, [rootMargin, threshold]);

    return { ref, isVisible };
}

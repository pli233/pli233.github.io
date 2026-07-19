import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import type { NavigationItem } from "../types/portfolio";
import ProgressRail from "./ProgressRail";

const navItems: readonly NavigationItem[] = [
    { href: "/#home", label: "Home", section: "home" },
    { href: "/#education", label: "Education", section: "education" },
    { href: "/#experience", label: "Experience", section: "experience" },
    { href: "/#projects", label: "Projects", section: "projects" },
    { href: "/#technologies", label: "Tech Stack", section: "technologies" },
    { href: "/#contact", label: "Contact", section: "contact" },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState<string | null>("home");
    const [isRailExpanded, setIsRailExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let frameId: number | null = null;

        const updateNavigation = () => {
            if (frameId !== null) return;

            frameId = window.requestAnimationFrame(() => {
                frameId = null;

                if (location.pathname !== "/") {
                    setActiveSection(null);
                    return;
                }

                const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
                if (isAtBottom) {
                    setActiveSection("contact");
                    return;
                }

                for (const section of ["contact", "technologies", "projects", "experience", "education", "home"]) {
                    const element = document.getElementById(section);
                    if (element && element.getBoundingClientRect().top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            });
        };

        updateNavigation();
        window.addEventListener("scroll", updateNavigation, { passive: true });
        window.addEventListener("resize", updateNavigation, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateNavigation);
            window.removeEventListener("resize", updateNavigation);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, [location.pathname]);

    useEffect(() => {
        const hash = location.hash;
        if (hash && location.pathname === "/") {
            const sectionId = hash.replace("#", "");
            let attempts = 0;

            const scrollToSection = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                    setActiveSection(sectionId);
                } else if (attempts < 50) {
                    attempts++;
                    window.requestAnimationFrame(scrollToSection);
                }
            };

            window.requestAnimationFrame(scrollToSection);
        }
    }, [location]);

    const handleNavigate = (
        event: MouseEvent<HTMLAnchorElement> | null,
        href: string,
        section: string,
    ) => {
        if (location.pathname === "/") {
            event?.preventDefault();
            const element = document.getElementById(section);
            if (element) {
                const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                window.history.pushState(null, "", href);
                setActiveSection(section);
            }
        }
    };

    const isActive = (section: string) => location.pathname === "/" && activeSection === section;

    const handleToggleRail = () => setIsRailExpanded((expanded) => !expanded);

    return (
        <ProgressRail
            items={navItems}
            isActive={isActive}
            onNavigate={(event, href, section) => {
                handleNavigate(event, href, section);
                setIsRailExpanded(false);
            }}
            isExpanded={isRailExpanded}
            onToggle={handleToggleRail}
        />
    );
}

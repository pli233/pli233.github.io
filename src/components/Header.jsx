import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { personalDetails } from "../Details.js";
import signature from "../assets/signature.png";
import GoogleTechIcon from "./GoogleTechIcon";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            if (location.pathname === "/") {
                const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
                if (isAtBottom) {
                    setActiveSection("contact");
                    return;
                }
                const sections = ["contact", "technologies", "projects", "experience", "education", "home"];
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const hash = location.hash;
        if (hash && location.pathname === "/") {
            const sectionId = hash.replace("#", "");
            let attempts = 0;
            const maxAttempts = 50;
            const scrollToSection = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(sectionId);
                } else if (attempts < maxAttempts) {
                    attempts++;
                    requestAnimationFrame(scrollToSection);
                }
            };
            requestAnimationFrame(scrollToSection);
        }
    }, [location]);

    const navItems = [
        { href: "/#education", label: "Education", section: "education" },
        { href: "/#experience", label: "Experience", section: "experience" },
        { href: "/#projects", label: "Projects", section: "projects" },
        { href: "/#technologies", label: "Tech Stack", section: "technologies" },
        { href: "/#contact", label: "Contact", section: "contact" },
    ];

    const handleNavClick = (e, href, section) => {
        if (section) {
            if (location.pathname === "/") {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", href);
                }
            }
        }
        setIsMobileMenuOpen(false);
    };

    const isActive = (section) => {
        if (section === null) return location.pathname === "/resume";
        return location.pathname === "/" && activeSection === section;
    };

    return (
        <header
            className="pointer-events-none fixed left-0 right-0 top-3 z-50 px-4 sm:px-6"
        >
            <nav
                className={`pointer-events-auto mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-full border border-scandi-border/80 bg-scandi-bg/85 px-4 shadow-sm shadow-black/[0.04] backdrop-blur-xl transition-all duration-300 sm:px-6 lg:px-8 ${
                    isScrolled ? 'bg-scandi-bg/92 shadow-lg shadow-black/[0.07]' : ''
                }`}
            >
                <div className="flex h-14 items-center justify-between sm:h-16">
                    {/* Logo */}
                    <div className="flex min-w-0 items-center gap-10">
                        <Link to="/" className="flex items-center group">
                            <img src={signature} alt={personalDetails.name} className="h-7 object-contain sm:h-8" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                                    className={`text-sm font-medium transition-colors duration-200 relative ${
                                        isActive(item.section)
                                            ? 'text-scandi-charcoal after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-scandi-sage after:rounded-full'
                                            : 'text-scandi-text-secondary hover:text-scandi-charcoal'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Link
                                to="/resume"
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive(null)
                                        ? 'bg-scandi-surface text-scandi-charcoal'
                                        : 'text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal'
                                }`}
                            >
                                <GoogleTechIcon name="resume" className="h-6 w-6" />
                                Resume
                            </Link>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {/* Resume Link */}
                        <Link
                            to="/resume"
                            className={`hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 sm:inline-flex lg:hidden ${
                                isActive(null)
                                    ? 'bg-scandi-surface text-scandi-charcoal'
                                    : 'text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal'
                            }`}
                        >
                            <GoogleTechIcon name="resume" className="h-6 w-6" />
                            Resume
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="rounded-full p-2 text-scandi-text-secondary transition-colors hover:bg-scandi-surface lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="pointer-events-auto mx-auto mt-2 w-[88vw] max-w-[1080px] animate-slide-down rounded-[28px] border border-scandi-border/80 bg-scandi-bg/95 p-2 shadow-lg shadow-black/[0.07] backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href, item.section)}
                                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                                    isActive(item.section)
                                        ? 'bg-scandi-surface text-scandi-charcoal'
                                        : 'text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

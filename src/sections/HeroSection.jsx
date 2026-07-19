import { useState, useEffect } from "react";
import { personalDetails, socialMediaUrl } from "../Details.js";
import GoogleTechIcon from "../components/GoogleTechIcon";
import ProfileCard from "../components/ProfileCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion.jsx";

const heroIntroFrames = ["AI-native.", "AI-native software engineer."];

export default function HeroSection() {
    const { name, img, about } = personalDetails;
    const [introFrame, setIntroFrame] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            setIntroFrame(heroIntroFrames.length - 1);
            return undefined;
        }

        setIntroFrame(0);
        const frameTimeout = window.setTimeout(() => {
            setIntroFrame(heroIntroFrames.length - 1);
        }, 900);

        return () => {
            window.clearTimeout(frameTimeout);
        };
    }, [prefersReducedMotion]);

    return (
        <section id="home" className="min-h-screen pt-[76px]">
            <div className="section-container py-20 flex items-center min-h-[calc(100vh-76px)]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
                    {/* Text Content */}
                    <div className="order-2 flex-1 space-y-6 animate-fade-in lg:order-1">
                        <p className="text-scandi-text-secondary text-sm font-semibold uppercase tracking-[0.18em] sm:text-base">
                            Hi, I'm
                        </p>

                        <h1 className="font-serif text-5xl leading-[1.04] tracking-[-0.04em] text-scandi-charcoal sm:text-6xl lg:text-7xl">
                            {name}
                        </h1>

                        <div className="flex min-h-12 items-center" aria-live="polite">
                            <p key={introFrame} className="hero-intro-text hero-tagline text-[2rem] text-scandi-sage sm:text-[2.4rem]">
                                {heroIntroFrames[introFrame]}
                            </p>
                        </div>

                        <p className="text-scandi-text-body text-[15px] leading-[1.8] max-w-xl">
                            {about}
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-3">
                            <a href="#contact" className="btn-primary">
                                <GoogleTechIcon name="contact" className="h-6 w-6" />
                                <span>Contact Me</span>
                            </a>
                            <a href="/resume" className="btn-outline">
                                <GoogleTechIcon name="resume" className="h-6 w-6" />
                                <span>View Resume</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href={socialMediaUrl.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35"
                                aria-label="LinkedIn"
                            >
                                <GoogleTechIcon name="linkedin" className="h-8 w-8" />
                            </a>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35"
                                aria-label="GitHub"
                            >
                                <GoogleTechIcon name="github" className="h-8 w-8" />
                            </a>
                            <a
                                href={socialMediaUrl.email}
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35"
                                aria-label="Email"
                            >
                                <GoogleTechIcon name="email" className="h-8 w-8" />
                            </a>
                        </div>
                    </div>

                    {/* Profile card */}
                    <div className="order-1 animate-slide-up lg:order-2">
                        <ProfileCard
                            name={name}
                            title="Software Engineer at Google"
                            status="Currently"
                            avatarUrl={img}
                            showUserInfo={false}
                            enableTilt
                            enableMobileTilt={false}
                            behindGlowColor="rgba(125, 190, 255, 0.67)"
                            behindGlowEnabled
                            innerGradient="linear-gradient(145deg, rgba(96, 73, 110, 0.50) 0%, rgba(113, 196, 255, 0.16) 100%)"
                            className="h-[340px] w-[300px] sm:h-[400px] sm:w-[360px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

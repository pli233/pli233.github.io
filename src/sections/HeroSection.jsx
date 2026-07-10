import { useState, useEffect } from "react";
import { personalDetails, socialMediaUrl } from "../Details.js";
import GoogleTechIcon from "../components/GoogleTechIcon";

const heroRoles = ["Full Stack Engineer", "AI Application Developer"];

export default function HeroSection() {
    const { name, img, about } = personalDetails;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const currentRole = heroRoles[currentIndex];
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex <= currentRole.length) {
                setDisplayedText(currentRole.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % heroRoles.length);
                }, 2000);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <section id="home" className="min-h-screen pt-[76px]">
            <div className="section-container py-20 flex items-center min-h-[calc(100vh-76px)]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 animate-fade-in order-2 lg:order-1">
                        <p className="text-scandi-text-secondary text-lg sm:text-xl font-medium tracking-wide uppercase">
                            Hi, I'm
                        </p>

                        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-scandi-charcoal tracking-tight leading-[1.1]">
                            {name}
                        </h1>

                        <div className="h-9">
                            <p className="text-xl sm:text-2xl text-scandi-sage font-medium">
                                {displayedText}
                                <span className="animate-pulse-soft ml-0.5 text-scandi-sage/60">|</span>
                            </p>
                        </div>

                        <p className="text-scandi-text-body text-[15px] leading-[1.8] max-w-xl">
                            {about}
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-3">
                            <a href="#contact" className="btn-contact">
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
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10"
                                aria-label="LinkedIn"
                            >
                                <GoogleTechIcon name="linkedin" className="h-8 w-8" />
                            </a>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10"
                                aria-label="GitHub"
                            >
                                <GoogleTechIcon name="github" className="h-8 w-8" />
                            </a>
                            <a
                                href={socialMediaUrl.email}
                                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:shadow-md hover:shadow-[#4285F4]/10"
                                aria-label="Email"
                            >
                                <GoogleTechIcon name="email" className="h-8 w-8" />
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 animate-slide-up">
                        <div className="relative">
                            <div className="w-[300px] h-[340px] sm:w-[360px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-xl shadow-black/[0.08]">
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

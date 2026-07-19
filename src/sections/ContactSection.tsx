import { useEffect, useRef, useState } from "react";
import { socialMediaUrl } from "../Details";
import RevealOnScroll from "../components/RevealOnScroll";
import GoogleTechIcon from "../components/GoogleTechIcon";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const resetTimerRef = useRef<number | null>(null);
    const emailAddr = socialMediaUrl.email.replace("mailto:", "");

    useEffect(() => () => {
        if (resetTimerRef.current !== null) {
            window.clearTimeout(resetTimerRef.current);
        }
    }, []);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddr);
            setCopied(true);
            if (resetTimerRef.current !== null) {
                window.clearTimeout(resetTimerRef.current);
            }
            resetTimerRef.current = window.setTimeout(() => {
                setCopied(false);
                resetTimerRef.current = null;
            }, 2000);
        } catch {
            window.prompt("Copy email:", emailAddr);
        }
    };

    return (
        <section id="contact" className="py-16 pb-24">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header text-center">
                        <h2>Get in Touch</h2>
                        <p>Feel free to reach out through any of these channels</p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-5">
                    {/* Email */}
                    <RevealOnScroll delay={0}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03]">
                                <GoogleTechIcon name="email" className="h-12 w-12" />
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">Email</h3>
                            <p className="text-scandi-text-secondary text-[13px]">{emailAddr}</p>
                            <button
                                type="button"
                                onClick={copyEmail}
                                className="btn-outline text-xs mt-auto"
                                aria-live="polite"
                            >
                                <GoogleTechIcon name={copied ? "check" : "copy"} className="h-5 w-5" plain />
                                <span>{copied ? "Copied!" : "Copy Address"}</span>
                            </button>
                        </div>
                    </RevealOnScroll>

                    {/* LinkedIn */}
                    <RevealOnScroll delay={120}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03]">
                                <GoogleTechIcon name="linkedin" className="h-12 w-12" />
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">LinkedIn</h3>
                            <p className="text-scandi-text-secondary text-[13px]">Connect with me professionally</p>
                            <a
                                href={socialMediaUrl.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs mt-auto"
                            >
                                <GoogleTechIcon name="linkedin" className="h-5 w-5" />
                                <span>Visit Profile</span>
                            </a>
                        </div>
                    </RevealOnScroll>

                    {/* GitHub */}
                    <RevealOnScroll delay={240}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="flex h-16 w-16 items-center justify-center rounded-[24px] border border-[#DDE8FC] bg-white shadow-sm shadow-black/[0.03]">
                                <GoogleTechIcon name="github" className="h-12 w-12" />
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">GitHub</h3>
                            <p className="text-scandi-text-secondary text-[13px]">Check out my open source work</p>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs mt-auto"
                            >
                                <GoogleTechIcon name="github" className="h-5 w-5" />
                                <span>Visit Profile</span>
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { socialMediaUrl } from "../Details";
import resumePreview from "../assets/resume-preview.png";
import signature from "../assets/signature.png";
import ResumeActions from "../components/resume/ResumeActions";
import ResumePreview from "../components/resume/ResumePreview";

export default function Resume() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Resume · Peiyuan Li";

        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <main className="relative isolate min-h-screen overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-40 top-16 h-[30rem] w-[30rem] rounded-full bg-[#dbe9ff]/55 blur-3xl" />
                <div className="absolute -left-40 top-[32rem] h-[24rem] w-[24rem] rounded-full bg-[#f5e9df]/45 blur-3xl" />
            </div>

            <div className="section-container relative">
                <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
                    <div className="max-w-2xl">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-lg py-1 text-sm font-semibold text-scandi-text-secondary transition-colors hover:text-scandi-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/40"
                        >
                            <HiArrowLeft aria-hidden="true" className="h-4 w-4" />
                            Back to portfolio
                        </Link>

                        <div className="mt-8 flex items-center gap-4 sm:gap-5">
                            <Link
                                to="/"
                                aria-label="Peiyuan Li home"
                                className="inline-flex shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35 focus-visible:ring-offset-4"
                            >
                                <img
                                    src={signature}
                                    alt="Peiyuan Li"
                                    className="h-10 w-28 object-contain drop-shadow-[0_4px_12px_rgba(24,25,27,0.1)] transition-opacity hover:opacity-70 sm:h-11 sm:w-32"
                                />
                            </Link>
                            <h1 className="font-sans text-5xl font-medium leading-none tracking-[-0.05em] text-scandi-charcoal sm:text-6xl lg:text-7xl">
                                Resume
                            </h1>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        <ResumeActions pdfUrl={socialMediaUrl.resume} />
                    </div>
                </header>

                <section aria-label="Resume document" className="mt-8 scroll-mt-0">
                    <ResumePreview pdfUrl={socialMediaUrl.resume} previewUrl={resumePreview} />
                </section>
            </div>
        </main>
    );
}

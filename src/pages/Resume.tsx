import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { socialMediaUrl } from "../Details";
import resumePreview from "../assets/resume-preview.png";
import ResumeActions from "../components/resume/ResumeActions";
import ResumePreview from "../components/resume/ResumePreview";

export default function Resume() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Résumé · Peiyuan Li";

        return () => {
            document.title = previousTitle;
        };
    }, []);

    return (
        <main className="relative isolate min-h-screen overflow-hidden pb-40 pt-10 sm:pb-44 sm:pt-14 lg:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-40 top-16 h-[30rem] w-[30rem] rounded-full bg-[#dbe9ff]/55 blur-3xl" />
                <div className="absolute -left-40 top-[32rem] h-[24rem] w-[24rem] rounded-full bg-[#f5e9df]/45 blur-3xl" />
            </div>

            <div className="section-container relative">
                <header className="grid gap-9 border-b border-scandi-border/80 pb-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:pb-11">
                    <div className="max-w-2xl">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-lg py-1 text-sm font-semibold text-scandi-text-secondary transition-colors hover:text-scandi-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/40"
                        >
                            <HiArrowLeft aria-hidden="true" className="h-4 w-4" />
                            Back to portfolio
                        </Link>

                        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-scandi-text-muted">
                            Peiyuan Li · Software engineer
                        </p>
                        <h1 className="mt-3 font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-scandi-charcoal sm:text-6xl lg:text-7xl">
                            Résumé
                        </h1>
                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-scandi-text-secondary sm:text-base">
                            Software engineer building AI-native products and the reliable systems behind them.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto lg:min-w-[360px]">
                        <div className="mb-4 flex items-center justify-between border-b border-scandi-border/75 pb-3 text-xs font-medium text-scandi-text-muted">
                            <span>One-page PDF</span>
                            <span className="inline-flex items-center gap-2 text-scandi-text-secondary">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#34a853] shadow-[0_0_0_4px_rgba(52,168,83,0.1)]" />
                                Ready to download
                            </span>
                        </div>
                        <ResumeActions pdfUrl={socialMediaUrl.resume} />
                    </div>
                </header>

                <section aria-label="Résumé document" className="mt-8 scroll-mt-0 sm:mt-10">
                    <ResumePreview pdfUrl={socialMediaUrl.resume} previewUrl={resumePreview} />
                </section>
            </div>
        </main>
    );
}

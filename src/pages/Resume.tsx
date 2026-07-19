import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { socialMediaUrl } from "../Details";
import resumePreview from "../assets/resume-preview.png";
import signatureResume from "../assets/signature-resume.png";
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

                        <h1 className="mt-5 w-full sm:w-64">
                            <Link
                                to="/"
                                aria-label="Resume — back to portfolio"
                                className="block rounded-lg transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/35 focus-visible:ring-offset-4"
                            >
                                <img
                                    src={signatureResume}
                                    alt="Peiyuan Li Resume"
                                    className="h-auto w-full drop-shadow-[0_4px_12px_rgba(24,25,27,0.1)]"
                                />
                            </Link>
                        </h1>
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

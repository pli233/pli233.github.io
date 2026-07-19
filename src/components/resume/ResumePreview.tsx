import { HiArrowTopRightOnSquare, HiDocumentText } from "react-icons/hi2";

interface ResumePreviewProps {
    readonly pdfUrl: string;
    readonly previewUrl: string;
}

export default function ResumePreview({ pdfUrl, previewUrl }: ResumePreviewProps) {
    return (
        <article aria-labelledby="resume-preview-title" className="overflow-hidden rounded-[28px] border border-scandi-border/90 bg-white/90 shadow-[0_28px_80px_rgba(60,64,67,0.12)] backdrop-blur-xl">
            <header className="flex items-center justify-between gap-4 border-b border-scandi-border/80 bg-white/92 px-4 py-3.5 sm:px-6 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#d9e6fb] bg-[#f4f8ff] text-[#1a73e8]">
                        <HiDocumentText aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                        <h2 id="resume-preview-title" className="truncate text-sm font-semibold text-scandi-charcoal sm:text-base">
                            Peiyuan Li — Résumé
                        </h2>
                        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-scandi-text-muted">
                            PDF · 1 page
                        </p>
                    </div>
                </div>
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open résumé PDF in a new tab"
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-scandi-text-secondary transition-colors hover:bg-scandi-surface hover:text-scandi-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/40"
                >
                    <span className="hidden sm:inline">Full screen</span>
                    <HiArrowTopRightOnSquare aria-hidden="true" className="h-[18px] w-[18px]" />
                </a>
            </header>

            <div className="relative overflow-hidden bg-[#eef3fa] px-3 py-5 [background-image:radial-gradient(circle_at_center,rgba(66,133,244,0.12)_1px,transparent_1px)] [background-size:18px_18px] sm:px-8 sm:py-10 lg:px-14 lg:py-14">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-4 h-24 rounded-full bg-white/80 blur-3xl" />
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the full résumé PDF"
                    className="group relative mx-auto block max-w-[860px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef3fa]"
                >
                    <img
                        src={previewUrl}
                        alt="Preview of Peiyuan Li's one-page résumé"
                        className="h-auto w-full border border-black/[0.08] bg-white shadow-[0_30px_70px_rgba(47,59,78,0.2)] transition-transform duration-300 ease-out group-hover:-translate-y-1"
                        loading="eager"
                        decoding="async"
                    />
                    <span className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/80 bg-white/88 px-3 py-1.5 text-xs font-semibold text-scandi-charcoal shadow-[0_8px_24px_rgba(60,64,67,0.16)] backdrop-blur-md sm:hidden">
                        Open full PDF
                        <HiArrowTopRightOnSquare aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                </a>
            </div>
        </article>
    );
}

import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface ResumePreviewProps {
    readonly pdfUrl: string;
    readonly previewUrl: string;
}

export default function ResumePreview({ pdfUrl, previewUrl }: ResumePreviewProps) {
    return (
        <article
            aria-label="Résumé preview"
            className="overflow-hidden rounded-[20px] border border-[#dbe5f2] bg-[#f3f6fa] p-2 shadow-[0_20px_60px_rgba(60,64,67,0.1)] sm:p-3 lg:p-4"
        >
            <div className="relative overflow-hidden">
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open the full résumé PDF"
                    className="group relative block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f6fa]"
                >
                    <img
                        src={previewUrl}
                        alt="Preview of Peiyuan Li's one-page résumé"
                        className="h-auto w-full border border-black/[0.08] bg-white shadow-[0_16px_44px_rgba(47,59,78,0.14)] transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
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

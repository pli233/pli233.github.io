import { HiArrowDownTray, HiArrowTopRightOnSquare } from "react-icons/hi2";

interface ResumeActionsProps {
    readonly pdfUrl: string;
}

export default function ResumeActions({ pdfUrl }: ResumeActionsProps) {
    return (
        <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">
            <a
                href={pdfUrl}
                download="Peiyuan-Li-Resume.pdf"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-scandi-charcoal px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(32,33,36,0.16)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#303134] hover:shadow-[0_14px_30px_rgba(32,33,36,0.2)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/45 focus-visible:ring-offset-2"
            >
                <HiArrowDownTray aria-hidden="true" className="h-4 w-4" />
                Download
            </a>
            <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-scandi-border bg-white/80 px-4 text-sm font-semibold text-scandi-charcoal shadow-[0_6px_18px_rgba(60,64,67,0.06)] backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#c6d7f2] hover:bg-white active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scandi-sage/45 focus-visible:ring-offset-2"
            >
                Open PDF
                <HiArrowTopRightOnSquare aria-hidden="true" className="h-4 w-4" />
            </a>
        </div>
    );
}

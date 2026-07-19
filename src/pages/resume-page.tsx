import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card } from "@/components/ui/card"
import { socialLinks } from "@/data/portfolio"
import { cn } from "@/lib/utils"

export function ResumePage() {
  const previewSource = `${socialLinks.resume}#toolbar=1&navpanes=0&view=FitH`

  return (
    <main className="section-shell min-h-svh pb-16 pt-28 sm:pt-32">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2")}>
            <ArrowLeft data-icon="inline-start" />
            Portfolio
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Resume
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">
            Peiyuan Li
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Open PDF
            <ExternalLink data-icon="inline-end" />
          </a>
          <a href={socialLinks.resume} download className={buttonVariants()}>
            Download
            <Download data-icon="inline-end" />
          </a>
        </div>
      </div>

      <Card className="surface-card mt-8 h-[calc(100svh-14rem)] min-h-[32rem] gap-0 overflow-hidden py-0">
        <iframe
          title="Peiyuan Li resume"
          src={previewSource}
          className="h-full w-full border-0 bg-muted"
        />
      </Card>
      <p className="mt-4 text-sm text-muted-foreground">
        If the preview is unavailable, use “Open PDF” above.
      </p>
    </main>
  )
}

import { ArrowUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { socialLinks } from "@/data/portfolio"

export function SiteFooter() {
  return (
    <footer className="section-shell pb-8 pt-4 sm:pb-10">
      <Separator />
      <div className="flex flex-col gap-5 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2022–{new Date().getFullYear()} Peiyuan Li. All rights reserved.</p>
        <nav aria-label="Social links" className="flex flex-wrap items-center gap-5">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn <ArrowUpRight />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub <ArrowUpRight />
          </a>
          <a href={socialLinks.email} className="footer-link">
            Email <ArrowUpRight />
          </a>
        </nav>
      </div>
    </footer>
  )
}

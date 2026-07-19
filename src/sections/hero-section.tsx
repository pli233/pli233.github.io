import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { personalDetails, socialLinks } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const highlights = [
  { label: "Product", value: "AI-native" },
  { label: "Systems", value: "Reliable" },
  { label: "Approach", value: "Human-centered" },
] as const

export function HeroSection() {
  return (
    <section
      id="overview"
      aria-labelledby="hero-title"
      className="section-shell flex min-h-[min(52rem,100svh)] scroll-mt-24 items-center pb-20 pt-32 sm:pt-36 lg:pb-24"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.72fr)] lg:gap-16">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="gap-2 px-3 py-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Google · Mountain View
          </Badge>

          <p className="mt-7 text-sm font-semibold tracking-[-0.01em] text-primary sm:text-base">
            {personalDetails.tagline}
          </p>
          <h1
            id="hero-title"
            className="mt-3 max-w-4xl text-balance text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-foreground"
          >
            Building useful intelligence into everyday software.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {personalDetails.about}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={buttonVariants({ size: "lg" })}>
              View selected work
              <ArrowDown data-icon="inline-end" />
            </a>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Resume
              <ArrowUpRight data-icon="inline-end" />
            </a>

            <div className="ml-1 flex items-center gap-1" aria-label="Social profiles">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="social-button"
                    />
                  }
                >
                  <BriefcaseBusiness />
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="social-button"
                    />
                  }
                >
                  <CodeXml />
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={socialLinks.email}
                      aria-label="Email"
                      className="social-button"
                    />
                  }
                >
                  <Mail />
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-border pt-5">
            {highlights.map((highlight) => (
              <div key={highlight.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {highlight.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold tracking-[-0.01em] text-foreground sm:text-base">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Card className="profile-card mx-auto w-full max-w-[26rem] gap-0 py-0 lg:mx-0 lg:justify-self-end">
          <div className="relative aspect-[4/4.65] overflow-hidden bg-muted">
            <img
              src={personalDetails.image}
              alt="Peiyuan Li"
              width="760"
              height="884"
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
          <CardContent className="grid gap-1 px-5 py-5 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold tracking-[-0.025em] text-foreground">
                  {personalDetails.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{personalDetails.role}</p>
              </div>
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_5px_hsl(var(--background))]" aria-label="Currently employed" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{personalDetails.location}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

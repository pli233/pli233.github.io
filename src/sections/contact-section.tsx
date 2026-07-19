import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import { socialLinks } from "@/data/portfolio"

const emailAddress = socialLinks.email.replace("mailto:", "")

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current)
      }
    },
    [],
  )

  async function copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current)
      }
      resetTimer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = socialLinks.email
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-block scroll-mt-24">
      <div className="section-shell">
        <Reveal>
          <Card className="contact-card gap-0 py-0">
            <CardContent className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:p-12">
              <div className="max-w-2xl">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Contact
                </p>
                <h2
                  id="contact-title"
                  className="mt-3 text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl sm:leading-[1.03]"
                >
                  Have a hard problem worth solving?
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                  I am always glad to compare notes on AI products, dependable systems, and thoughtful software.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">
                <a href={socialLinks.email} className={buttonVariants({ size: "lg" })}>
                  Start a conversation
                  <ArrowUpRight data-icon="inline-end" />
                </a>
                <Button variant="ghost" size="sm" onClick={copyEmail}>
                  {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
                  <span aria-live="polite">{copied ? "Address copied" : emailAddress}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

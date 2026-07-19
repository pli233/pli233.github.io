import { useState, type MouseEvent } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FileText, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationItems } from "@/data/portfolio"
import { useActiveSection } from "@/hooks/use-active-section"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import type { NavigationItem } from "@/types/portfolio"

const sectionIds = navigationItems.map((item) => item.id)

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const isHome = location.pathname === "/"
  const activeSection = useActiveSection({ enabled: isHome, sectionIds })

  function navigateToSection(
    event: MouseEvent<HTMLAnchorElement>,
    item: NavigationItem,
  ): void {
    event.preventDefault()
    setMobileMenuOpen(false)

    if (!isHome) {
      navigate(item.href)
      return
    }

    const section = document.getElementById(item.id)
    if (!section) {
      return
    }

    window.history.pushState(null, "", item.href)
    section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="material-nav pointer-events-auto mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 sm:h-16 sm:px-4">
        <Link
          to="/"
          aria-label="Peiyuan Li, home"
          className="flex items-center gap-2.5 rounded-xl pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-sm font-semibold tracking-[-0.03em] text-background shadow-sm">
            PL
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] text-foreground sm:inline">
            Peiyuan Li
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(event) => navigateToSection(event, item)}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeSection === item.id && "bg-muted text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            to="/resume"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}
          >
            <FileText data-icon="inline-start" />
            Resume
          </Link>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Open navigation"
                  className="lg:hidden"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="material-sheet w-[min(86vw,22rem)] border-l-0 px-3 pb-5 pt-2"
            >
              <SheetHeader className="px-3 pb-4 pt-5 text-left">
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>Jump to a section or open the resume.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(event) => navigateToSection(event, item)}
                    aria-current={activeSection === item.id ? "location" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      activeSection === item.id && "bg-muted text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="my-2 h-px bg-border" />
                <Link
                  to="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </Link>
              </nav>
              <p className="px-4 text-xs leading-5 text-muted-foreground">
                AI-native products · reliable systems · thoughtful interfaces
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

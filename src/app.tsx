import { lazy, Suspense, useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TooltipProvider } from "@/components/ui/tooltip"

const HomePage = lazy(async () => {
  const module = await import("@/pages/home-page")
  return { default: module.HomePage }
})

const ResumePage = lazy(async () => {
  const module = await import("@/pages/resume-page")
  return { default: module.ResumePage }
})

export function App() {
  const location = useLocation()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const sectionId = location.hash.slice(1)
    let frameId = 0

    if (location.pathname !== "/" || !sectionId) {
      frameId = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
      })
      return () => window.cancelAnimationFrame(frameId)
    }

    let attempts = 0
    const scrollWhenReady = (): void => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "auto" })
        return
      }

      attempts += 1
      if (attempts < 30) {
        frameId = window.requestAnimationFrame(scrollWhenReady)
      }
    }

    frameId = window.requestAnimationFrame(scrollWhenReady)
    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname])

  return (
    <TooltipProvider delay={250}>
      <div className="min-h-svh overflow-x-clip bg-background text-foreground">
        <SiteHeader />
        <Suspense
          fallback={
            <main className="grid min-h-svh place-items-center" aria-live="polite">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-primary" aria-label="Loading" />
            </main>
          }
        >
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <SiteFooter />
      </div>
    </TooltipProvider>
  )
}

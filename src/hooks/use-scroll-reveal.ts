import { useEffect, useRef, useState, type RefObject } from "react"

export function useScrollReveal(): {
  readonly isVisible: boolean
  readonly ref: RefObject<HTMLDivElement | null>
} {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return undefined
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { isVisible, ref }
}

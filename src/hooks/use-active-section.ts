import { useEffect, useState } from "react"

interface UseActiveSectionOptions {
  readonly enabled: boolean
  readonly sectionIds: readonly string[]
}

export function useActiveSection({
  enabled,
  sectionIds,
}: UseActiveSectionOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(
    enabled ? sectionIds[0] ?? null : null,
  )
  const sectionKey = sectionIds.join("|")

  useEffect(() => {
    if (!enabled) {
      setActiveSection(null)
      return undefined
    }

    const sections = sectionKey
      .split("|")
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        const nextSection = visibleSections[0]?.target.id
        if (nextSection) {
          setActiveSection(nextSection)
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.15, 0.35, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [enabled, sectionKey])

  return activeSection
}

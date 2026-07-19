import type { CSSProperties, PropsWithChildren } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

interface RevealProps extends PropsWithChildren {
  readonly className?: string
  readonly delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { isVisible, ref } = useScrollReveal()
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "reveal-visible", className)}
      style={style}
    >
      {children}
    </div>
  )
}

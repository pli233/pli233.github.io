import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  readonly align?: "left" | "center"
  readonly description: string
  readonly eyebrow: string
  readonly title: string
  readonly titleId?: string
}

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
  titleId,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 id={titleId} className="mt-3 text-balance text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06]">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </header>
  )
}

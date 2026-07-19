import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TechnologyCard } from "@/components/technology-card"
import { technologyGroups } from "@/data/portfolio"

export function TechnologySection() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="section-block section-tint scroll-mt-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            titleId="toolkit-title"
            eyebrow="Toolkit"
            title="Breadth where it helps. Depth where it matters."
            description="A practical stack for shipping AI products, dependable services, and clear interfaces."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.id} delay={(index % 3) * 55} className="h-full">
              <TechnologyCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

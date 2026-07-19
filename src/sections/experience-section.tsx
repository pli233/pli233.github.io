import { ExperienceCard } from "@/components/experience-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/data/portfolio"

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-block scroll-mt-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            titleId="experience-title"
            eyebrow="Experience"
            title="Product judgment, backed by systems depth."
            description="Across ads, legal AI, infrastructure, and healthcare, I focus on software that works under real constraints."
          />
        </Reveal>
        <div className="mt-10 grid gap-4">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 60}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { EducationCard } from "@/components/education-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/data/portfolio"

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-block scroll-mt-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            titleId="education-title"
            eyebrow="Education"
            title="A computer science foundation across research and practice."
            description="Graduate study at Brown, built on computer science and data science training at UW–Madison."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 70} className="h-full">
              <EducationCard education={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

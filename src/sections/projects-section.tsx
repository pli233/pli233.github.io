import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/portfolio"

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-block section-tint scroll-mt-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            titleId="projects-title"
            eyebrow="Selected work"
            title="Systems that make complex work feel simpler."
            description="A focused set of product and platform contributions across advertising, contracts, infrastructure, and healthcare."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ContactSection } from "@/sections/contact-section"
import { EducationSection } from "@/sections/education-section"
import { ExperienceSection } from "@/sections/experience-section"
import { HeroSection } from "@/sections/hero-section"
import { ProjectsSection } from "@/sections/projects-section"
import { TechnologySection } from "@/sections/technology-section"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <TechnologySection />
      <ContactSection />
    </main>
  )
}

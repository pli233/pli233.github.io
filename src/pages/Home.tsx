import HeroSection from "../sections/HeroSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <TechnologiesSection />
            <ContactSection />
        </main>
    );
}

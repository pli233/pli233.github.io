import { projects } from "../Details";
import RevealOnScroll from "../components/RevealOnScroll";
import ProjectCardSwap from "../components/ProjectCardSwap";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Projects</h2>
                        <p>Product contributions and applied systems work</p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={120}>
                    <ProjectCardSwap projects={projects} />
                </RevealOnScroll>
            </div>
        </section>
    );
}

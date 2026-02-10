import { Github, ExternalLink, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator built with C++ to practice core programming concepts and logic building.",
    tech: ["C++", "Logic Building"],
  },
  {
    title: "Student Grade Manager",
    description: "A Python-based program to manage and calculate student grades with file handling.",
    tech: ["Python", "File I/O"],
  },
  {
    title: "Personal Portfolio",
    description: "This portfolio website — my first web development project to showcase skills and learning.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-md mx-auto">
            Sample projects showcasing my learning journey
          </p>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Rocket size={14} className="text-primary" />
            <span className="text-xs text-primary font-medium">More projects coming soon!</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" disabled>
                    <Github size={14} /> Code
                  </button>
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" disabled>
                    <ExternalLink size={14} /> Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

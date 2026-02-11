import { Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>

          <div className="text-center p-12 rounded-2xl bg-card border border-border hover:border-primary/20 hover:glow-shadow transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
              <Rocket size={28} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Coming Soon!</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              I'm currently working on exciting projects. Stay tuned — they'll be showcased here soon! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

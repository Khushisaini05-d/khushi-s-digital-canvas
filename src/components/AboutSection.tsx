import { BookOpen, Code2, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BookOpen, label: "CS Student", desc: "BSc Computer Science" },
  { icon: Code2, label: "Coder", desc: "C, C++, Python" },
  
  { icon: Lightbulb, label: "Learner", desc: "Always Growing" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Get to know me a little better
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-foreground leading-relaxed">
                I'm <strong>Khushi Saini</strong>, a BSc Computer Science student based in India. I'm currently
                at the beginning of my tech journey, and I'm absolutely fascinated by how technology
                shapes our world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My interests span across programming languages like C, C++, and Python. I love solving
                problems and figuring out how things work under the hood. I'm currently expanding my
                skill set into web development and am excited to build real-world projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <item.icon size={24} className="text-primary mb-3" />
                  <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "C / C++", level: 40, label: "Basic" },
  { name: "Python", level: 35, label: "Basic" },
  { name: "Problem Solving", level: 55, label: "Growing" },
  { name: "Web Development", level: 20, label: "Learning" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Currently learning and improving every day
          </p>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display font-medium text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
                    {skill.label}
                  </span>
                </div>
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      background: "var(--hero-gradient)",
                      transitionDelay: `${i * 100 + 400}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

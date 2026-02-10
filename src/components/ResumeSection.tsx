import { Download, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Download or preview my resume
          </p>

          <div className="text-center p-10 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
              <Download size={28} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Khushi Saini — Resume</h3>
            <p className="text-sm text-muted-foreground mb-8">
              BSc Computer Science Student • Available for internships and projects
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-shadow">
                <Download size={16} /> Download Resume
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-accent transition-colors">
                <Eye size={16} /> Preview Resume
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Resume will be uploaded soon — check back later!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

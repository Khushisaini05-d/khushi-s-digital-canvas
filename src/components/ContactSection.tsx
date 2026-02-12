import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Feel free to reach out — I'd love to connect!
          </p>

          <div className="max-w-lg mx-auto space-y-4">
            <a
              href="mailto:khushisaini1757@gmail.com"
              className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">khushisaini1757@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/khushi-saini-a73392334"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">Khushi Saini</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/khushi_saini16?igsh=Zjg3ZHEyczl0eWl1"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <Instagram size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Instagram</p>
                <p className="text-sm font-medium">@khushi_saini16</p>
              </div>
            </a>

            <a
              href="https://github.com/Khushisaini05-d"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-shadow hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "650ms" }}
            >
              <div className="p-2 rounded-lg bg-accent group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <Github size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">Khushisaini05-d</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
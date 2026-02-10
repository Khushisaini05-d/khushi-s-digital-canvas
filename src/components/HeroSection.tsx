import { ArrowDown, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="animate-fade-up flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide uppercase">Welcome to my portfolio</span>
            </div>

            <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-gradient">Khushi Saini</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg text-muted-foreground mb-3 font-medium">
              Computer Science Student | Aspiring Tech Professional
            </p>

            <p className="animate-fade-up-delay-2 text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A passionate BSc Computer Science student from India, exploring the world of technology
              and building skills in programming, problem solving, and creative thinking.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-shadow"
              >
                View Skills
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-accent transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="animate-fade-up relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20 glow-shadow">
                <img
                  src={profileImg}
                  alt="Khushi Saini"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card border border-border rounded-xl px-3 py-2 shadow-lg">
                <span className="text-xs font-medium text-muted-foreground">📍 India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { ArrowDown, Sparkles, Code2, Terminal, Braces } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] animate-[spin_20s_linear_infinite]" />
        {/* Floating icons */}
        <Code2 size={20} className="absolute top-[15%] left-[15%] text-primary/10 animate-[float_6s_ease-in-out_infinite]" />
        <Terminal size={18} className="absolute top-[25%] right-[20%] text-primary/10 animate-[float_5s_ease-in-out_infinite_1s]" />
        <Braces size={22} className="absolute bottom-[30%] left-[25%] text-primary/10 animate-[float_7s_ease-in-out_infinite_2s]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-up flex items-center justify-center gap-2 mb-4">
          <Sparkles size={16} className="text-primary animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-sm font-medium text-primary tracking-wide uppercase">Welcome to my portfolio</span>
        </div>

        <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
          Hi, I'm{" "}
          <span className="text-gradient">Khushi Saini</span>
        </h1>

        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground mb-3 font-medium">
          Computer Science Student | Aspiring Tech Professional
        </p>

        <p className="animate-fade-up-delay-2 text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          A passionate BSc Computer Science student, exploring the world of technology
          and building skills in programming, problem solving, and creative thinking.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-4">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 glow-shadow"
          >
            View Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Khushisaini05-d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

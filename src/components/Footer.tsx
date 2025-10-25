import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative py-12 overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-indigo to-background" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-accent glow-effect" aria-hidden="true" />
            <h2 className="text-2xl font-bold gradient-text">CORTEXA</h2>
          </div>

          <p className="text-foreground/70 mb-8 flex items-center justify-center gap-2">
            Empathetic AI for Every Mind
            <Heart className="w-4 h-4 text-coral inline animate-glow-pulse" aria-hidden="true" />
          </p>

          <nav className="flex flex-wrap justify-center gap-6 mb-8" aria-label="Footer navigation">
            <a
              href="#vision"
              className="text-foreground/80 hover:text-foreground transition-smooth"
              aria-label="About CORTEXA"
            >
              About
            </a>
            <a
              href="mailto:contact@cortexa.ai"
              className="text-foreground/80 hover:text-foreground transition-smooth"
              aria-label="Contact us via email"
            >
              Contact
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-smooth"
              aria-label="Visit our GitHub repository"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-foreground transition-smooth"
              aria-label="View accessibility statement"
            >
              Accessibility
            </a>
          </nav>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-effect transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@cortexa.ai"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-effect transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-border/20 pt-8">
            <p className="text-sm text-foreground/60">
              © 2025 CORTEXA — The Help You Need, Before You Ask.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

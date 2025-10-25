import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-accent glow-effect" aria-hidden="true" />
          <h1 className="text-2xl font-bold gradient-text">CORTEXA</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("vision")}
            className="text-foreground/80 hover:text-foreground transition-smooth"
            aria-label="Navigate to Vision section"
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-foreground/80 hover:text-foreground transition-smooth"
            aria-label="Navigate to How It Works section"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("problems")}
            className="text-foreground/80 hover:text-foreground transition-smooth"
            aria-label="Navigate to Problems section"
          >
            Problems
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-foreground/80 hover:text-foreground transition-smooth"
            aria-label="Navigate to Contact section"
          >
            Contact
          </button>
        </div>

        <Button variant="hero" size="lg" onClick={() => setDemoOpen(true)} aria-label="Try CORTEXA Demo">
          Try Demo
        </Button>
      </nav>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="glass-card border-violet/20">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">CORTEXA Demo</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Experience proactive AI assistance designed for neurodivergent minds.
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 space-y-4">
            <p className="text-foreground/80">
              Our demo is currently in development. CORTEXA will monitor your workflow and offer assistance before you even need to ask.
            </p>
            <div className="glass-card rounded-lg p-4 border border-violet/20">
              <h4 className="font-semibold mb-2 text-violet">Coming Soon:</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Real-time cognitive load detection</li>
                <li>• Contextual assistance suggestions</li>
                <li>• Personalized support patterns</li>
                <li>• Privacy-first monitoring</li>
              </ul>
            </div>
            <Button 
              variant="hero" 
              className="w-full mt-4"
              onClick={() => {
                setDemoOpen(false);
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Notify Me When Ready
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;

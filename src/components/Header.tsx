import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

        <Button variant="hero" size="lg" aria-label="Try CORTEXA Demo">
          Try Demo
        </Button>
      </nav>
    </header>
  );
};

export default Header;

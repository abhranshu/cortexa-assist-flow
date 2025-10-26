import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChatInterface } from "@/components/ChatInterface";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary" aria-hidden="true">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <Brain className="w-16 h-16 text-violet animate-glow-pulse" aria-hidden="true" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Help You Need,{" "}
              <span className="gradient-text">Before You Ask</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              An assistive GenAI companion empowering neurodivergent minds to
              focus, create, and thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="min-w-[200px]" 
                onClick={() => setDemoOpen(true)}
                aria-label="Try CORTEXA Demo"
              >
                Try Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => scrollToSection("vision")}
                aria-label="Learn more about CORTEXA"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="glass-card border-violet/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">Chat with CORTEXA</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Your proactive AI companion for focus, creativity, and productivity.
            </DialogDescription>
          </DialogHeader>
          <ChatInterface />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;

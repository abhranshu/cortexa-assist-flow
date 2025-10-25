import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Vision = () => {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Vision:{" "}
              <span className="gradient-text">From Passive to Proactive</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              We believe AI should be a companion, not a tool. CORTEXA doesn't
              wait for you to ask—it anticipates your needs, understands your
              context, and offers help exactly when you need it most.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              By monitoring your workflow, detecting moments of struggle, and
              proactively offering assistance, CORTEXA transforms the AI
              experience from reactive to truly supportive.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => setReadMoreOpen(true)}
              aria-label="Learn more about our vision"
            >
              Read More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-glow-pulse" aria-hidden="true" />
              <Sparkles className="w-32 h-32 text-violet mx-auto animate-float" aria-hidden="true" />
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Proactive AI</h3>
                <p className="text-foreground/70">
                  Intelligence that understands before you speak
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={readMoreOpen} onOpenChange={setReadMoreOpen}>
        <DialogContent className="glass-card border-violet/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">Our Vision in Depth</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Reimagining AI as a proactive companion
            </DialogDescription>
          </DialogHeader>
          <div className="py-6 space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              Traditional AI tools operate on a simple request-response model. You ask, they answer. But what happens when you don't know what to ask? When cognitive overload makes it hard to articulate your needs?
            </p>
            <p className="leading-relaxed">
              CORTEXA flips this paradigm. By continuously monitoring your digital environment—not invasively, but intelligently—we can detect the subtle signs that you might need help:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Extended periods of inactivity on a task</li>
              <li>Rapid context switching between applications</li>
              <li>Repeated edits or deletions suggesting uncertainty</li>
              <li>Time-based patterns indicating fatigue</li>
            </ul>
            <p className="leading-relaxed">
              When these signals appear, CORTEXA doesn't wait. It gently offers assistance—a suggestion, a reminder, a helpful resource—exactly when you need it most. This proactive approach transforms AI from a passive tool into an active partner in your success.
            </p>
            <div className="glass-card rounded-lg p-4 border border-aqua/20 mt-6">
              <h4 className="font-semibold mb-2 text-aqua">Our Core Principles:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Privacy-first: Your data stays yours</li>
                <li>✓ Non-intrusive: Help when needed, invisible when not</li>
                <li>✓ Personalized: Learns your unique patterns</li>
                <li>✓ Empowering: Builds independence, not dependence</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Vision;

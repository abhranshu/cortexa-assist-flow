import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Vision = () => {
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
            <Button variant="hero" size="lg" aria-label="Learn more about our vision">
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
    </section>
  );
};

export default Vision;

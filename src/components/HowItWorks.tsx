import { motion } from "framer-motion";
import { Eye, Brain, HandHelping, Shield } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "Monitor",
    description: "Detects inactivity, context switches, or signs of cognitive overload in real-time.",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Uses AI to understand your context, current task, and potential blockers.",
  },
  {
    icon: HandHelping,
    title: "Assist",
    description: "Offers proactive, contextual help—suggestions, reminders, or gentle nudges.",
  },
  {
    icon: Shield,
    title: "Support",
    description: "Keeps your workflow smooth, reducing friction and anxiety at every step.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo/20 to-background" aria-hidden="true" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Four seamless steps to proactive assistance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full group hover:glow-effect transition-smooth">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                    <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-sm font-semibold text-violet mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-accent" aria-hidden="true" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

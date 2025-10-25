import { motion } from "framer-motion";
import { Brain, MessageCircle, Clock } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Cognitive Tax",
    description:
      "Digital overload creates anxiety and exhaustion for neurodivergent users, making every interaction a challenge.",
    color: "violet",
  },
  {
    icon: MessageCircle,
    title: "Burden of Asking",
    description:
      "Current AI tools require perfectly phrased questions when users are already struggling and don't know what to ask.",
    color: "coral",
  },
  {
    icon: Clock,
    title: "Moment of Friction",
    description:
      "Traditional tools fail to notice when users lose focus, get stuck, or need support—leaving them frustrated and alone.",
    color: "aqua",
  },
];

const Problems = () => {
  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Problems <span className="gradient-text">We Solve</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Understanding the barriers neurodivergent users face with traditional AI tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-8 group transition-smooth hover:glow-effect"
            >
              <div className={`inline-flex p-4 rounded-xl bg-${problem.color}/10 mb-6 group-hover:scale-110 transition-smooth`}>
                <problem.icon className={`w-8 h-8 text-${problem.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;

import { motion } from "framer-motion";
import { Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Requirement Analysis", desc: "Deep-dive into your needs, goals, and constraints to define the perfect scope." },
  { icon: PenTool, title: "Planning & Design", desc: "Wireframes, architecture, and UI/UX design that align with your brand and users." },
  { icon: Code2, title: "Development", desc: "Agile sprints with clean code, regular updates, and continuous integration." },
  { icon: TestTube, title: "Testing & QA", desc: "Rigorous testing across devices and scenarios to ensure a flawless product." },
  { icon: Rocket, title: "Deployment & Support", desc: "Seamless launch with monitoring, maintenance, and ongoing improvements." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MethodologySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">How We Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Our process.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-light">
            A proven methodology that delivers results on time, every time.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 flex items-start gap-5 hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-medium text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-display font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

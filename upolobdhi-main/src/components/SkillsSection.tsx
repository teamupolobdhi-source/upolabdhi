import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Python", "Express.js", "Django"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Kotlin", "React Native", "Dart"],
  },
  {
    title: "AI / Data",
    skills: ["Machine Learning", "Pandas", "AI Chatbots", "TensorFlow", "PyTorch"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const SkillsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Tech Stack</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Tools we love.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 font-light">
            Carefully chosen for performance, reliability, and long-term maintainability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-xs tracking-[0.2em] font-semibold text-primary uppercase mb-5">{cat.title}</h3>
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="glass-card px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

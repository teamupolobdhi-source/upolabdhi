import { motion } from "framer-motion";
import { Target, Eye, Trophy, Zap, Users, Rocket } from "lucide-react";

const highlights = [
  { icon: Target, title: "Mission", text: "Deliver high-quality, scalable software that drives real business impact using cutting-edge technologies." },
  { icon: Eye, title: "Vision", text: "Become the go-to development team for startups and enterprises seeking innovation and digital transformation." },
  { icon: Trophy, title: "50+ Projects", text: "Successfully delivered projects across healthcare, fintech, e-commerce, SaaS, and AI/ML domains." },
  { icon: Zap, title: "Why Us", text: "Agile, transparent, and passionate — we treat every project as our own and deliver on time." },
  { icon: Users, title: "Our Journey", text: "Started as four developers with a shared dream — now we specialize in full-stack, mobile, ML, and cloud." },
  { icon: Rocket, title: "Tech Stack", text: "React, Node.js, Express, Kotlin, Python, Pandas, TensorFlow, MongoDB, PostgreSQL, AWS, Docker & more." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Who We Are</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            About Upolobdhi.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">
            We started as four developers with a shared dream — to build technology that matters.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              {...fadeUp}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                <h.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

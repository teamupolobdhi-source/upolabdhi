import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10 blur-[140px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Let's build something<br />
            <span className="gradient-text">remarkable.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light text-lg">
            Whether you need a custom ML model, an AI chatbot, or a full-stack
            platform — we turn complex requirements into elegant, scalable systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="gradient-bg text-primary-foreground font-medium px-8 rounded-full h-12 shadow-lg shadow-primary/20" asChild>
                <Link to="/contact">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" className="font-medium px-8 rounded-full h-12" asChild>
                <Link to="/projects">View Our Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>

          <p className="text-xs text-muted-foreground">
            Typically respond within 24 hours · hello@upolobdhi.dev
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

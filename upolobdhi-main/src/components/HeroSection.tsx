import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const words = ["Intelligent Systems", "E-Commerce Websites", "Scalable Platforms", "Smart Solutions"];

const RotatingWords = ({ animate }: { animate: boolean }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => setIndex((p) => (p + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, [animate]);

  if (!animate) {
    return <span className="gradient-text">{words[0]}</span>;
  }

  return (
    <span className="inline-block relative h-[1.15em] overflow-hidden align-bottom">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 gradient-text"
          initial={false}
          animate={
            i === index
              ? { y: "0%", opacity: 1 }
              : i === (index - 1 + words.length) % words.length
              ? { y: "-120%", opacity: 0 }
              : { y: "120%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word}
        </motion.span>
      ))}
      <span className="invisible">{words.reduce((a, b) => (a.length >= b.length ? a : b))}</span>
    </span>
  );
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const HeroSection = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimateDecor = !isMobile && !prefersReducedMotion;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-15 blur-[120px]"
          style={{ background: "hsl(var(--gradient-start))", top: "-10%", left: "-10%" }}
          animate={shouldAnimateDecor ? { x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] } : undefined}
          transition={shouldAnimateDecor ? { duration: 18, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10 blur-[120px]"
          style={{ background: "hsl(var(--gradient-mid))", top: "20%", right: "-5%" }}
          animate={shouldAnimateDecor ? { x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.2, 1] } : undefined}
          transition={shouldAnimateDecor ? { duration: 22, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-[0.08] blur-[100px]"
          style={{ background: "hsl(var(--gradient-end))", bottom: "5%", left: "30%" }}
          animate={shouldAnimateDecor ? { x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] } : undefined}
          transition={shouldAnimateDecor ? { duration: 15, repeat: Infinity, ease: "easeInOut" } : undefined}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade on grid */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_70%)]" />

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-accent/80 backdrop-blur-sm border border-border/50 px-4 py-1.5 text-xs font-medium text-accent-foreground tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full gradient-bg"
                animate={shouldAnimateDecor ? { scale: [1, 1.4, 1], opacity: [1, 0.6, 1] } : undefined}
                transition={shouldAnimateDecor ? { duration: 2, repeat: Infinity } : undefined}
              />
              Available for new projects
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.12] sm:leading-[1.05]"
          >
            <span className="block">We Build</span>
            <span className="block mt-1">
              <RotatingWords animate={!prefersReducedMotion} />
            </span>
            <span className="block mt-1">That Scale.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 mb-12 leading-relaxed font-light"
          >
            Upolobdhi is a 4-person elite technology team delivering production-grade ML
            models, AI automation, and full-stack platforms — from prototype to 10M users.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="gradient-bg text-primary-foreground font-medium px-8 rounded-full text-sm h-12 shadow-lg shadow-primary/20" asChild>
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" className="font-medium px-8 rounded-full text-sm h-12 backdrop-blur-sm" asChild>
                <Link to="/team">Meet the Team</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {shouldAnimateDecor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-widest text-muted-foreground/60 uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-border flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;

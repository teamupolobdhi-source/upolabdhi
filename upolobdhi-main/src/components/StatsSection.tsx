import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 4, suffix: "", label: "Expert Engineers" },
];

const Counter = ({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, (duration * 1000) / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="font-display text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        background: "radial-gradient(ellipse at 20% 50%, hsl(var(--gradient-start)), transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--gradient-end)), transparent 60%)"
      }} />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground font-medium mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

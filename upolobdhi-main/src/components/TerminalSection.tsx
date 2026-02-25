import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  { text: "$ upolobdhi --init-model sentiment_analyzer", type: "command" },
  { text: "[INFO] Loading transformer architecture...", type: "info" },
  { text: "[INFO] Parameters: 340M · Precision: FP16", type: "info" },
  { text: "[OK] Model loaded in 1.24s · GPU: RTX 4090", type: "success" },
  { text: "$ deploy --env production --scale auto", type: "command" },
  { text: "[OK] Deployed to 3 regions · CDN active", type: "success" },
];

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onAnimationComplete={() => setStarted(true)}
          className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </div>
            <span className="text-[10px] tracking-widest text-muted-foreground font-medium ml-auto uppercase">Terminal</span>
          </div>

          <div className="p-6 font-mono text-sm space-y-1.5 min-h-[220px]">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={
                  line.type === "command"
                    ? "text-foreground font-medium"
                    : line.type === "success"
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-foreground/60 animate-pulse" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;

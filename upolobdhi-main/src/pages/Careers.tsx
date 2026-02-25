import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Code2, Brain, Smartphone, CheckCircle2, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
});

const positions = [
  {
    title: "Full Stack Developer",
    icon: Code2,
    type: "Full-time / Remote",
    description:
      "Build scalable web apps end-to-end using React, Node.js, and modern cloud infrastructure. You'll own features from database to UI.",
    requirements: [
      "3+ years with React, TypeScript & Node.js",
      "Experience with PostgreSQL / MongoDB",
      "Knowledge of REST APIs & GraphQL",
      "CI/CD and cloud deployment experience",
    ],
  },
  {
    title: "ML & Backend Developer",
    icon: Brain,
    type: "Full-time / Remote",
    description:
      "Design and deploy production ML pipelines, build robust backend services, and integrate AI models into real-world applications.",
    requirements: [
      "Strong Python & ML frameworks (PyTorch / TensorFlow)",
      "Experience deploying models to production",
      "Backend development with FastAPI / Django",
      "Knowledge of data engineering & ETL pipelines",
    ],
  },
  {
    title: "App Developer",
    icon: Smartphone,
    type: "Full-time / Remote",
    description:
      "Create beautiful, performant mobile applications for Android and iOS using Kotlin, Swift, or cross-platform frameworks like Flutter.",
    requirements: [
      "2+ years in mobile development",
      "Kotlin / Swift or Flutter / React Native",
      "Experience with REST APIs & local storage",
      "Published apps on Play Store or App Store",
    ],
  },
];

const perks = [
  { icon: MapPin, label: "Fully Remote" },
  { icon: Clock, label: "Flexible Hours" },
  { icon: Users, label: "Small, Elite Team" },
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState(positions[0].title);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: `Thanks ${formData.name}, we'll review your application for ${selectedRole} and get back to you soon.`,
    });
    setFormData({ name: "", email: "", portfolio: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.span
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
            We're Hiring
          </motion.span>
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Join Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            We're looking for passionate developers who love building great products. Work remotely with a small, focused team.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-6 mt-10">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Positions */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp(0)} className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
            Open Positions
          </motion.h2>

          <div className="grid gap-6">
            {positions.map((pos, i) => {
              const Icon = pos.icon;
              const isSelected = selectedRole === pos.title;
              return (
                <motion.div
                  key={pos.title}
                  {...fadeUp(i * 0.1)}
                  onClick={() => setSelectedRole(pos.title)}
                  className={`glass-card p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                    isSelected ? "ring-2 ring-primary/40 shadow-lg" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-semibold">{pos.title}</h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1 w-fit">
                          {pos.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pos.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {pos.requirements.map((req) => (
                          <div key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <motion.h2 {...fadeUp(0)} className="font-display text-2xl sm:text-3xl font-bold text-center mb-4">
            Apply Now
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-center text-muted-foreground mb-10">
            Selected role: <span className="font-medium text-foreground">{selectedRole}</span>
          </motion.p>

          <motion.form {...fadeUp(0.2)} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email *</label>
                <Input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Portfolio / GitHub URL</label>
              <Input
                placeholder="https://github.com/yourname"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Why do you want to join Upolobdhi? *</label>
              <Textarea
                required
                rows={4}
                placeholder="Tell us about yourself and why you'd be a great fit..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-bg text-primary-foreground rounded-full h-12 font-medium">
              Submit Application <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </section>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Careers;

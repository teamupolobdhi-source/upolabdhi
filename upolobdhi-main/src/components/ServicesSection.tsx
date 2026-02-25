import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Server, ShoppingCart, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks like React, Next.js, and Node.js",
    tags: ["Responsive Design", "SEO Optimized", "Performance Focused", "Scalable Architecture"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter",
    tags: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud",
    tags: ["Auto Scaling", "High Availability", "Cost Optimized", "Security First"],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust server-side applications with secure APIs, databases, and microservices architecture",
    tags: ["RESTful APIs", "Database Design", "Microservices", "Security Focused"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Complete online store solutions with payment integration, inventory management, and analytics",
    tags: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered design solutions that create engaging and intuitive digital experiences",
    tags: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 font-light">
            We deliver end-to-end digital solutions — from design to deployment — with precision and care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:shadow-lg hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent group-hover:gradient-bg-subtle flex items-center justify-center mb-6 transition-all duration-500">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

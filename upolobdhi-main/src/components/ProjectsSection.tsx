import { motion } from "framer-motion";
import { ExternalLink, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectSssupplement from "@/assets/project-sssupplement.png";
import projectNbnk from "@/assets/project-nbnk.png";

const projects = [
  {
    title: "SSSupplement.com",
    description: "A complete supplement e-commerce platform with product catalogs, cart management, secure checkout, and order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: projectSssupplement,
    demo: "https://sssupplement.com",
    featured: true,
  },
  {
    title: "NBNK Admin Banking Website",
    description: "A modern admin banking dashboard with account management, transaction monitoring, and real-time analytics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: projectNbnk,
    demo: "https://nbnk-admin-banking-website.vercel.app/",
    featured: true,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Featured projects.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-light">
            A showcase of projects across web, mobile, AI/ML, and enterprise solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeUp}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card overflow-hidden group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-foreground text-background text-[10px] font-medium px-2.5 py-1 rounded-full">
                    <Star className="h-3 w-3 fill-current" /> Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="gradient-bg text-primary-foreground flex-1 rounded-full" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Live Demo</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

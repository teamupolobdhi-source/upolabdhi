import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import teamBidyut from "@/assets/team-bidyut.png";
import teamArpan from "@/assets/team-arpan.jpeg";
import teamSudipta from "@/assets/team-sudipta.jpeg";
import teamSunanda from "@/assets/team-sunanda.jpeg";

const members = [
  {
    name: "Bidyut Maji",
    role: "Manager",
    bio: "MERN stack expert with deep machine learning knowledge. Leads projects from ideation to deployment with precision.",
    skills: ["MERN Stack", "Machine Learning", "Project Management"],
    photo: teamBidyut,
    projects: 20,
  },
  {
    name: "Arpan Patra",
    role: "Head",
    bio: "Versatile full-stack developer skilled in ML, app development, and backend architecture. Drives technical vision.",
    skills: ["Full Stack", "ML", "App Dev", "Backend"],
    photo: teamArpan,
    projects: 22,
  },
  {
    name: "Sudipta Maity",
    role: "Co-Founder",
    bio: "Frontend craftsman with a keen eye for UI/UX design. Expertise in ML and cloud infrastructure.",
    skills: ["Frontend", "UI/UX", "ML", "Cloud"],
    photo: teamSudipta,
    projects: 18,
  },
  {
    name: "Sunanda Maity",
    role: "Leader",
    bio: "Full-stack developer combining design thinking with technical solutions. Specializes in ML-powered experiences.",
    skills: ["Full Stack", "Design", "Solutions", "ML"],
    photo: teamSunanda,
    projects: 16,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const TeamSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-wide mb-3">Our People</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Meet the team.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 font-light">
            Four passionate developers committed to delivering exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              {...fadeUp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card overflow-hidden hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display font-semibold text-lg">{m.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{m.role}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-3">
                  <Code2 className="h-3 w-3" />
                  <span>{m.projects}+ projects</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                  {m.skills.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  {[Linkedin, Github, Mail].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

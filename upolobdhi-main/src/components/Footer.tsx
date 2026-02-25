import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/methodology" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Technologies: [
    { label: "React & Frontend", href: "/skills" },
    { label: "Node.js & Express", href: "/skills" },
    { label: "Kotlin & Mobile", href: "/skills" },
    { label: "Machine Learning", href: "/skills" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:team.upolobdhi@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/fav.png" alt="Upolobdhi" className="h-10 w-10" width={40} height={40} loading="lazy" decoding="async" />
            <span className="font-display text-2xl font-bold text-foreground">Upolobdhi</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-4 max-w-sm leading-relaxed">
            A passionate team of 4 developers building scalable digital solutions with React, Node.js, Kotlin, Machine Learning, and modern cloud technologies.
          </p>

          <div className="mt-6 space-y-2">
            {[
              { icon: Mail, text: "team.upolobdhi@gmail.com" },
              { icon: Phone, text: "+91 70472 83086" },
              { icon: MapPin, text: "Haldia, India" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © 2026 Upolobdhi. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with <Heart className="h-3 w-3 text-primary" /> by Team Upolobdhi
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

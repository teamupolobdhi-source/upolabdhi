import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/fav.png" alt="Upolobdhi" className="h-9 w-9" width={36} height={36} />
          <span className="font-display text-xl font-bold text-foreground">Upolobdhi</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="font-medium px-5 rounded-full" asChild>
            <Link to="/team">Our Team</Link>
          </Button>
          <Button size="sm" className="gradient-bg text-primary-foreground font-medium px-5 rounded-full" asChild>
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    location.pathname === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-2">
                <Button variant="outline" size="sm" className="font-medium flex-1 rounded-full" asChild>
                  <Link to="/team" onClick={() => setMobileOpen(false)}>Our Team</Link>
                </Button>
                <Button size="sm" className="gradient-bg text-primary-foreground font-medium flex-1 rounded-full" asChild>
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>Start a Project</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

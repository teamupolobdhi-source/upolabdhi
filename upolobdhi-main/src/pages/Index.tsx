import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const TerminalSection = lazy(() => import("@/components/TerminalSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const MethodologySection = lazy(() => import("@/components/MethodologySection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: number;
};

const DeferredSection = ({ children, minHeight = 280 }: DeferredSectionProps) => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mounted || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px 0px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div ref={containerRef} style={mounted ? undefined : { minHeight }}>
      {mounted ? <Suspense fallback={<div style={{ minHeight }} />}><>{children}</></Suspense> : null}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TechMarquee />

      <DeferredSection minHeight={420}>
        <ServicesSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <SkillsSection />
      </DeferredSection>
      <DeferredSection minHeight={320}>
        <TerminalSection />
      </DeferredSection>
      <DeferredSection minHeight={260}>
        <StatsSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <ProjectsSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <TeamSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <MethodologySection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <AboutSection />
      </DeferredSection>
      <DeferredSection minHeight={420}>
        <ContactSection />
      </DeferredSection>
      <DeferredSection minHeight={260}>
        <CTASection />
      </DeferredSection>

      <div className="h-20" />
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;

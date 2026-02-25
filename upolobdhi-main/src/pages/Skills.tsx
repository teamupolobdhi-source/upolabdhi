import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Skills = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <SkillsSection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default Skills;

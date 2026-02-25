import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Projects = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <ProjectsSection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default Projects;

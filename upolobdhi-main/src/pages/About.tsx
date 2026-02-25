import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <AboutSection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default About;

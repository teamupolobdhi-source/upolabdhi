import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Team = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <TeamSection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default Team;

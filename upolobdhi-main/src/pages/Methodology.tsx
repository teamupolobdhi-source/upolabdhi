import Navbar from "@/components/Navbar";
import MethodologySection from "@/components/MethodologySection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Methodology = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <MethodologySection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default Methodology;

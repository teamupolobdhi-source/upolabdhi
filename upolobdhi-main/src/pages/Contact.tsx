import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ChatButton from "@/components/ChatButton";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="pt-20">
      <ContactSection />
    </div>
    <Footer />
    <ChatButton />
  </div>
);

export default Contact;

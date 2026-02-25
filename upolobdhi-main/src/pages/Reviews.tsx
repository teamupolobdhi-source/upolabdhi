import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20">
        <ReviewsSection />
      </div>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Reviews;

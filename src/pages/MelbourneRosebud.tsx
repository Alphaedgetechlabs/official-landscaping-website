import { useEffect } from "react";
import Header from "@/components/Header";
import RosebudHeroSection from "@/components/rosebud/RosebudHeroSection";
import RosebudHowItWorks from "@/components/rosebud/RosebudHowItWorks";
import RosebudFenceTypes from "@/components/rosebud/RosebudFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RosebudFAQSection from "@/components/rosebud/RosebudFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneRosebud = () => {
  useEffect(() => {
    document.title = "Rosebud Landscaping Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RosebudHeroSection />
        <RosebudHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="landscaping-types">
          <RosebudFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <RosebudFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRosebud;

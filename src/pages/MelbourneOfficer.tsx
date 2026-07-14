import { useEffect } from "react";
import Header from "@/components/Header";
import OfficerHeroSection from "@/components/officer/OfficerHeroSection";
import OfficerHowItWorks from "@/components/officer/OfficerHowItWorks";
import OfficerFenceTypes from "@/components/officer/OfficerFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import OfficerFAQSection from "@/components/officer/OfficerFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneOfficer = () => {
  useEffect(() => {
    document.title = "Officer Landscaping Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <OfficerHeroSection />
        <OfficerHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="landscaping-types">
          <OfficerFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <OfficerFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneOfficer;

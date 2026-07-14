import { useEffect } from "react";
import Header from "@/components/Header";
import RichmondHeroSection from "@/components/richmond/RichmondHeroSection";
import RichmondHowItWorks from "@/components/richmond/RichmondHowItWorks";
import RichmondFenceTypes from "@/components/richmond/RichmondFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import RichmondFAQSection from "@/components/richmond/RichmondFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneRichmond = () => {
  useEffect(() => {
    document.title = "Richmond Landscaping Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <RichmondHeroSection />
        <RichmondHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="landscaping-types">
          <RichmondFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <RichmondFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneRichmond;

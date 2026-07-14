import { useEffect } from "react";
import Header from "@/components/Header";
import LyndhurstHeroSection from "@/components/lyndhurst/LyndhurstHeroSection";
import LyndhurstHowItWorks from "@/components/lyndhurst/LyndhurstHowItWorks";
import LyndhurstFenceTypes from "@/components/lyndhurst/LyndhurstFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import LyndhurstFAQSection from "@/components/lyndhurst/LyndhurstFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "/quote";

const MelbourneLyndhurst = () => {
  useEffect(() => { document.title = "Lyndhurst Landscaping Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <LyndhurstHeroSection />
        <LyndhurstHowItWorks />
        <div id="landscaping-types"><LyndhurstFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><LyndhurstFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneLyndhurst;

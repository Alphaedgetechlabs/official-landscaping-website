import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LandscapingTypes from "@/components/FenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const Index = () => {
  useDocumentTitle("QuoteMyLandscaping: Australia's #1 Landscaping Quote Platform — Get 3 Free Quotes in Minutes");
  
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HeroSection />
        <HowItWorks onQuoteClick={handleQuoteClick} />
        <div id="landscaping-types">
          <LandscapingTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <FAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

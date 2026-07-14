import Header from "@/components/Header";
import SuburbHeroSection from "@/components/shared/SuburbHeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";

const MelbourneWarranwood = () => {
  useDocumentTitle("Warranwood Landscaping Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SuburbHeroSection suburbName="Warranwood" />
        <div id="reviews"><ReviewsSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneWarranwood;

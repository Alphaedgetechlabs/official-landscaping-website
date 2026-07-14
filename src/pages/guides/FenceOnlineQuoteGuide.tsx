import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const LandscapingOnlineQuoteGuide = () => {
  useDocumentTitle("Getting an Accurate Landscaping Quote — QuoteMyLandscaping");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Landscaping Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Getting an Accurate
              <br />
              <span className="text-gradient">Landscaping Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Understand how to get better landscaping quotes online
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Getting landscaping quotes online is fast and convenient — but the quality of the quote you receive depends heavily on the information you provide. Clear details lead to accurate pricing, fewer surprises, and smoother project delivery.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains how online landscaping quote systems work, what information contractors actually need, and how homeowners can get more accurate, comparable, and reliable quotes.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Online Landscaping Quotes Vary So Much</h2>
            <p className="text-muted-foreground mb-4">
              Online quotes are estimates based on the details you submit. If information is missing or unclear, contractors must make assumptions — and assumptions often lead to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Price changes later</li>
              <li>Unexpected extras</li>
              <li>Delays or disputes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              The goal is simple: help contractors understand your project properly from the start so they can price it correctly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 1: Know What Information Contractors Need</h2>
            <p className="text-muted-foreground mb-4">
              Most online landscaping quote forms ask for similar core details.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Project details</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Type of landscaping (garden design, turf, paving, retaining walls, etc.)</li>
              <li>Style preferences</li>
              <li>Area size (approximate square metres)</li>
              <li>Desired features and materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Property & site details</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Property address (for access, soil type, and council rules)</li>
              <li>Current state of the outdoor area</li>
              <li>Slope or level changes</li>
              <li>Access for machinery and materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Extras & variations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Irrigation systems</li>
              <li>Outdoor lighting</li>
              <li>Removal of existing landscaping</li>
              <li>Drainage requirements</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 2: Measure Properly Before Filling Out the Form</h2>
            <p className="text-muted-foreground mb-4">
              Accurate measurements are one of the biggest factors in quote accuracy.
            </p>
            <p className="text-muted-foreground mb-4">Helpful tips:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Measure the total area in square metres</li>
              <li>Note any slopes, level changes, or obstacles</li>
              <li>Use a simple site sketch or council plan</li>
              <li>Measure each section separately if the area is irregular</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 3: Upload Photos</h2>
            <p className="text-muted-foreground mb-4">
              Uploading photos is one of the easiest ways to improve quote accuracy.
            </p>
            <p className="text-muted-foreground mb-4">Helpful photos include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Current state of the outdoor area</li>
              <li>Slopes or drainage issues</li>
              <li>Existing structures, trees, or features to keep</li>
              <li>Access points for machinery</li>
              <li>Neighbouring boundaries and structures</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 4: What a Good Landscaping Quote Should Include</h2>
            <p className="text-muted-foreground mb-4">
              A quality landscaping quote should be clear and detailed — not a single vague price.
            </p>
            <p className="text-muted-foreground mb-4">Look for itemised details such as:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Materials and quantities</li>
              <li>Labour costs</li>
              <li>Site preparation and earthworks</li>
              <li>Plant supply and installation</li>
              <li>Irrigation and drainage</li>
              <li>Clean-up and waste removal</li>
            </ul>
            <p className="text-muted-foreground mb-4">It should also clearly state:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Warranty on materials and workmanship</li>
              <li>Estimated timeline</li>
              <li>Payment schedule</li>
              <li>How variations are handled</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 5: Get and Compare Multiple Quotes</h2>
            <p className="text-muted-foreground mb-4">
              It's smart to get at least three quotes for any landscaping project.
            </p>
            <p className="text-muted-foreground mb-4">When comparing quotes, don't just look at the price. Compare:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Material quality and brands</li>
              <li>Scope of work included</li>
              <li>Timeline and availability</li>
              <li>Warranty terms</li>
              <li>Experience and portfolio</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 6: Questions to Ask Before Accepting a Quote</h2>
            <p className="text-muted-foreground mb-4">Before approving any landscaping quote, ask:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>What exact materials will be used?</li>
              <li>How long are materials and workmanship warrantied?</li>
              <li>Does the price include council approvals if required?</li>
              <li>Who handles drainage and irrigation design?</li>
              <li>How are weather delays or variations managed?</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Common Quote Mistakes to Avoid</h2>
            <p className="text-muted-foreground mb-4">Homeowners often run into trouble by:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Underestimating the area size</li>
              <li>Not mentioning drainage or access issues</li>
              <li>Accepting vague one-line quotes</li>
              <li>Paying large deposits before confirming licences and insurance</li>
              <li>Choosing solely on the lowest price</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">
              Getting better landscaping quotes isn't about finding the cheapest price — it's about giving contractors enough information to price the job properly.
            </p>
            <p className="text-muted-foreground mb-4">Clear details, photos, and thoughtful comparisons lead to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>More accurate pricing</li>
              <li>Fewer surprises</li>
              <li>Better results</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Better Quotes with QuoteMyLandscaping</h2>
            <p className="text-muted-foreground mb-4">
              QuoteMyLandscaping uses a guided quote process designed to capture the right details from the start.
            </p>
            <p className="text-muted-foreground mb-4">This helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Get clearer, more accurate quotes</li>
              <li>Compare local landscaping professionals</li>
              <li>Choose the right landscaper with confidence</li>
            </ul>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Take your time with online quote forms — the effort upfront can save you money, stress, and delays later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Landscaping Quote?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Compare local landscaping professionals and get free quotes in 60 seconds.
            </p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>
              Get 3 Free Quotes Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default LandscapingOnlineQuoteGuide;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const PoolLandscapingSafetyGuide = () => {
  useDocumentTitle("Garden Safety & Outdoor Design Guide — QuoteMyLandscaping");
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
              Garden Safety &
              <br />
              <span className="text-gradient">Outdoor Design Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Essential safety requirements for outdoor landscaping in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-2">Important Notice</p>
                  <p className="text-muted-foreground text-sm">
                    Safety requirements vary by state and council. Always confirm regulations with your local authority before starting any landscaping project.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              A beautiful garden should also be a safe garden. Whether you're designing a family-friendly backyard, installing outdoor lighting, or managing drainage, understanding garden safety principles helps protect your family and ensures compliance with Australian regulations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide covers the key safety considerations every Australian homeowner should understand when planning a landscaping project.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Safe Garden Design Principles</h2>
            <p className="text-muted-foreground mb-4">A well-designed garden considers safety from the ground up:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Clear pathways with non-slip surfaces</li>
              <li>Adequate lighting for steps, paths, and entrances</li>
              <li>Secure retaining walls with proper engineering</li>
              <li>Child-safe plant selection (avoiding toxic species)</li>
              <li>Proper drainage to prevent slippery surfaces</li>
              <li>Stable structures (pergolas, decks, raised garden beds)</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Plant Safety</h2>
            <p className="text-muted-foreground mb-4">
              Some common garden plants can be harmful to children and pets. When designing your garden, consider:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Avoid plants with toxic berries, leaves, or sap in family areas</li>
              <li>Choose child-friendly species for play zones</li>
              <li>Be aware of plants that attract stinging insects</li>
              <li>Ensure large trees are healthy and regularly checked for dead branches</li>
              <li>Keep thorny or spiky plants away from pathways</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Drainage & Water Management</h2>
            <p className="text-muted-foreground mb-4">
              Poor drainage is one of the most common landscaping problems — and one of the most dangerous:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Standing water creates slip hazards and mosquito breeding grounds</li>
              <li>Poor drainage can undermine retaining walls and structures</li>
              <li>Water pooling near foundations can cause structural damage</li>
              <li>French drains, swales, and proper grading prevent water issues</li>
              <li>Stormwater must not be redirected onto neighbouring properties</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Outdoor Lighting Safety</h2>
            <p className="text-muted-foreground mb-4">
              Proper outdoor lighting improves both safety and ambiance:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Illuminate steps, level changes, and pathways</li>
              <li>Use low-voltage or solar-powered garden lights</li>
              <li>Ensure all electrical work meets Australian standards</li>
              <li>Waterproof fittings are essential for outdoor use</li>
              <li>Motion-sensor lighting improves security</li>
              <li>A licensed electrician must install mains-powered lighting</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Retaining Wall Safety</h2>
            <p className="text-muted-foreground mb-4">
              Retaining walls are structural elements that must be built correctly:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Walls over 600mm–1m typically require engineering and council approval</li>
              <li>Proper drainage behind walls prevents hydrostatic pressure</li>
              <li>Use appropriate materials rated for structural use</li>
              <li>Never build retaining walls without adequate footings</li>
              <li>Consider handrails or barriers on top of tall walls</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Deck & Pergola Safety</h2>
            <p className="text-muted-foreground mb-4">
              Outdoor structures must meet building standards:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Decks over 1m high require balustrades</li>
              <li>Pergolas must be properly anchored and engineered for wind loads</li>
              <li>Timber structures need regular maintenance to prevent rot</li>
              <li>Non-slip finishes are essential for deck surfaces</li>
              <li>Check council requirements for sizes that need permits</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Family-Friendly Garden Design</h2>
            <p className="text-muted-foreground mb-4">
              Creating a safe outdoor space for children includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Soft-fall surfaces under play equipment</li>
              <li>Clear sightlines from the house to play areas</li>
              <li>Secure boundaries to keep children contained</li>
              <li>Avoiding deep water features in family gardens</li>
              <li>Age-appropriate garden elements</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">Before starting your landscaping project:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Prioritise safety in your design brief</li>
              <li>Use qualified professionals for structural work</li>
              <li>Ensure proper drainage is planned from the start</li>
              <li>Check all regulations and get required approvals</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting a Safe Garden Designed</h2>
            <p className="text-muted-foreground mb-4">QuoteMyLandscaping helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare qualified landscaping professionals</li>
              <li>Understand safety and compliance requirements</li>
              <li>Get clear, no-obligation quotes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A safe, well-designed garden gives homeowners peace of mind and creates outdoor spaces the whole family can enjoy.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always verify safety requirements with your local council or relevant authority before starting landscaping work.
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
              Compare landscaping professionals and get free quotes in 60 seconds.
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
export default PoolLandscapingSafetyGuide;

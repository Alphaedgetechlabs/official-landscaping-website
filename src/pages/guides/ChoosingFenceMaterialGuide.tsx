import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const ChoosingFenceMaterialGuide = () => {
  useDocumentTitle("Choosing the Right Landscaping Materials — QuoteMyLandscaping");
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
              Choosing the Right
              <br />
              <span className="text-gradient">Landscaping Materials</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare turf, paving, decking, and retaining wall options for Australian homes
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Choosing the right landscaping materials is one of the most important decisions homeowners make when planning an outdoor project. The right choice depends on your priorities — such as durability, budget, maintenance, appearance, and climate suitability.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              In Australia, the most common landscaping materials include natural turf, artificial turf, paving, timber decking, composite decking, and various retaining wall materials. Each has clear strengths and trade-offs.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">At-a-Glance Material Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Material</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Typical Lifespan*</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Maintenance</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Cost</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Best Uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Natural Turf</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Ongoing (with care)</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low–Medium</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Lawns, play areas, open spaces</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Artificial Turf</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">8–15 years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Very Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low-maintenance lawns, pet areas</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Paving</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">20–30+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Driveways, patios, pathways</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Timber Decking</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">15–25 years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Entertainment areas, elevated spaces</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Composite Decking</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">25+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Very Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Premium outdoor areas, coastal homes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8 italic">
              *Typical residential ranges. Climate, installation quality, and maintenance all affect lifespan.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Natural Turf</h2>
            <p className="text-muted-foreground mb-4">
              Natural turf remains the most popular ground cover for Australian gardens, providing a lush, green lawn that's perfect for families.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Natural appearance and feel</li>
              <li>Cools the surrounding area</li>
              <li>Absorbs rainfall and reduces runoff</li>
              <li>Relatively affordable to install</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Requires regular mowing, watering, and fertilising</li>
              <li>Can struggle in drought or heavy shade</li>
              <li>Needs soil preparation for best results</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Artificial Turf</h2>
            <p className="text-muted-foreground mb-4">
              Synthetic grass has improved dramatically and offers a practical alternative for homeowners who want a green lawn without ongoing maintenance.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>No mowing, watering, or fertilising</li>
              <li>Always green regardless of weather</li>
              <li>Ideal for pets and high-traffic areas</li>
              <li>Water-saving benefits</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Higher upfront cost than natural turf</li>
              <li>Can retain heat in direct sun</li>
              <li>Needs replacement after 8–15 years</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Paving</h2>
            <p className="text-muted-foreground mb-4">
              Paving is a versatile hard landscaping option used for driveways, patios, pathways, and outdoor entertainment areas.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Extremely durable and long-lasting</li>
              <li>Wide range of colours, patterns, and styles</li>
              <li>Low maintenance once installed</li>
              <li>Individual pavers can be replaced if damaged</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Requires proper base preparation</li>
              <li>Can be slippery when wet (choose textured finishes)</li>
              <li>Weeds can grow between pavers if not sealed</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Timber & Composite Decking</h2>
            <p className="text-muted-foreground mb-4">
              Decking creates elevated outdoor living spaces perfect for entertaining and relaxation.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Timber Decking</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Natural, warm appearance</li>
              <li>Requires regular oiling and maintenance</li>
              <li>Hardwood species like Merbau and Spotted Gum are popular</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Composite Decking</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Made from recycled wood and plastic</li>
              <li>Virtually no maintenance</li>
              <li>Won't rot, warp, or attract termites</li>
              <li>Higher upfront cost but lower lifetime cost</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Retaining Wall Materials</h2>
            <p className="text-muted-foreground mb-4">
              Retaining walls are essential for sloped properties and garden bed creation.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Concrete sleepers:</strong> Strong, durable, modern look</li>
              <li><strong>Timber sleepers:</strong> Natural appearance, more affordable</li>
              <li><strong>Natural stone:</strong> Premium look, excellent durability</li>
              <li><strong>Besser blocks:</strong> Cost-effective for larger walls</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">How to Choose the Right Materials</h2>
            <p className="text-muted-foreground mb-4">Before deciding:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Consider your climate and sun exposure</li>
              <li>Think about long-term costs, not just upfront price</li>
              <li>Factor in maintenance requirements</li>
              <li>Get professional advice for your specific property</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting the Right Materials Installed</h2>
            <p className="text-muted-foreground mb-4">
              QuoteMyLandscaping helps homeowners compare local landscaping professionals and explore different materials with confidence.
            </p>
            <p className="text-muted-foreground mb-8">
              By understanding your options upfront, you can choose materials that look great, last longer, and suit your lifestyle — without costly surprises.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always confirm material suitability and compliance with local council rules before installation.
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
export default ChoosingFenceMaterialGuide;

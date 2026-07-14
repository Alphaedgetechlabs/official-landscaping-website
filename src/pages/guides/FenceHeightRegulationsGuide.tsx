import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const LandscapingHeightRegulationsGuide = () => {
  useDocumentTitle("Landscaping Regulations & Permits in Australia — QuoteMyLandscaping");
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
              Landscaping Regulations
              <br />
              <span className="text-gradient">& Permits</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Australian landscaping regulations and permits explained for homeowners
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
                    This guide is for general information only. Always confirm requirements with your local council before starting any landscaping work that may require approval.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Many landscaping projects in Australia don't require permits — but some do. Retaining walls, significant earthworks, drainage alterations, and outdoor structures may all trigger council approval requirements depending on your state, territory, and local council rules.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains the key landscaping regulations across Australia, what typically requires council approval, and how homeowners can avoid costly compliance issues.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Is There a National Landscaping Regulation in Australia?</h2>
            <p className="text-muted-foreground mb-4">
              No. Australia does not have a single national law governing residential landscaping projects.
            </p>
            <p className="text-muted-foreground mb-4">What exists instead:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Each state and territory sets general planning and building rules</li>
              <li>Local councils apply their own planning schemes and overlays</li>
              <li>Special rules apply for retaining walls, tree removal, drainage, and structures</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">When Do You Need a Landscaping Permit?</h2>
            <p className="text-muted-foreground mb-4">Across Australia, approval is commonly required for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 600mm–1m high (varies by state)</li>
              <li>Significant earthworks or land reshaping</li>
              <li>Altering natural drainage patterns</li>
              <li>Building pergolas, decks, or gazebos above certain sizes</li>
              <li>Removing significant or protected trees</li>
              <li>Working in heritage or environmentally sensitive areas</li>
              <li>Installing swimming pools or spas</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Regulations by State & Territory</h2>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">New South Wales (NSW)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 600mm generally require approval</li>
              <li>Tree removal may need council consent, especially for protected species</li>
              <li>Decks and pergolas may qualify as exempt development if under certain sizes</li>
              <li>Stormwater management must not affect neighbouring properties</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Victoria (VIC)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Planning permits may be needed for significant vegetation removal</li>
              <li>Retaining walls may trigger building permits depending on height</li>
              <li>Heritage and neighbourhood character overlays add extra controls</li>
              <li>Pergolas and carports have size thresholds for exempt works</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Queensland (QLD)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 1m usually require building approval</li>
              <li>Pool safety compliance is strictly enforced</li>
              <li>Tree removal rules vary significantly by council</li>
              <li>Earthworks near waterways may need environmental approval</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">South Australia (SA)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls over 1m generally require development approval</li>
              <li>Regulated and significant trees have strict removal rules</li>
              <li>Structures like pergolas and verandahs may need planning consent</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Western Australia (WA)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Retaining walls vary by council — always check local rules</li>
              <li>Significant tree and vegetation removal may need approval</li>
              <li>Patio and pergola structures have size-based exemptions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Tasmania (TAS)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Planning controls vary by council area</li>
              <li>Significant earthworks and retaining walls may require permits</li>
              <li>Environmental overlays apply in many areas</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Australian Capital Territory (ACT)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Tree protection orders apply to many mature trees</li>
              <li>Retaining walls and structures have specific development code requirements</li>
              <li>The Common Boundaries Act governs shared boundary landscaping</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Northern Territory (NT)</h3>
            <p className="text-muted-foreground mb-8">
              Landscaping regulations in the NT vary by council. Cyclone-prone areas may have additional structural requirements for pergolas, retaining walls, and outdoor structures. Always check with your local council.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Drainage & Water Management</h2>
            <p className="text-muted-foreground mb-4">One of the most important regulatory considerations in landscaping is drainage:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>You cannot redirect stormwater onto neighbouring properties</li>
              <li>Retaining walls must include proper drainage systems</li>
              <li>Significant earthworks may alter natural water flow and require approval</li>
              <li>Rainwater harvesting and irrigation systems may have local rules</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Neighbour Considerations</h2>
            <p className="text-muted-foreground mb-4">Best practice for landscaping near boundaries:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Discuss plans with neighbours early</li>
              <li>Be aware of shared boundary obligations</li>
              <li>Ensure retaining walls don't affect neighbouring land</li>
              <li>Consider tree root spread near property lines</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">Before starting a landscaping project:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Check your local council planning rules</li>
              <li>Confirm whether your project requires approval</li>
              <li>Get professional advice for retaining walls and structures</li>
              <li>Ensure drainage is properly planned</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Your Landscaping Project Started</h2>
            <p className="text-muted-foreground mb-4">QuoteMyLandscaping helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare local landscaping professionals</li>
              <li>Understand project requirements and regulations</li>
              <li>Get clear, no‑obligation quotes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A well-planned landscaping project avoids compliance issues and ensures your outdoor space is built right the first time.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always confirm landscaping regulations with your local council before starting work. Rules can change, and local controls may apply.
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
export default LandscapingHeightRegulationsGuide;

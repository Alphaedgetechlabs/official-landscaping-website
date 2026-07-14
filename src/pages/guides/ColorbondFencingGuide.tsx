import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "/quote";
const ColorbondLandscapingGuide = () => {
  useDocumentTitle("Complete Guide to Landscaping in Australia — QuoteMyLandscaping");
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
              Complete Guide to
              <br />
              <span className="text-gradient">Landscaping in Australia</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to know about landscaping services in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Landscaping is one of the most impactful investments Australian homeowners can make. A well-designed outdoor space enhances your lifestyle, increases property value, and creates a beautiful environment for your family to enjoy year-round.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide is designed for everyday Australian homeowners who want clear, honest information before starting a landscaping project. Whether you're transforming a bare backyard or refreshing an established garden, this guide covers everything you need to know.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What Is Professional Landscaping?</h2>
            <p className="text-muted-foreground mb-4">
              Professional landscaping involves the design, construction, and maintenance of outdoor spaces. It encompasses both soft landscaping (plants, turf, garden beds) and hard landscaping (paving, retaining walls, decking, pergolas).
            </p>
            <p className="text-muted-foreground mb-4">
              A qualified landscaper can transform any outdoor area into a functional, attractive, and sustainable space tailored to the Australian climate.
            </p>
            <p className="text-muted-foreground mb-4">In simple terms:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>It adds beauty and functionality to your outdoor space</li>
              <li>It increases your property's value</li>
              <li>It creates low-maintenance outdoor living areas</li>
              <li>It's designed for Australian conditions</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Homeowners Choose Professional Landscaping</h2>
            <p className="text-muted-foreground mb-4">
              Many homeowners choose professional landscaping because it delivers results that DIY projects simply can't match.
            </p>
            <p className="text-muted-foreground mb-4">Key benefits include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Expert design – professional plans that maximise your outdoor space</li>
              <li>Quality materials – durable products suited to Australian conditions</li>
              <li>Proper drainage – preventing water damage and erosion</li>
              <li>Plant knowledge – selecting species that thrive in your climate zone</li>
              <li>Time savings – projects completed efficiently by experienced teams</li>
              <li>Increased property value – well-landscaped homes sell for more</li>
              <li>Year-round enjoyment – outdoor spaces designed for all seasons</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Types of Landscaping Services</h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Garden Design & Planting</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Custom garden bed layouts</li>
              <li>Native and exotic plant selection</li>
              <li>Seasonal colour planning</li>
              <li>Irrigation system design</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Turf & Lawn Installation</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Natural turf supply and installation</li>
              <li>Synthetic grass solutions</li>
              <li>Soil preparation and levelling</li>
              <li>Lawn replacement programs</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Hard Landscaping</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Paving and pathways</li>
              <li>Retaining walls</li>
              <li>Decking and pergolas</li>
              <li>Outdoor kitchens and entertainment areas</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Outdoor Renovations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Complete backyard makeovers</li>
              <li>Courtyard and patio upgrades</li>
              <li>Lighting and water features</li>
              <li>Outdoor living room design</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">How Much Does Landscaping Cost in Australia?</h2>
            <p className="text-muted-foreground mb-4">
              Landscaping costs vary significantly depending on the scope, materials, and complexity of the project.
            </p>
            <p className="text-muted-foreground mb-4">Factors that affect pricing include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Size of the area</li>
              <li>Type of landscaping (soft vs hard)</li>
              <li>Material selection</li>
              <li>Ground conditions and slope</li>
              <li>Site access</li>
              <li>Drainage requirements</li>
              <li>Design complexity</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Getting multiple quotes helps homeowners understand fair pricing for their specific property and project scope.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Landscaping Styles for Australian Homes</h2>
            <p className="text-muted-foreground mb-4">Popular landscaping styles in Australia include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Native Australian gardens – drought-tolerant, low-maintenance</li>
              <li>Tropical gardens – lush, green, resort-style feel</li>
              <li>Modern minimalist – clean lines, architectural plants</li>
              <li>Cottage gardens – colourful, informal planting</li>
              <li>Mediterranean style – warm tones, olive trees, stone features</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A professional landscaper can help you select a style that suits both your home and your local climate conditions.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Choosing the Right Plants</h2>
            <p className="text-muted-foreground mb-4">
              Selecting the right plants is crucial for a successful landscaping project. Consider:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Your climate zone and rainfall patterns</li>
              <li>Sun exposure in different areas of your garden</li>
              <li>Soil type and drainage</li>
              <li>Maintenance requirements</li>
              <li>Growth size at maturity</li>
              <li>Water needs and irrigation options</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Is Professional Landscaping Worth It?</h2>
            <p className="text-muted-foreground mb-4">
              Professional landscaping is ideal if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You want a cohesive outdoor design</li>
              <li>You need drainage or retaining solutions</li>
              <li>You want to increase property value</li>
              <li>You prefer a low-maintenance garden</li>
            </ul>
            <p className="text-muted-foreground mb-4">It may not be necessary if:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>You're doing simple planting or mulching</li>
              <li>The area is very small and straightforward</li>
              <li>You have experience with garden design</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Common Questions About Landscaping</h2>
            <p className="text-muted-foreground mb-4"><strong>How long does a landscaping project take?</strong><br />Most residential projects take 1–4 weeks depending on scope and weather conditions.</p>
            <p className="text-muted-foreground mb-4"><strong>Do I need council approval?</strong><br />Retaining walls, structures, and significant earthworks may require council permits. Your landscaper can advise.</p>
            <p className="text-muted-foreground mb-4"><strong>When is the best time to landscape?</strong><br />Autumn and spring are ideal for planting. Hard landscaping can be done year-round.</p>
            <p className="text-muted-foreground mb-4"><strong>Can landscaping be done in stages?</strong><br />Yes. Many homeowners plan their landscaping in phases to spread costs.</p>
            <p className="text-muted-foreground mb-8"><strong>Will landscaping increase my property value?</strong><br />Quality landscaping can add 5–15% to your property's value according to industry estimates.</p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting a Landscaping Quote</h2>
            <p className="text-muted-foreground mb-4">QuoteMyLandscaping helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare local landscaping professionals</li>
              <li>Receive transparent, competitive quotes</li>
              <li>Understand options before committing</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              There's no obligation — just clear information to help you make a confident decision about your landscaping project.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Professional landscaping is a smart investment for Australian homes. With the right landscaper and design, it can create beautiful outdoor spaces that provide enjoyment, value, and pride for years to come.
            </p>
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
export default ColorbondLandscapingGuide;

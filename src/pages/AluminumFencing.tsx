import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Home, Sparkles, Sun, Hammer, Award } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import outdoorRenovationsHero from "@/assets/outdoor-renovations-hero.jpg";
import outdoorRenovationsFeatures from "@/assets/outdoor-renovations-features.jpg";

const QUOTE_URL = "/quote";
const AluminumLandscaping = () => {
  useDocumentTitle("Outdoor Renovation Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const benefits = [{
    icon: Home,
    title: "Modern Outdoor Living",
    description: "Create the ultimate outdoor entertainment area for your family"
  }, {
    icon: Sparkles,
    title: "Complete Makeovers",
    description: "Full backyard transformations from concept to completion"
  }, {
    icon: Sun,
    title: "Year-Round Enjoyment",
    description: "Outdoor spaces designed for use in every season"
  }, {
    icon: Hammer,
    title: "Expert Construction",
    description: "Qualified landscapers and builders for quality results"
  }];
  const features = ["Decking and pergola construction", "Outdoor kitchen and BBQ areas", "Patio and courtyard design", "Garden lighting installation", "Complete backyard makeovers"];
  const renovationTypes = [{
    name: "Timber Decking",
    description: "Beautiful hardwood outdoor floors"
  }, {
    name: "Pergolas & Patios",
    description: "Covered outdoor living spaces"
  }, {
    name: "Outdoor Kitchens",
    description: "Complete alfresco cooking areas"
  }, {
    name: "Fire Pits & Features",
    description: "Stunning focal points for entertaining"
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Transform Your Outdoors</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Outdoor<br />
                <span className="text-gradient">Renovation Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your backyard into the ultimate outdoor living space. 
                Decking, pergolas, outdoor kitchens and complete backyard makeovers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free Design Consultation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src={outdoorRenovationsHero} alt="Outdoor Renovation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Outdoor Renovations?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create your dream outdoor living space with professional landscapers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Outdoor Transformation
              </h2>
              <p className="text-muted-foreground mb-8">
                Our verified landscapers and outdoor builders deliver stunning backyard makeovers 
                that increase your property value and lifestyle enjoyment.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img src={outdoorRenovationsFeatures} alt="Outdoor Renovation Features" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section id="aluminium-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Outdoor Renovation Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from a range of outdoor living upgrades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renovationTypes.map((type, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Renovate Your Outdoor Space?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get free quotes today and create your dream outdoor living area
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>
                Get 3 Free Quotes Now
              </Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Call 0481 752 344
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AluminumLandscaping;

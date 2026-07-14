import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Sun, Palette, Wrench, Award } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import gardenLandscapingHero from "@/assets/garden-landscaping-hero.jpg";
import gardenLandscapingFeatures from "@/assets/garden-landscaping-features.jpg";

const QUOTE_URL = "/quote";
const ColorbondLandscaping = () => {
  useDocumentTitle("Garden Landscaping Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const benefits = [{
    icon: Leaf,
    title: "Beautiful Gardens",
    description: "Transform your outdoor space with professionally designed garden landscapes"
  }, {
    icon: Sun,
    title: "Year-Round Appeal",
    description: "Enjoy a stunning garden in every season with smart plant selection"
  }, {
    icon: Palette,
    title: "Custom Designs",
    description: "Tailored landscape designs that match your home style and lifestyle"
  }, {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert landscapers handle every detail from soil prep to final planting"
  }];
  const features = ["Full garden design and installation", "Native and exotic plant selection", "Irrigation system installation", "Garden bed construction and mulching", "Lawn installation and edging", "Professional landscapers with 10+ years experience"];
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
                <span className="text-sm font-medium text-primary">Australia's #1 Landscaping Choice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Garden<br />Landscaping Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your outdoor space with professional garden landscaping. 
                Trusted by Australian homeowners for beautiful, lasting results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes 
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free Site Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Garden Landscaping Project" className="w-full h-full object-cover" src={gardenLandscapingHero} />
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
              Why Choose Garden Landscaping?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional landscaping that transforms your property and increases its value
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
                Complete Garden Landscaping Services
              </h2>
              <p className="text-muted-foreground mb-8">
                Our verified landscapers deliver end-to-end garden transformations, from initial design concepts through to professional installation and finishing touches.
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
                <img alt="Garden Landscaping Features" className="w-full h-full object-cover" src={gardenLandscapingFeatures} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get free quotes today and discover why thousands of Australians trust our landscapers
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
export default ColorbondLandscaping;

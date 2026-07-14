import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Sun, Droplets, Ruler, Award } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import turfHero from "@/assets/turf-installation-hero.jpg";
import turfFeatures from "@/assets/turf-installation-features.jpg";

const QUOTE_URL = "/quote";
const TimberLandscaping = () => {
  useDocumentTitle("Turf Installation Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const benefits = [{
    icon: Leaf,
    title: "Instant Green Lawn",
    description: "Transform bare soil into a lush green lawn in just one day"
  }, {
    icon: Sun,
    title: "Year-Round Beauty",
    description: "Choose turf varieties suited to Australian climate for lasting results"
  }, {
    icon: Droplets,
    title: "Water Efficient",
    description: "Modern turf varieties require less water while staying green and healthy"
  }, {
    icon: Ruler,
    title: "Perfect Finish",
    description: "Professional soil preparation and levelling for a flawless lawn"
  }];
  const features = ["Natural and synthetic turf options", "Complete soil preparation and levelling", "Drainage assessment and solutions", "Turf variety selection advice", "Professional installation by experienced landscapers"];
  const turfTypes = [{
    name: "Sir Walter Buffalo",
    description: "Shade tolerant, soft underfoot"
  }, {
    name: "Kikuyu",
    description: "Fast growing, drought hardy"
  }, {
    name: "Couch Grass",
    description: "Fine leaf, sports-grade quality"
  }, {
    name: "Synthetic Turf",
    description: "Zero maintenance, always green"
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
                <span className="text-sm font-medium text-primary">Instant Green Lawn</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Turf<br />Installation Services</h1>
              <p className="text-lg text-muted-foreground mb-8">Get a beautiful, lush green lawn installed by professional landscapers. Natural and synthetic turf options available Australia-wide.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free Site Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Same Week Installation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src={turfHero} alt="Turf Installation" className="w-full h-full object-cover" />
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
              Why Choose Professional Turf Installation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Expert turf laying for a perfect lawn that lasts</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Turf Installation Process</h2>
              <p className="text-muted-foreground mb-8">
                Our verified landscapers ensure your new lawn is installed to the highest standards, with proper soil preparation for long-lasting results.
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
                <img alt="Turf Installation Features" className="w-full h-full object-cover" src={turfFeatures} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turf Types Section */}
      <section id="timber-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Turf Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Select the perfect turf variety for your property and lifestyle</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {turfTypes.map((turf, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{turf.name}</h3>
                  <p className="text-sm text-muted-foreground">{turf.description}</p>
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
              Ready for a New Lawn?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and enjoy a beautiful green lawn in days</p>
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
export default TimberLandscaping;

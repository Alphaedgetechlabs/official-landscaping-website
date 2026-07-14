import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Palette, TreePine, Flower2, Layout, Award } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import gardenDesignHero from "@/assets/garden-design-hero.jpg";
import gardenDesignFeatures from "@/assets/garden-design-features.jpg";

const QUOTE_URL = "/quote";
const PoolLandscaping = () => {
  useDocumentTitle("Garden Design Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const benefits = [{
    icon: Palette,
    title: "Expert Design",
    description: "Professional landscape designers create tailored plans for your space"
  }, {
    icon: TreePine,
    title: "Plant Selection",
    description: "Curated plant palettes suited to your climate and soil conditions"
  }, {
    icon: Layout,
    title: "Space Planning",
    description: "Maximise your outdoor area with intelligent layout and zoning"
  }, {
    icon: Flower2,
    title: "Seasonal Colour",
    description: "Year-round colour and interest with strategic planting design"
  }];
  const features = ["Full landscape design and planning", "3D visualisation of your new garden", "Plant selection for Australian climates", "Hardscape and softscape integration", "Irrigation planning and water management", "Professional design consultations"];
  const designStyles = [{
    name: "Native Garden",
    description: "Australian native plants and grasses"
  }, {
    name: "Tropical Garden",
    description: "Lush, exotic plant combinations"
  }, {
    name: "Modern Minimalist",
    description: "Clean lines and structured plantings"
  }, {
    name: "Cottage Garden",
    description: "Abundant flowers and informal charm"
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
                <span className="text-sm font-medium text-primary">Professional Garden Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Garden<br />
                <span className="text-gradient">Design Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Create your dream outdoor space with professional garden design. 
                Expert landscape designers plan every detail for stunning results.
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
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>3D Visualisations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src={gardenDesignHero} alt="Garden Design" className="w-full h-full object-cover" />
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
              Why Choose Professional Garden Design?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert planning ensures your garden looks beautiful and functions perfectly
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
                Comprehensive Garden Design
              </h2>
              <p className="text-muted-foreground mb-8">
                Our landscape designers work with you to create a garden that reflects your style, 
                suits your lifestyle, and thrives in Australian conditions.
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
                <img src={gardenDesignFeatures} alt="Garden Design Planning" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Section */}
      <section id="pool-materials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Garden Design Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a design style that matches your vision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designStyles.map((style, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flower2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
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
              Ready to Design Your Dream Garden?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get free quotes today from professional garden designers near you
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
export default PoolLandscaping;

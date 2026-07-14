import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Wrench, DollarSign, CheckCircle2, Award, Leaf, Scissors, Flower2, TreePine } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import gardenMaintenanceHero from "@/assets/garden-maintenance-hero.jpg";
import gardenMaintenanceFeatures from "@/assets/garden-maintenance-features.jpg";

const QUOTE_URL = "/quote";
const LandscapingRepairs = () => {
  useDocumentTitle("Garden Maintenance Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const benefits = [{
    icon: Clock,
    title: "Regular Scheduling",
    description: "Weekly, fortnightly or monthly garden maintenance plans available"
  }, {
    icon: Wrench,
    title: "Expert Care",
    description: "Verified landscapers with experience in all garden types and styles"
  }, {
    icon: DollarSign,
    title: "Affordable Plans",
    description: "Cost-effective maintenance packages to keep your garden looking its best"
  }, {
    icon: CheckCircle2,
    title: "Quality Results",
    description: "Professional garden care that maintains your property's appearance"
  }];
  const maintenanceTypes = ["Lawn mowing and edging", "Hedge trimming and shaping", "Garden bed weeding and mulching", "Seasonal pruning and plant care", "Green waste removal", "Fertilising and soil treatment", "Irrigation system maintenance", "Garden clean-ups and makeovers"];
  const serviceTypes = [{
    name: "Lawn Care",
    description: "Mowing, edging & feeding",
    icon: Leaf
  }, {
    name: "Hedge Trimming",
    description: "Shaping & maintenance",
    icon: Scissors
  }, {
    name: "Garden Beds",
    description: "Weeding, mulching & planting",
    icon: Flower2
  }, {
    name: "Tree Care",
    description: "Pruning & health checks",
    icon: TreePine
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"><Award className="w-4 h-4 text-primary" /><span className="text-sm font-medium text-primary">Professional Garden Care</span></div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Garden<br /><span className="text-gradient">Maintenance Services</span></h1>
              <p className="text-lg text-muted-foreground mb-8">Keep your garden looking its best with professional maintenance services. Regular care from experienced landscapers.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>Get Free Quote</Button>
              </div>
            </div>
            <div className="relative"><div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant"><img src={gardenMaintenanceHero} alt="Garden Maintenance Services" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Professional Garden Maintenance?</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6"><div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3><p className="text-sm text-muted-foreground">{benefit.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Garden Maintenance Services We Cover</h2>
              <div className="space-y-4">{maintenanceTypes.map((item, index) => <div key={index} className="flex items-start space-x-3"><div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div><span className="text-foreground">{item}</span></div>)}</div>
            </div>
            <div className="relative"><div className="aspect-square rounded-2xl overflow-hidden shadow-elegant"><img src={gardenMaintenanceFeatures} alt="Garden Maintenance" className="w-full h-full object-cover" /></div></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Maintenance Services</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{serviceTypes.map((type, index) => <Card key={index} className="hover-scale border-border/50"><CardContent className="p-6 text-center"><div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4"><type.icon className="w-10 h-10 text-white" /></div><h3 className="text-lg font-semibold text-foreground mb-2">{type.name}</h3><p className="text-sm text-muted-foreground">{type.description}</p></CardContent></Card>)}</div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Regular Garden Maintenance?</h2>
            <p className="text-white/90 text-lg mb-8">Get a free quote today for professional garden care</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>Get Free Quote</Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344"><Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">Call 0481 752 344</Button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default LandscapingRepairs;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, Lock, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import colorbondWhiteIcon from "@/assets/colorbond-white-icon.webp";
import timberWhiteIcon from "@/assets/timber-white-icon.webp";
import aluminiumWhiteIcon from "@/assets/aluminium-white-icon.webp";
import steelWhiteIcon from "@/assets/steel-white-icon.webp";
import featureWhiteIcon from "@/assets/feature-white-icon.webp";
const QUOTE_URL = "/quote";
interface LandscapingTypesProps {
  onQuoteClick?: () => void;
}
const LandscapingTypes = ({
  onQuoteClick
}: LandscapingTypesProps) => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const fenceTypes = [{
    id: "colorbond",
    name: "Garden Landscaping",
    description: "Complete garden transformation with professional planting design, lawn layouts, and outdoor garden spaces tailored to your property.",
    features: ["Custom garden design", "Plant selection & installation", "Lawn & garden layouts", "Ongoing support"],
    price: "$3,000",
    iconImage: colorbondWhiteIcon,
    popular: true,
    href: "/garden-landscaping"
  }, {
    id: "timber",
    name: "Turf Installation",
    description: "Natural and synthetic turf installation with soil preparation, levelling, and professional laying for an instant green lawn.",
    features: ["Natural & synthetic options", "Soil preparation", "Professional laying", "Instant green lawn"],
    price: "$1,800",
    iconImage: timberWhiteIcon,
    href: "/turf-installation"
  }, {
    id: "pool",
    name: "Garden Design",
    description: "Professional garden design and landscape planning with expert plant selection and outdoor space layouts.",
    features: ["Expert planning", "Plant selection", "3D concepts", "Tailored designs"],
    price: "$2,500",
    icon: Waves,
    href: "/garden-design"
  }, {
    id: "aluminium",
    name: "Outdoor Renovations",
    description: "Backyard makeovers and outdoor entertainment areas including patio upgrades, courtyards, and modern outdoor living spaces.",
    features: ["Backyard makeovers", "Patio & courtyard", "Entertainment areas", "Modern design"],
    price: "$4,000",
    iconImage: aluminiumWhiteIcon,
    href: "/outdoor-renovations"
  }, {
    id: "chainlink",
    name: "Retaining Walls",
    description: "Professional retaining wall construction for sloped blocks, garden terracing, and structural support.",
    features: ["Timber & concrete", "Structural engineering", "Garden terracing", "Drainage solutions"],
    price: "$2,200",
    icon: Link2,
    href: "/retaining-walls"
  }, {
    id: "security",
    name: "Hard Landscaping",
    description: "Paving, pathways, driveways, and structural landscape elements for a complete outdoor transformation.",
    features: ["Paving & pathways", "Driveways", "Stone & concrete work", "Edging & borders"],
    price: "$3,500",
    icon: Lock,
    href: "/hard-landscaping"
  }, {
    id: "steel",
    name: "Decking & Pergolas",
    description: "Custom timber and composite decking with pergola construction for the ultimate outdoor living experience.",
    features: ["Timber & composite", "Custom pergolas", "Outdoor kitchens", "Shade solutions"],
    price: "$4,500",
    iconImage: steelWhiteIcon,
    href: "/decking-pergolas"
  }, {
    id: "feature",
    name: "Garden Maintenance",
    description: "Regular garden maintenance including lawn care, hedge trimming, garden clean-ups, and seasonal care.",
    features: ["Lawn mowing", "Hedge trimming", "Garden clean-ups", "Seasonal care"],
    price: "$250",
    iconImage: featureWhiteIcon,
    href: "/garden-maintenance"
  }];
  return <section id="landscaping-types" className="py-12 sm:py-20" style={{
    backgroundColor: 'hsl(215 40% 18%)'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Landscaping Service
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Discover landscaping solutions tailored to your needs, budget, and outdoor vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {fenceTypes.map(fence => <Card key={fence.id} className={`relative shadow-strong hover:shadow-accent transition-smooth group cursor-pointer ${fence.popular ? 'border-accent ring-2 ring-accent/20' : ''}`}>
              {fence.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>}
              
              <CardHeader className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  {fence.iconImage ? <img src={fence.iconImage} alt={fence.name} className="w-8 h-8" /> : fence.icon ? <fence.icon className="w-8 h-8 text-white" /> : null}
                </div>
                <CardTitle className="text-lg">{fence.name}</CardTitle>
                <div className="text-2xl font-bold text-accent"><span className="text-muted-foreground text-sm font-normal mr-1">from</span>{fence.price}</div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-center">
                  {fence.description}
                </CardDescription>
                
                <div className="space-y-2">
                  {fence.features.map((feature, index) => <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>)}
                </div>
                
                <div className="flex gap-2">
                  <Button variant={fence.popular ? "hero" : "outline"} className="flex-1" onClick={handleQuoteClick}>
                    Get Quotes
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to={fence.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team can help you select the perfect landscaping solution based on your specific needs, 
              budget, and property requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={QUOTE_URL}>Speak to an Expert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LandscapingTypes;

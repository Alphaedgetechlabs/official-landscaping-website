import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
const KilsythFenceTypes = () => {
  const fenceTypes = [
    { title: "Kilsyth Garden Landscaping", description: "Durable decking & pergolas in 22 colours.", image: "/lovable-uploads/5dc8e99f-d31f-45a3-82b0-2cbaf923d400.webp", link: "/garden-landscaping", features: ["22 Colours", "Steel Construction", "30 Year Warranty"] },
    { title: "Kilsyth Turf Installation", description: "Natural hardwood or treated pine.", image: "/lovable-uploads/b398ce61-451a-430e-8e0c-bd29476ef2c4.webp", link: "/turf-installation", features: ["Hardwood Options", "Natural Look", "Customisable"] },
    { title: "Kilsyth Outdoor Renovations", description: "Modern aluminium for pools and gardens.", image: "/lovable-uploads/aluminium-landscaping-hero.webp", link: "/outdoor-renovations", features: ["Rust-Proof", "Low Maintenance", "Modern Design"] },
    { title: "Kilsyth Glass Garden Design", description: "Frameless glass garden design.", image: "/lovable-uploads/pool-landscaping-hero.webp", link: "/garden-design", features: ["Safety Compliant", "Unobstructed Views", "Premium Look"] },
    { title: "Kilsyth Hard Landscaping", description: "Heavy-duty security solutions.", image: "/lovable-uploads/security-landscaping-hero.webp", link: "/hard-landscaping", features: ["High Security", "Durable", "Commercial Grade"] },
    { title: "Kilsyth Decking & Pergolas", description: "Strong tubular decking & pergolas.", image: "/lovable-uploads/steel-landscaping-hero.webp", link: "/decking-pergolas", features: ["Heavy Duty", "Long Lasting", "Versatile"] },
    { title: "Kilsyth Retaining Walls", description: "Cost-effective chain wire landscaping.", image: "/lovable-uploads/chain-link-landscaping-hero.webp", link: "/retaining-walls", features: ["Affordable", "Quick Install", "Low Maintenance"] },
    { title: "Kilsyth Outdoor Structures", description: "Sliding, swing, and automated gates.", image: "/lovable-uploads/outdoor-structures-hero-v2.webp", link: "/outdoor-structures", features: ["Automated Options", "Custom Designs", "All Materials"] },
  ];
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Landscaping Options in Kilsyth</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">All materials available in 15 colour options.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fenceTypes.map((fence, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden"><img src={fence.image} alt={fence.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none" draggable="false" /></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{fence.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{fence.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">{fence.features.map((f, i) => <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">{f}</span>)}</div>
                <Link to={fence.link}><Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">Learn More</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default KilsythFenceTypes;

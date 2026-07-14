import { Link } from "react-router-dom";
const fenceTypes = [
  { name: "Garden Landscaping", description: "Durable decking & pergolas perfect for Wantirna's climate.", href: "/garden-landscaping", popular: true },
  { name: "Turf Installation", description: "Classic wooden landscaping that complements Wantirna homes.", href: "/turf-installation", popular: true },
  { name: "Garden Design", description: "Compliant garden design for Wantirna properties.", href: "/garden-design", popular: false },
  { name: "Outdoor Renovations", description: "Stylish landscaping ideal for Wantirna front yards.", href: "/outdoor-renovations", popular: false },
  { name: "Hard Landscaping", description: "Security solutions for Wantirna homes.", href: "/hard-landscaping", popular: false },
  { name: "Outdoor Structures", description: "Custom gates for your Wantirna landscape.", href: "/outdoor-structures", popular: false }
];
const WantirnaFenceTypes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Service Types in Wantirna</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Popular landscaping options in Wantirna.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fenceTypes.map((fence, index) => (
            <Link key={index} to={fence.href} className="group bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{fence.name}</h3>
                {fence.popular && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Popular</span>}
              </div>
              <p className="text-muted-foreground text-sm">{fence.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WantirnaFenceTypes;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";
const QUOTE_URL = "/quote";
interface RowvilleFAQSectionProps {
  onQuoteClick?: () => void;
}
const RowvilleFAQSection = ({
  onQuoteClick
}: RowvilleFAQSectionProps) => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const faqs = [{
    question: "How much does landscaping installation cost in Rowville?",
    answer: "Rowville landscaping Installation costs depend on the landscaping material, height, total length, and site conditions. As a guide from our Rowville verified landscaping contractors, turf installation starts from $65 per metre, garden landscaping starts from $75 per metre, and garden-safe landscaping options can start from $60 per metre. Prices may increase for steeper blocks, rocky soil, retaining requirements, or old landscape removal. For the most accurate price, use our instant landscaping quote tool — it gives you a fast online estimate and matches you with local landscaping experts who'll provide detailed on-site pricing."
  }, {
    question: "How long does it take to install a landscape in Rowville?",
    answer: "A standard residential landscaping (20–30m) in Rowville usually takes around 1–2 days to install. Larger landscaping jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days. Pool landscaping, due to compliance checks and certification rules, typically takes 1–4 days. After reviewing your property, your matched local landscaping contractors will confirm the exact installation timeline during the quoting stage."
  }, {
    question: "Do I need council approval for my landscaping in Rowville?",
    answer: "In Rowville most residential landscaping under 2 metres don't require council approval, but rules can vary depending on your estate area. Approval is often required for boundary landscapings on corner blocks, heritage-listed properties, high-traffic locations, or landscaping that exceed standard height limits. Our verified Rowville local landscaping contractors understand Knox City Council regulations in Rowville and will guide you through the approval or permit process if needed."
  }, {
    question: "What's the best landscaping material for my property in Rowville?",
    answer: "It depends on your goals and the style of your home in Rowville. garden landscaping is incredibly durable, low-maintenance, and ideal for harsh Australian weather conditions. Timber landscaping offers a natural, warm look but requires periodic maintenance. Aluminium slat landscaping provides a modern appearance with excellent durability, while landscape lighting is a premium option perfect for pools, outdoor areas, and homes wanting an open, stylish finish. After reviewing your property, Rowville local landscaping contractors can recommend the best material based on your privacy needs, style preferences, budget, and long-term value."
  }, {
    question: "Are the landscaping contractors in Rowville verified and insured?",
    answer: "Yes. Every landscaping contractor on our platform in Rowville is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you're only connected with reliable, experienced, and proven landscaping professionals in your Rowville local area."
  }, {
    question: "How many quotes will I receive?",
    answer: "You'll typically receive up to 3 competitive quotes from reputable Rowville local landscaping experts within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation — you simply choose the landscaping contractor who best suits your project and budget."
  }, {
    question: "Can you repair or replace an existing landscape in Rowville?",
    answer: "Absolutely. Whether you need simple landscape maintenance (damaged areas, worn features, storm damage) or a complete landscaping replacement, our Rowville local landscaping contractors can help. They'll inspect the landscape, explain your repair-vs-replacement options, and provide honest advice to ensure you get the most cost-effective solution for your property."
  }, {
    question: "What happens after I submit my quote request?",
    answer: "Within minutes, we'll match you with up to 3 qualified local landscaping professionals in Rowville. They'll contact you to discuss your job, arrange a site visit if required, and provide detailed written landscaping quotes. You review the quotes, ask any questions, and choose the landscaping contractor that best suits your project — all at your own pace with zero pressure."
  }, {
    question: "How long will my landscaping last in Rowville?",
    answer: "Landscaping lifespan depends on the material and Rowville area climate. A well-installed Colorbond landscaping or aluminium landscaping can last 20–30 years, while turf installation generally lasts 10–20 years with proper care. Regular maintenance, high-quality installation, and choosing the right landscaping material for the Rowville area all play a major role in how long your landscape will last."
  }, {
    question: "What factors can increase the total cost of a landscape?",
    answer: "Aside from the landscaping material itself, several factors can increase the total cost of a landscape. These include site preparation, sloped or rocky ground, old landscape removal, retaining requirements, custom designs, extra gates, and property accessibility issues. Your landscaping contractors will outline all costs upfront during the quoting process so there are no surprises."
  }, {
    question: "Do I need my neighbour's approval for a new boundary landscaping in Rowville?",
    answer: "Yes — communication with your neighbour is essential. Boundary landscaping require both parties to agree on the landscape height, materials, and cost sharing. In most cases, a quick conversation is enough to reach an agreement, and formal landscaping notices are only needed if there's a dispute or your neighbour disagrees with the proposed landscaping."
  }, {
    question: "How close to the boundary can I build my landscaping in Rowville?",
    answer: "Most boundary landscapings are installed directly on the shared property line and are usually a shared cost between neighbours. To avoid disputes, it's best to check your boundary plan, title documents, or property survey before work begins. If needed, your landscaping contractor can help confirm the correct boundary location."
  }, {
    question: "How do I choose the right landscaping for my home in Rowville?",
    answer: "Choosing the right landscaping depends on your home's style, privacy requirements and budget. Modern and contemporary homes often suit aluminium slat landscaping or Colorbond, while classic or traditional properties typically look best with timber, picket, or decorative garden maintenance. If you need maximum privacy, Colorbond or tall timber options work well. During your consultation, a local landscaping contractor will assess your property and recommend the best materials based on appearance, durability, long-term value, and your goals."
  }, {
    question: "Can a new landscape add value to my property?",
    answer: "Absolutely. A modern, high-quality landscaping can significantly improve your property's street appeal, privacy, and security — all of which add real value. It creates a stronger first impression, enhances outdoor spaces, and reduces future maintenance for potential buyers. By choosing durable materials like Colorbond, aluminium, or premium timber, your home becomes more attractive on the market and can stand out against similar properties."
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about landscaping in Rowville? We've got answers. Here's everything you need to know about
            getting your perfect landscape installed in Rowville.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local landscaping experts in Rowville are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={onQuoteClick || handleQuoteClick} className="mb-6">
            <Quote className="w-5 h-5" />
            Get Your 3 Free Quotes Now
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-accent font-bold text-lg">⭐ 4.78</span>
              <span>rating</span>
            </div>
            <span className="text-border">•</span>
            <span>10,000+ Landscapings Quoted</span>
            <span className="text-border">•</span>
            <span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>;
};
export default RowvilleFAQSection;
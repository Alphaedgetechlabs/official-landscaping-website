import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";
const QUOTE_URL = "/quote";
interface FAQSectionProps {
  onQuoteClick?: () => void;
}
const FAQSection = ({
  onQuoteClick
}: FAQSectionProps) => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const faqs = [{
    question: "How much does landscaping cost in Australia?",
    answer: "Landscaping costs depend on the scope of work, materials, and site conditions. As a guide from our verified landscapers, basic garden landscaping starts from $3,000, turf installation from $1,800, and full outdoor renovations from $4,000. Prices may increase for sloped blocks, drainage requirements, or premium materials. For the most accurate price, use our instant landscaping quote tool — it gives you a fast online estimate and matches you with local landscaping experts who'll provide detailed pricing."
  }, {
    question: "How long does a landscaping project take?",
    answer: "A standard residential garden (front or backyard) usually takes around 3–7 days to complete. Larger landscaping jobs, including outdoor renovations, retaining walls, or decking, may take 2–4 weeks. After reviewing your property, your matched local landscaper will confirm the exact project timeline during the quoting stage."
  }, {
    question: "Do I need council approval for landscaping?",
    answer: "Most standard garden landscaping doesn't require council approval. However, approval may be needed for retaining walls over a certain height, tree removal of protected species, structures like pergolas or sheds, and changes to drainage or stormwater. Our verified local landscapers understand council regulations in your area and will guide you through any approval processes needed."
  }, {
    question: "What's the best landscaping option for my property?",
    answer: "It depends on your goals and the style of your home. Garden landscaping is ideal for creating beautiful outdoor spaces, turf installation provides an instant green lawn, and outdoor renovations transform your entire backyard for entertaining. After reviewing your property, local landscapers can recommend the best approach based on your lifestyle, preferences, budget, and long-term value."
  }, {
    question: "Are the landscaping contractors verified and insured?",
    answer: "Yes. Every landscaper in our network is fully licensed, insured, and professionally vetted before they're allowed to quote. We verify their experience, trade credentials, public liability insurance, and customer reviews to ensure you're only connected with reliable, experienced, and proven landscaping professionals in your local area."
  }, {
    question: "How many quotes will I receive?",
    answer: "You'll typically receive up to 3 competitive quotes from reputable local landscaping experts within hours. This lets you compare pricing, availability, experience, and workmanship. There's absolutely no obligation — you simply choose the landscaper who best suits your project and budget."
  }, {
    question: "Can you maintain an existing garden?",
    answer: "Absolutely. Whether you need regular garden maintenance (lawn mowing, hedge trimming, garden clean-ups) or a complete garden makeover, our local landscapers can help. They'll assess your garden, explain your options, and provide honest advice to ensure you get the most cost-effective solution for your property."
  }, {
    question: "What happens after I submit my quote request?",
    answer: "Within minutes, we'll match you with up to 3 qualified local landscaping professionals in your area. They'll contact you to discuss your project, arrange a site visit if required, and provide detailed written landscaping quotes. You review the quotes, ask any questions, and choose the landscaper that best suits your project — all at your own pace with zero pressure."
  }, {
    question: "How long will my landscaping last?",
    answer: "Landscaping lifespan depends on the materials and maintenance. Well-installed turf can last indefinitely with proper care, paving and retaining walls can last 20–30+ years, and garden plantings establish and grow over time. Regular maintenance, quality installation, and choosing the right materials all play a major role in how long your landscaping will look its best."
  }, {
    question: "What factors can increase the total cost of a landscaping project?",
    answer: "Aside from materials, several factors can increase costs. These include site preparation, sloped or rocky ground, demolition and removal of existing features, drainage requirements, retaining walls, custom designs, and property accessibility. Your landscapers will outline all costs upfront during the quoting process so there are no surprises."
  }, {
    question: "Can landscaping add value to my property?",
    answer: "Absolutely. Professional landscaping can significantly improve your property's street appeal, outdoor living space, and overall value. It creates a stronger first impression, enhances entertainment areas, and reduces future maintenance for potential buyers. By investing in quality landscaping, your home becomes more attractive on the market and can stand out against similar properties."
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
            Got questions about landscaping? We've got answers. Here's everything you need to know about
            getting your perfect outdoor space designed and built.
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
            Our local landscaping experts are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={handleQuoteClick} className="mb-6">
            <Quote className="w-5 h-5" />
            Get Your 3 Free Quotes Now
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-accent font-bold text-lg">⭐ 4.78</span>
              <span>rating</span>
            </div>
            <span className="text-border">•</span>
            <span>14,800+ Landscapes Completed</span>
            <span className="text-border">•</span>
            <span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;

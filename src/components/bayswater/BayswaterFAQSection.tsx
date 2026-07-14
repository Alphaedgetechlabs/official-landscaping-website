import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does landscaping cost in Bayswater?",
    answer: "Landscaping costs in Bayswater typically range from $75-$150 per metre for Colorbond and $80-$180 per metre for turf installation. Prices vary based on project scope, terrain, and access to your property."
  },
  {
    question: "Do I need a permit for landscaping in Bayswater?",
    answer: "In Bayswater (Knox Council area), landscaping up to 2 metres high generally don't require a permit. However, front yard landscapings over 1.2m and landscaping in heritage overlays may need approval. Our contractors can advise on your specific situation."
  },
  {
    question: "How long does landscape installation take in Bayswater?",
    answer: "Most residential landscape installations in Bayswater take 1-3 days depending on the length and complexity. Larger properties or difficult terrain may take longer."
  },
  {
    question: "What's the best service type for Bayswater properties?",
    answer: "Colorbond and timber are the most popular choices in Bayswater. Colorbond offers durability and low maintenance, while timber provides a natural look that suits the suburb's leafy character."
  },
  {
    question: "Can you remove my old landscape in Bayswater?",
    answer: "Yes, most Bayswater landscaping contractors include old landscape removal and disposal in their quotes. Be sure to confirm this when comparing quotes."
  },
  {
    question: "Do I need my neighbour's permission for a new landscape?",
    answer: "Yes, under Victorian law you should give your neighbour a Landscaping Notice before building or replacing a dividing boundary. Our contractors can help guide you through this process."
  },
  {
    question: "What warranty do Bayswater landscapers offer?",
    answer: "Most reputable landscaping contractors in Bayswater offer warranties ranging from 5-10 years on workmanship and materials. Always confirm warranty details before hiring."
  },
  {
    question: "How do I choose the best landscaper in Bayswater?",
    answer: "Compare at least 3 quotes, check reviews, verify insurance and licensing, and ask for references from recent Bayswater projects. Our service connects you with pre-verified contractors."
  },
  {
    question: "What if my property has a slope?",
    answer: "Sloping blocks in Bayswater are common. Landscapers can install stepped or raked landscaping to follow the terrain. This may affect pricing, so mention slopes when requesting quotes."
  },
  {
    question: "Can I get a landscape installed in winter?",
    answer: "Yes, landscaping can be installed year-round in Bayswater. While wet weather may cause minor delays, experienced contractors work efficiently in all seasons."
  },
  {
    question: "Do you service all of Bayswater?",
    answer: "Yes, our network of contractors services all areas of Bayswater, including Bayswater North and surrounding suburbs in the Knox and Maroondah council areas."
  },
  {
    question: "How do I get started with a landscaping quote?",
    answer: "Simply click 'Get 3 Free Quotes' and fill out the short form. We'll match you with up to 3 verified Bayswater landscaping contractors within 24 hours."
  },
  {
    question: "Are your Bayswater contractors insured?",
    answer: "Yes, all contractors in our network carry public liability insurance and relevant trade licenses. We verify credentials before adding any contractor to our platform."
  },
  {
    question: "What payment terms do Bayswater landscapers offer?",
    answer: "Most contractors require a deposit (typically 10-30%) with the balance due on completion. Some offer payment plans for larger projects. Discuss payment terms before work begins."
  }
];

const BayswaterFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bayswater Landscaping FAQs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about landscaping in Bayswater, answered by local experts.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BayswaterFAQSection;

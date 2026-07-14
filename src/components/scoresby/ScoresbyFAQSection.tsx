import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "How much does landscaping cost in Scoresby?", answer: "Landscaping costs in Scoresby typically range from $75-$150 per metre for Colorbond and $80-$180 per metre for turf installation." },
  { question: "Do I need a permit for landscaping in Scoresby?", answer: "In Scoresby (Knox Council area), landscaping up to 2 metres high generally don't require a permit. Front landscaping over 1.2m may need approval." },
  { question: "How long does landscape installation take in Scoresby?", answer: "Most residential landscape installations in Scoresby take 1-3 days depending on the length and complexity." },
  { question: "What's the best service type for Scoresby properties?", answer: "Colorbond and timber are the most popular choices in Scoresby for their durability and aesthetic appeal." },
  { question: "Can you remove my old landscape in Scoresby?", answer: "Yes, most Scoresby landscaping contractors include old landscape removal and disposal in their quotes." },
  { question: "Do I need my neighbour's permission for a new landscape?", answer: "Yes, under Victorian law you should give your neighbour a Landscaping Notice before building or replacing a dividing boundary." },
  { question: "What warranty do Scoresby landscapers offer?", answer: "Most reputable landscaping contractors in Scoresby offer warranties ranging from 5-10 years on workmanship and materials." },
  { question: "How do I choose the best landscaper in Scoresby?", answer: "Compare at least 3 quotes, check reviews, verify insurance and licensing, and ask for references." },
  { question: "What if my property has a slope?", answer: "Landscapers can install stepped or raked landscaping to follow the terrain. This may affect pricing." },
  { question: "Can I get a landscape installed in winter?", answer: "Yes, landscaping can be installed year-round in Scoresby. Experienced contractors work efficiently in all seasons." },
  { question: "Do you service all of Scoresby?", answer: "Yes, our network of contractors services all areas of Scoresby and surrounding Knox suburbs." },
  { question: "How do I get started with a landscaping quote?", answer: "Simply click 'Get 3 Free Quotes' and fill out the short form. We'll match you with verified Scoresby contractors." },
  { question: "Are your Scoresby contractors insured?", answer: "Yes, all contractors in our network carry public liability insurance and relevant trade licenses." },
  { question: "What payment terms do Scoresby landscapers offer?", answer: "Most contractors require a deposit (typically 10-30%) with the balance due on completion." }
];

const ScoresbyFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Scoresby Landscaping FAQs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Common questions about landscaping in Scoresby, answered by local experts.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ScoresbyFAQSection;

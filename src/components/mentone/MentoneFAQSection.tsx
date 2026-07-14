import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does landscaping cost in Mentone?", a: "Landscaping costs in Mentone typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for landscaping in Mentone?", a: "Landscaping under 2 metres generally don't require a permit in Kingston Council. Our contractors can advise on your specific requirements." },
  { q: "How long does landscape installation take in Mentone?", a: "Most residential landscaping projects in Mentone are completed within 1-3 days, weather permitting." },
  { q: "What's the best service type for Mentone properties?", a: "Timber and outdoor renovations are popular in Mentone's bayside setting, offering both privacy and coastal durability." },
  { q: "Do you remove old landscaping in Mentone?", a: "Yes, most of our Mentone contractors include old landscape removal and disposal in their quotes." },
  { q: "Can I get a pool landscape installed in Mentone?", a: "Absolutely. Our contractors install compliant glass and aluminium garden design meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Mentone?", a: "All 15 standard Colorbond colours are available, with Surfmist, Shale Grey, and Dune being popular in bayside Mentone." },
  { q: "How do I prepare for landscape installation?", a: "Clear the landscape line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Mentone landscaping contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Can you match my neighbour's existing landscape?", a: "Our contractors can often match or complement existing landscaping styles for a cohesive streetscape." },
  { q: "Is coastal-grade landscaping available in Mentone?", a: "Yes, we offer marine-grade aluminium and coastal-rated Colorbond suitable for Mentone's bayside location." },
  { q: "How quickly can I get quotes in Mentone?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Mentone contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Mentone landscaping?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const MentoneFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mentone Landscaping FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default MentoneFAQSection;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does landscaping cost in Hastings?", a: "Landscaping costs in Hastings typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for landscaping in Hastings?", a: "Landscaping under 2 metres generally don't require a permit in Mornington Peninsula Shire. Our contractors can advise on specific requirements." },
  { q: "How long does landscape installation take in Hastings?", a: "Most residential landscaping projects in Hastings are completed within 1-3 days, weather permitting." },
  { q: "What's the best service type for Hastings properties?", a: "Coastal-rated Colorbond and marine-grade aluminium are ideal for Hastings due to its waterfront location on Western Port." },
  { q: "Do you remove old landscaping in Hastings?", a: "Yes, most of our Hastings contractors include old landscape removal and disposal in their quotes." },
  { q: "Can I get a pool landscape installed in Hastings?", a: "Absolutely. Our contractors install compliant glass and aluminium garden design meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Hastings?", a: "All 15 standard Colorbond colours are available, with Surfmist, Dune, and Shale Grey being popular coastal choices." },
  { q: "How do I prepare for landscape installation?", a: "Clear the landscape line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Hastings landscaping contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Is coastal-grade landscaping essential in Hastings?", a: "Yes, we strongly recommend marine-grade materials for Hastings properties due to salt air exposure from Western Port." },
  { q: "What if my Hastings property has sandy soil?", a: "Our contractors are experienced with peninsula soil conditions and use appropriate footing methods." },
  { q: "How quickly can I get quotes in Hastings?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Hastings contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Hastings landscaping?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const HastingsFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hastings Landscaping FAQs</h2>
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

export default HastingsFAQSection;

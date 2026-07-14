import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MooroolbarkFAQSection = () => {
  const faqs = [
    { question: "How much does landscaping cost in Mooroolbark?", answer: "Landscaping costs in Mooroolbark vary. Colorbond typically costs $75-$120 per metre, timber $65-$140 per metre, and aluminium garden design $150-$300 per metre." },
    { question: "Do I need a permit for landscaping in Mooroolbark?", answer: "In Mooroolbark and the Yarra Ranges Council area, landscaping under 2 metres generally don't require a permit. Corner blocks or front yard landscapings may need approval." },
    { question: "What's the best type of landscaping for Mooroolbark properties?", answer: "Timber landscaping is popular in Mooroolbark due to the area's semi-rural character. Colorbond is also excellent for low maintenance." },
    { question: "How long does landscape installation take in Mooroolbark?", answer: "Most residential landscape installations take 1-3 days. Pool landscaping may take 2-4 days due to compliance requirements." },
    { question: "Are your Mooroolbark landscaping contractors licensed?", answer: "Yes, all landscaping contractors in our Mooroolbark network are fully licensed, insured, and verified for quality workmanship." },
    { question: "Can I get garden design installed in Mooroolbark?", answer: "Absolutely! Our contractors specialise in compliant garden design including frameless glass, semi-frameless glass, and aluminium options." },
    { question: "What warranty do Mooroolbark landscaping contractors offer?", answer: "Colorbond typically comes with 10-year warranty, timber 5-10 years, and workmanship warranties of 2-5 years." },
    { question: "Do you offer free quotes in Mooroolbark?", answer: "Yes! Getting quotes through QuoteMyLandscaping is completely free with no obligation." },
    { question: "Can you replace an existing landscape in Mooroolbark?", answer: "Yes, our contractors handle landscaping replacements including old landscape removal and disposal." },
    { question: "What areas around Mooroolbark do you service?", answer: "Our network covers Mooroolbark and surrounding suburbs including Lilydale, Kilsyth, Croydon, Chirnside Park, and throughout Yarra Ranges." },
    { question: "How do I prepare for landscape installation in Mooroolbark?", answer: "Mark your property boundaries, clear vegetation along the landscape line, and ensure access for materials." },
    { question: "What colours are available for garden landscaping?", answer: "22 standard colours including Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Mooroolbark landscapers work on weekends?", answer: "Some contractors offer weekend installations. Availability will be confirmed when you receive your quotes." },
    { question: "Can I get a landscape on a sloped block in Mooroolbark?", answer: "Yes! Our contractors are skilled in stepped and raked landscaping solutions for sloped terrain." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mooroolbark Landscaping FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about landscaping services in Mooroolbark.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MooroolbarkFAQSection;

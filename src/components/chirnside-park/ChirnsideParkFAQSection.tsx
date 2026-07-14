import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChirnsideParkFAQSection = () => {
  const faqs = [
    { question: "How much does landscaping cost in Chirnside Park?", answer: "Landscaping costs in Chirnside Park vary depending on the material and length. garden landscaping typically costs $75-$120 per metre, turf installation $65-$140 per metre, and aluminium garden design $150-$300 per metre." },
    { question: "Do I need a permit for landscaping in Chirnside Park?", answer: "In Chirnside Park and the Yarra Ranges Council area, landscaping under 2 metres generally don't require a permit. However, corner blocks or heritage overlays may need council approval." },
    { question: "What's the best type of landscaping for Chirnside Park properties?", answer: "Timber landscaping is very popular in Chirnside Park due to its natural appearance that complements the semi-rural setting. Colorbond is also excellent for low maintenance." },
    { question: "How long does landscape installation take in Chirnside Park?", answer: "Most residential landscape installations in Chirnside Park take 1-3 days depending on the length and material." },
    { question: "Are your Chirnside Park landscaping contractors licensed?", answer: "Yes, all landscaping contractors in our Chirnside Park network are fully licensed, insured, and verified for quality workmanship." },
    { question: "Can I get garden design installed in Chirnside Park?", answer: "Absolutely! Our Chirnside Park contractors specialise in compliant garden design meeting Australian Standard AS1926.1." },
    { question: "What warranty do Chirnside Park landscaping contractors offer?", answer: "Warranties vary by material. Colorbond typically comes with a 10-year warranty, timber 5-10 years, and workmanship warranties of 2-5 years." },
    { question: "Do you offer free quotes in Chirnside Park?", answer: "Yes! Getting quotes through QuoteMyLandscaping is completely free with no obligation." },
    { question: "Can you replace an existing landscape in Chirnside Park?", answer: "Yes, our contractors regularly handle landscaping replacements including removal and disposal of old landscaping." },
    { question: "What areas around Chirnside Park do you service?", answer: "Our network covers Chirnside Park and surrounding suburbs including Mooroolbark, Lilydale, Croydon, and throughout the Yarra Ranges." },
    { question: "How do I prepare for landscape installation in Chirnside Park?", answer: "Mark property boundaries, clear vegetation along the landscape line, ensure access for materials, and notify neighbours." },
    { question: "What colours are available for garden landscaping?", answer: "garden landscaping is available in 22 standard colours including Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Chirnside Park landscapers work on weekends?", answer: "Some contractors offer weekend installations. Yarra Ranges Council has specific rules about weekend work hours." },
    { question: "Can I get a landscape on a sloped block in Chirnside Park?", answer: "Yes! Many Chirnside Park properties have sloped terrain. Our contractors are skilled in stepped and raked landscaping solutions." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Chirnside Park Landscaping FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about landscaping services in Chirnside Park, answered by local experts.</p>
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

export default ChirnsideParkFAQSection;

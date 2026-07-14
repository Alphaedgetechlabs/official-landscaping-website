import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HamptonParkFAQSection = () => {
  const faqs = [
    { question: "How much does landscaping cost in Hampton Park?", answer: "Landscaping costs in Hampton Park vary depending on the material and length. garden landscaping typically costs $75-$120 per metre, turf installation $65-$140 per metre, and aluminium garden design $150-$300 per metre." },
    { question: "Do I need a permit for landscaping in Hampton Park?", answer: "In Hampton Park and the Casey Council area, landscaping under 2 metres generally don't require a permit. However, corner blocks or front yard landscapings may need council approval." },
    { question: "What's the best type of landscaping for Hampton Park properties?", answer: "garden landscaping is extremely popular in Hampton Park's newer housing estates due to its durability and modern appearance. It's ideal for new builds and offers excellent privacy." },
    { question: "How long does landscape installation take in Hampton Park?", answer: "Most residential landscape installations in Hampton Park take 1-3 days depending on the length and material. Pool landscaping may take 2-4 days due to compliance requirements." },
    { question: "Are your Hampton Park landscaping contractors licensed?", answer: "Yes, all landscaping contractors in our Hampton Park network are fully licensed, insured, and have been verified for quality workmanship." },
    { question: "Can I get garden design installed in Hampton Park?", answer: "Absolutely! Our Hampton Park contractors specialise in compliant garden design including frameless glass, semi-frameless glass, and aluminium options." },
    { question: "What warranty do Hampton Park landscaping contractors offer?", answer: "Warranties vary by material. garden landscaping typically comes with a 10-year warranty, turf installation 5-10 years, and workmanship warranties of 2-5 years." },
    { question: "Do you offer free quotes in Hampton Park?", answer: "Yes! Getting quotes through QuoteMyLandscaping is completely free with no obligation." },
    { question: "Can you replace an existing landscape in Hampton Park?", answer: "Yes, our Hampton Park contractors regularly handle landscaping replacements including old landscape removal and disposal." },
    { question: "What areas around Hampton Park do you service?", answer: "Our landscaping network covers Hampton Park and all surrounding suburbs including Narre Warren, Lynbrook, Hallam, Endeavour Hills, and throughout the Casey council area." },
    { question: "How do I prepare for landscape installation in Hampton Park?", answer: "Mark your property boundaries, clear vegetation along the landscape line, ensure access for materials, and notify neighbours if working near shared boundaries." },
    { question: "What colours are available for garden landscaping in Hampton Park?", answer: "garden landscaping is available in 22 standard colours including Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Hampton Park landscapers work on weekends?", answer: "Some Hampton Park landscaping contractors offer weekend installations. Weekend availability will be confirmed when you receive your quotes." },
    { question: "Do you service new housing estates in Hampton Park?", answer: "Yes! Our contractors are experienced with new housing developments throughout Hampton Park and can work with new build timelines." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hampton Park Landscaping FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about landscaping services in Hampton Park, answered by local experts.</p>
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

export default HamptonParkFAQSection;

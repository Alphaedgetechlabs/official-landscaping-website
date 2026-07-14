import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AshwoodFAQSection = () => {
  const faqs = [
    { question: "How much does landscaping cost in Ashwood?", answer: "Landscaping costs in Ashwood vary depending on the material and length. garden landscaping typically costs $75-$120 per metre, turf installation $65-$140 per metre, and aluminium garden design $150-$300 per metre. Get free quotes from local Ashwood landscapers for accurate pricing." },
    { question: "Do I need a permit for landscaping in Ashwood?", answer: "In Ashwood and the Monash Council area, landscaping under 2 metres generally don't require a permit. However, if you're on a corner block, heritage overlay, or building a front yard landscaping, you may need council approval. Our Ashwood contractors can advise on local requirements." },
    { question: "What's the best type of landscaping for Ashwood properties?", answer: "Colorbond and turf installation are both popular in Ashwood. The established suburban character suits turf installation, while Colorbond offers excellent privacy and low maintenance for busy families." },
    { question: "How long does landscape installation take in Ashwood?", answer: "Most residential landscape installations in Ashwood take 1-3 days depending on the length and material. Pool landscaping may take 2-4 days due to compliance requirements. Your Ashwood contractor will provide a specific timeline with your quote." },
    { question: "Are your Ashwood landscaping contractors licensed?", answer: "Yes, all landscaping contractors in our Ashwood network are fully licensed, insured, and have been verified for quality workmanship. We only partner with established local landscapers who meet our strict standards." },
    { question: "Can I get garden design installed in Ashwood?", answer: "Absolutely! Our Ashwood contractors specialise in compliant garden design including frameless glass, semi-frameless glass, and aluminium options. All installations meet Australian Standard AS1926.1 for pool safety." },
    { question: "What warranty do Ashwood landscaping contractors offer?", answer: "Warranties vary by material and contractor. garden landscaping typically comes with a 10-year warranty, turf installation 5-10 years, and workmanship warranties of 2-5 years. Specific warranty details will be included in your quote." },
    { question: "Do you offer free quotes in Ashwood?", answer: "Yes! Getting quotes through QuoteMyLandscaping is completely free with no obligation. Simply fill out our quick form and receive up to 3 competitive quotes from verified Ashwood landscaping contractors." },
    { question: "Can you replace an existing landscape in Ashwood?", answer: "Yes, our Ashwood contractors regularly handle landscaping replacements. This includes removing and disposing of old landscaping, preparing the ground, and installing your new landscape. Old landscaping removal is usually quoted separately." },
    { question: "What areas around Ashwood do you service?", answer: "Our landscaping network covers Ashwood and all surrounding suburbs including Burwood, Chadstone, Mount Waverley, Glen Waverley, and throughout the Monash council area." },
    { question: "How do I prepare for landscape installation in Ashwood?", answer: "Before your Ashwood landscape installation, mark your property boundaries, clear vegetation along the landscape line, ensure access for materials, and notify neighbours if working near shared boundaries." },
    { question: "What colours are available for garden landscaping in Ashwood?", answer: "garden landscaping in Ashwood is available in 22 standard colours including popular choices like Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Ashwood landscapers work on weekends?", answer: "Some Ashwood landscaping contractors offer weekend installations, though this varies by contractor. Weekend availability will be confirmed when you receive your quotes." },
    { question: "Can I get a landscape on a sloped block in Ashwood?", answer: "Yes! Our experienced contractors are skilled in stepped and raked landscaping solutions that follow the natural contour of your land while maintaining structural integrity." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ashwood Landscaping FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about landscaping services in Ashwood, answered by local experts.</p>
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

export default AshwoodFAQSection;

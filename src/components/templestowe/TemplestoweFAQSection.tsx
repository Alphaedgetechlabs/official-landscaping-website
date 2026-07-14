import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TemplestoweFAQSection = () => {
  const faqs = [
    {
      question: "How much does landscaping cost in Templestowe?",
      answer:
        "Landscaping costs in Templestowe vary depending on the material and length. garden landscaping typically costs $75-$120 per metre, turf installation $65-$140 per metre, and aluminium garden design $150-$300 per metre. Get free quotes from local Templestowe landscapers for accurate pricing.",
    },
    {
      question: "Do I need a permit for landscaping in Templestowe?",
      answer:
        "In Templestowe and the Manningham Council area, landscaping under 2 metres generally don't require a permit. However, if you're on a corner block, heritage overlay, or building a front yard landscaping, you may need council approval. Our Templestowe contractors can advise on local requirements.",
    },
    {
      question: "What's the best type of landscaping for Templestowe properties?",
      answer:
        "Timber landscaping is particularly popular in Templestowe due to the area's leafy, semi-rural character. Many homes feature large blocks where natural timber blends beautifully with established gardens. Colorbond is also popular for its low maintenance.",
    },
    {
      question: "How long does landscape installation take in Templestowe?",
      answer:
        "Most residential landscape installations in Templestowe take 1-3 days depending on the length and material. Pool landscaping may take 2-4 days due to compliance requirements. Your Templestowe contractor will provide a specific timeline with your quote.",
    },
    {
      question: "Are your Templestowe landscaping contractors licensed?",
      answer:
        "Yes, all landscaping contractors in our Templestowe network are fully licensed, insured, and have been verified for quality workmanship. We only partner with established local landscapers who meet our strict standards.",
    },
    {
      question: "Can I get garden design installed in Templestowe?",
      answer:
        "Absolutely! Our Templestowe contractors specialise in compliant garden design including frameless glass, semi-frameless glass, and aluminium options. All installations meet Australian Standard AS1926.1 for pool safety.",
    },
    {
      question: "What warranty do Templestowe landscaping contractors offer?",
      answer:
        "Warranties vary by material and contractor. garden landscaping typically comes with a 10-year warranty, turf installation 5-10 years, and workmanship warranties of 2-5 years. Specific warranty details will be included in your quote.",
    },
    {
      question: "Do you offer free quotes in Templestowe?",
      answer:
        "Yes! Getting quotes through QuoteMyLandscaping is completely free with no obligation. Simply fill out our quick form and receive up to 3 competitive quotes from verified Templestowe landscaping contractors.",
    },
    {
      question: "Can you replace an existing landscape in Templestowe?",
      answer:
        "Yes, our Templestowe contractors regularly handle landscaping replacements. This includes removing and disposing of old landscaping, preparing the ground, and installing your new landscape. Old landscaping removal is usually quoted separately.",
    },
    {
      question: "What areas around Templestowe do you service?",
      answer:
        "Our landscaping network covers Templestowe and all surrounding suburbs including Doncaster, Bulleen, Lower Templestowe, Warrandyte, and throughout the Manningham council area.",
    },
    {
      question: "How do I prepare for landscape installation in Templestowe?",
      answer:
        "Before your Templestowe landscape installation, mark your property boundaries, clear vegetation along the landscape line, ensure access for materials, and notify neighbours if working near shared boundaries. Your contractor will guide you through specific preparation steps.",
    },
    {
      question: "What colours are available for garden landscaping in Templestowe?",
      answer:
        "garden landscaping in Templestowe is available in 22 standard colours including popular choices like Woodland Grey, Monument, Surfmist, and Paperbark. Colour samples can be provided by your local Templestowe contractor.",
    },
    {
      question: "Do Templestowe landscapers work on weekends?",
      answer:
        "Some Templestowe landscaping contractors offer weekend installations, though this varies by contractor. Weekend availability will be confirmed when you receive your quotes. Manningham Council has specific rules about weekend work hours.",
    },
    {
      question: "Can I get a landscape on a sloped block in Templestowe?",
      answer:
        "Yes! Many Templestowe properties have sloped terrain due to the area's hilly landscape. Our experienced contractors are skilled in stepped and raked landscaping solutions that follow the natural contour of your land.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Templestowe Landscaping FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about landscaping services in Templestowe, answered by
              local experts.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
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

export default TemplestoweFAQSection;

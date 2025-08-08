import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What does a crypto support agent do?",
    answer:
      "A crypto support agent assists users with a wide range of issues related to cryptocurrency. This includes troubleshooting wallet problems, guiding users through transaction processes, providing security advice, helping with account recovery, and investigating potential fraud or scams.",
  },
  {
    question: "Can you help me recover my lost funds or assets?",
    answer:
      "While we cannot guarantee recovery in all cases, especially if funds are stolen, we specialize in forensic analysis and investigation to trace transactions and identify potential recovery paths. We can guide you through the process of reporting to authorities and interacting with exchanges.",
  },
  {
    question: "How do you ensure the security of my personal information?",
    answer:
      "Security is our top priority. We never ask for your private keys or seed phrases. All communication is encrypted, and we adhere to strict data protection protocols. Our goal is to empower you to regain control of your assets, not to take control of them.",
  },
  {
    question: "What are your service fees?",
    answer:
      "Our fees vary depending on the complexity and scope of the required service. We offer an initial consultation to assess your situation and provide a transparent quote before any work begins. We believe in clear, upfront pricing with no hidden charges.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-headline">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our services.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  <span className="flex items-center">
                    <HelpCircle className="mr-3 h-5 w-5 text-primary" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

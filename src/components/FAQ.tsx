// File: src/components/FAQ.tsx
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is WonderSri?",
      answer:
        "WonderSri is your virtual tour guide, helping you explore Sri Lanka with real-time insights, navigation and most importantly, safety.",
    },
    {
      question: "Is WonderSri free to use?",
      answer:
        "Yes, WonderSri is free to use for all enthusiatic travellers! Enjoy all features without any subscription fees.",
    },
    {
      question: "How does WonderSri ensure my safety?",
      answer:
        "WonderSri provides real-time alerts and safety tips to ensure a safe travel experience.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

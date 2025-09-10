import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What do you guys do?",
      answer:
        "We build websites, apps, and digital products that are smart, stylish, and built to wow.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Depends on the size — a website might take weeks, a custom app a few months. Either way, we keep it fast, clear, and on-time.",
    },
    {
      question: "Do you work with startups or only big companies?",
      answer:
        "Both! From garage ideas to global brands — we help everyone shine online.",
    },
    {
      question: "Can you fix or redesign my old site/app?",
      answer:
        "Oh yes. We love turning clunky, outdated designs into fresh, modern experiences.",
    },
    {
      question: "Why should I pick Navi Infotech?",
      answer:
        "Because we mix creativity, clean code, and bold ideas to build digital solutions that stand out.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[neu]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - "Frequently Asked" Text */}
          <div className="flex items-start justify-start">
            <div className="sticky top-16">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
                <span className="block text-gray-400">Frequently</span>
                <span className="block text-white">Asked</span>
              </h1>
              <div className="w-16 h-1 bg-blue-500 mt-6"></div>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-black rounded-lg bg-black backdrop-blur-sm transition-all duration-200 hover:border-gray-600"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg transition-colors"
                >
                  <span className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                  )}
                </button>

                {openItems.has(index) && (
                  <div className="px-6 pb-5 animate-in slide-in-from-top-2 duration-200">
                    <div className="border-t border-black pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

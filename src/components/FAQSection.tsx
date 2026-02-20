"use client";

import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

export default function FAQSection({ title, items }: FAQSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          <span className="gradient-text">{title}</span>
        </h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow glass-card rounded-xl"
            >
              <input type="radio" name={`faq-${title}`} />
              <div className="collapse-title font-medium text-white/90 flex items-center gap-2">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-white/60 leading-relaxed pt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

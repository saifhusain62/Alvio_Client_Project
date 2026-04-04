import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#FF7E28] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital marketing. Our team specializes in creating custom solutions tailored to your specific business needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the initial consultation.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular client check-ins. Our process includes discovery, design, development, testing, and deployment phases. You will be involved throughout the entire process.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer various support and maintenance packages to ensure your website or application continues to run smoothly. This includes updates, security patches, bug fixes, and feature enhancements.'
    },
    {
      question: 'How much does a project cost?',
      answer: 'Project costs vary based on requirements, complexity, and timeline. We provide custom quotes after understanding your specific needs. Contact us for a free consultation and detailed estimate.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We are experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflow. We can work as an extension of your team or independently, based on your preference.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#FF7E28]">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-[#FF7E28] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8">We're here to help! Get in touch with our team.</p>
          <button className="bg-white text-[#FF7E28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
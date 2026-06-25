"use client";

import React, { useState } from 'react';

const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const MinusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const faqs = [
    {
        question: "What is Proftly?",
        answer: "Proftly is an innovative platform that simplifies investing by connecting you with expert guidance and providing an intuitive interface to manage your portfolio."
    },
    {
        question: "Can I change my advisor anytime?",
        answer: "Yes, you have full control over your portfolio and can switch advisors at any time to better align with your investment goals."
    },
    {
        question: "Who are the advisors on Proftly?",
        answer: "Advisors are experienced professionals with strong knowledge of stock markets and investment strategies."
    },
    {
        question: "Can I follow multiple advisors at once?",
        answer: "Absolutely. You can diversify your strategy by following multiple advisors and combining their insights."
    },
    {
        question: "Is Proftly suitable for long-term investing?",
        answer: "Yes, our platform and expert advisors cater to both short-term trading and long-term wealth building."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number>(2); // 3rd item open by default

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faqs" className="w-full bg-[#f4f4f4] py-12 px-4 md:px-8 lg:px-12 flex justify-center">
            <div className="w-full max-w-[1500px] flex flex-col md:flex-row gap-8 lg:gap-12">
                
                {/* Left Side */}
                <div className="w-full md:w-[40%] flex flex-col items-start">
                    <div className="bg-[#e4eff0] text-[#1b4344] px-6 py-1.5 rounded-full font-bold text-[13px] mb-6 tracking-wide">
                        FAQs
                    </div>
                    <h2 className="text-4xl md:text-[44px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                        Frequently asked<br/>questions.
                    </h2>
                    
                    {/* Decorative Arrow */}
                    <div className="mt-6 ml-12 hidden md:block opacity-90">
                        <svg width="130" height="160" viewBox="0 0 130 160" fill="none" stroke="#1c4b4d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M 70 10 C 10 50, 20 110, 60 100 C 100 90, 90 40, 50 60 C 10 80, 20 150, 110 150" />
                            <path d="M 95 135 L 110 150 L 90 155" />
                        </svg>
                    </div>
                </div>

                {/* Right Side - Accordion */}
                <div className="w-full md:w-[60%] flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className="bg-[#fcfdfd] border border-gray-200/80 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <h3 className="font-bold text-gray-900 text-[16px] pr-8">{faq.question}</h3>
                                    <div className="text-gray-900 flex-shrink-0">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </div>
                                </div>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 text-gray-500 text-[14px] leading-relaxed pt-0">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Faq;

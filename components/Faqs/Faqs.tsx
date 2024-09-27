"use client";
import React, { useState } from 'react';

const faqs = [
  {
    question: "Can a dispatcher improve my company's performance?",
    answer: "Absolutely! A dispatcher can enhance your company's performance by efficiently securing loads, negotiating favorable rates, planning optimal routes, and managing paperwork. This allows you to concentrate on driving and boosting your profits."
  },
  {
    question: "How do dispatchers find loads?",
    answer: "Dispatchers utilize a variety of methods to find loads, including load boards, industry contacts, freight brokers, and direct relationships with shippers to uncover the best opportunities for their clients."
  },
  {
    question: "What does a freight dispatch service cost?",
    answer: "Our dispatch service charges a fee starting at 5% of the gross load value. The exact cost varies based on the specific services provided and the agreements in place."
  },
  {
    question: "What additional support services do you offer to owner-operators?",
    answer: (
      <ul>
        <li><strong>Trip planning and route optimization:</strong> We help you create efficient routes that minimize deadhead miles and fuel expenses, maximizing your time on the road.</li>
        <li><strong>24/7 communication and support:</strong> Our dedicated dispatchers are always available to assist you with any questions or issues while on the road.</li>
        <li><strong>Negotiation expertise:</strong> We work to secure the best rates for your loads, ensuring you increase your profits on every haul.</li>
        <li><strong>Truck stop and weigh station information:</strong> Receive real-time updates on rest areas, fuel prices, and weigh station locations to keep you compliant and on schedule.</li>
        <li><strong>Paperwork and settlement assistance:</strong> We guide you through the paperwork process, allowing you to focus on driving.</li>
      </ul>
    )
  },
  {
    question: "What types of loads does your dispatch service specialize in?",
    answer: "We handle a diverse range of loads, with particular expertise in:\n - Dry vans (general freight)\n - Refrigerated trailers (temperature-controlled goods)\n - Flatbeds (oversized cargo or construction materials)\n - Expedited loads (time-sensitive deliveries)\n - LTL (less-than-truckload) shipments."
  },
  {
    question: "How many trucks does a dispatcher manage?",
    answer: "A dispatcher typically manages anywhere from a few trucks to several dozen, depending on the size of the dispatching company and the complexity of their operations."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative text-center my-8 bg-black text-white mt-20" id='faqs'>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-pink-600 "></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg w-full md:w-auto">
        <div className="space-y-4 text-black border border-gray-300">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-4 text-left text-sm md:text-xl lg:text-xl sm:text font-semibold bg-white hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none"
              >
                {/* Quora Q Icon */}
                <span className="flex items-center ">
                  <span className="bg-pink-600  text-white rounded-full min-w-7 min-h-7 flex justify-center items-center mr-2 font-bold text-lg">
                    Q
                  </span>


                  {faq.question}
                </span>
                <span className={`text-pink-700 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">
                  {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const items = [
    {
      title: 'Is it Full Digital Marketing Agency?',
      content: 'Content for digital marketing agency section',
    },
    {
      title: 'How to Create my Project in Agency?',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem Ipsum is that it has as more less or randomised words which don't look even slightly believable, if you are going to use a passage of Lorem Ipsum, you need to be sure.",
    },
    {
      title: 'How to Work in Process of Digital Agency?',
      content: 'Content for digital agency process section',
    },
    {
      title: 'How to join your referral program?',
      content: 'Content for referral program section',
    },
    {
      title: 'Human centered design to challenges?',
      content: 'Content for human centered design section',
    },
    {
      title: 'Bring their individual experience and creative?',
      content: 'Content for individual experience section',
    },
  ];

  return (
    <div
      className="w-full max-w-2xl mx-auto space-y-2"
      style={{ fontFamily: 'Nunito, sans-serif' }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden bg-white shadow-2xl"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <span className="font-bold text-2xl text-gray-900">{item.title}</span>
            {openIndex === index ? (
              <AiOutlineMinus className="h-5 w-5 text-blue-500" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-blue-500" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
              openIndex === index ? 'py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

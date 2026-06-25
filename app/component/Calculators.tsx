import React from 'react';
import Image from 'next/image';

const calculatorsData = [
  {
    title: 'Financial Health',
    description: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum.',
    iconSrc: '/images/C1.png', // Replace with your actual icon path
  },
  {
    title: 'Goal Base Calculator',
    description: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum.',
    iconSrc: '/images/C2.png', // Replace with your actual icon path
  },
  {
    title: 'SIP Calculator',
    description: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum.',
    iconSrc: '/images/C3.png', // Replace with your actual icon path
  },
];

const Calculators = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12 flex flex-col items-center">
      {/* Pill */}
      <div className="bg-[#D6E1E2] text-[#1b4344] px-6 py-1.5 rounded-full text-sm font-bold mb-4">
        Calculators
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#1f2937] mb-12">
        Top Three Calculators
      </h2>

      {/* Cards Grid */}
      <div className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-3 gap-8">
        {calculatorsData.map((calc, index) => (
          <div 
            key={index} 
            className="bg-[#EAEEEE] rounded-[2rem] p-10 md:p-12 flex flex-col items-center text-center transition-all hover:shadow-lg"
          >
            {/* Icon */}
            <div className="w-[100px] h-[100px] relative mb-6">
                <Image 
                  src={calc.iconSrc} 
                  alt={calc.title} 
                  fill 
                  className="object-contain" 
                />
            </div>

            {/* Text Content */}
            <h3 className="text-xl md:text-[1.35rem] font-bold text-[#1f2937] mb-3">
              {calc.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
              {calc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calculators;

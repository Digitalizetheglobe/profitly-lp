import React from 'react';

const HowItWorks = () => {
  return (
    <section className="w-[95%] max-w-[1500px] py-5 flex flex-col items-center">
      {/* Header section */}
      <div className="flex flex-col items-center mb-16">
        <span className="bg-[#e2ebeb] text-[#1a3b3a] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          How it Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
          How it Works?
        </h2>
      </div>

      {/* Timeline section */}
      <div className="relative w-[95%] max-w-[1500px] mt-8 ">
        
        {/* Step 1 */}
        <div className="relative mb-24 md:mb-32">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold text-[#1a2b2b] mb-3 flex items-center gap-3">
              <span className="text-[#205255]">#1</span> Create Account
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm ml-[3.5rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Connector Line 1 to 2 */}
          <div className="hidden md:block absolute top-8 left-[1rem] w-[calc(58%-2rem)] h-[calc(100%+2rem)] border-l border-b border-dashed border-[#b0c4c4]"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex justify-end mb-24 md:mb-32">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold text-[#1a2b2b] mb-3 flex items-center gap-3">
              <span className="text-[#205255]">#2</span> Follow Expert Advisors
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm ml-[3.5rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Connector Line 2 to 3 */}
          <div className="hidden md:block absolute top-8 right-[calc(45%-1.5rem)] w-[55%] h-[calc(100%+2rem)] border-r border-b border-dashed border-[#b0c4c4]"></div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="w-full md:w-[45%]">
            <h3 className="text-2xl font-bold text-[#1a2b2b] mb-3 flex items-center gap-3">
              <span className="text-[#205255]">#3</span> Invest Based on Their Guidance
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm ml-[3.5rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        {/* Mobile vertical line */}
        <div className="absolute top-8 left-[2.5rem] h-[calc(100%-4rem)] border-l border-dashed border-[#b0c4c4] md:hidden"></div>
      </div>
    </section>
  );
};

export default HowItWorks;

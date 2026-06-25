import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#f4f4f4] py-12 flex flex-col items-center">
      {/* Header section */}
      <div className="flex flex-col items-center mb-20">
        <span className="bg-[#dce9e9] text-[#245f61] px-5 py-2 rounded-full text-sm font-semibold mb-6">
          How it Work
        </span>
        <h2 className="text-4xl md:text-[42px] font-bold text-[#162727]">
          How it Works?
        </h2>
      </div>

      {/* Timeline section */}
      <div className="relative w-[95%] max-w-[1500px] mx-auto mt-4">
        
        {/* Step 1 */}
        <div className="relative mb-16 md:mb-24">
          <div className="w-full md:w-[45%] relative z-10">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#162727] mb-3 flex items-center">
              <span className="text-[#245f61] w-10">#1</span> Create Account
            </h3>
            <p className="text-[#6a7c7c] leading-[1.7] text-[15px] ml-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Connector Line 1 to 2 */}
          <div className="hidden md:block absolute top-[2rem] left-[0.5rem] w-[55%] h-[calc(100%+1rem)] border-l-2 border-b-2 border-dashed border-[#b6c6c6]"></div>
        </div>

        {/* Step 2 */}
        <div className="relative mb-16 md:mb-24 flex md:justify-end">
          <div className="w-full md:w-[45%] relative z-10">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#162727] mb-3 flex items-center">
              <span className="text-[#245f61] w-10">#2</span> Follow Expert Advisors
            </h3>
            <p className="text-[#6a7c7c] leading-[1.7] text-[15px] ml-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Connector Line 2 to 3 */}
          <div className="hidden md:block absolute top-[-3rem] right-[calc(45%-0.5rem)] w-[55%] h-[calc(100%+6rem)] border-r-2 border-b-2 border-dashed border-[#b6c6c6]"></div>
        </div>

        {/* Step 3 */}
        <div className="relative mb-10">
          <div className="w-full md:w-[45%] relative z-10">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#162727] mb-3 flex items-center">
              <span className="text-[#245f61] w-10">#3</span> Invest Based on Their Guidance
            </h3>
            <p className="text-[#6a7c7c] leading-[1.7] text-[15px] ml-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          {/* Connector Line 3 vertical part */}
          <div className="hidden md:block absolute top-[-3rem] left-[0.5rem] w-0 h-[4rem] border-l-2 border-dashed border-[#b6c6c6]"></div>
        </div>

        {/* Mobile vertical line */}
        <div className="absolute top-[2rem] left-[0.5rem] h-[calc(100%-4rem)] border-l-2 border-dashed border-[#b6c6c6] md:hidden"></div>
      </div>
    </section>
  );
};

export default HowItWorks;

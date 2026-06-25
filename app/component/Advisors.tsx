import Image from 'next/image';
import React from 'react';

const Advisors = () => {
  return (
    <section id="advisors" className="w-full bg-[#e8efef] py-20 flex flex-col items-center overflow-hidden">
      <style>{`
        @keyframes radar {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-radar { animation: radar 3s cubic-bezier(0.0, 0, 0.2, 1) infinite; }
        .delay-1 { animation-delay: 0s; }
        .delay-2 { animation-delay: 1.5s; }
        .delay-3 { animation-delay: 0.75s; }
        .delay-4 { animation-delay: 2.25s; }
      `}</style>
      {/* Header section */}
      <div className="flex flex-col items-center mb-10 md:mb-16">
        <span className="bg-[#cbdce0] text-[#1d4648] px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm hover:bg-[#245f61] hover:text-white transition-colors duration-300 cursor-pointer">
          Advisors
        </span>
        <h2 className="text-4xl md:text-[42px] font-bold text-[#191919]">
          Meet Our Top Advisors
        </h2>
      </div>

      {/* Grid Area */}
      <div className="relative w-full max-w-[1400px] mx-auto h-auto md:h-[450px] mt-4 md:mt-10">
        
        {/* The Horizontal Banner for Desktop (bleeds off the left edge) */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[-50vw] right-[5%] h-[100px] bg-[#245f61] rounded-r-[80px] z-0 shadow-md"></div>

        {/* Desktop Layout (4 Columns) */}
        <div className="relative z-10 w-full h-full hidden md:flex px-4 lg:px-8">
          
          {/* Column 1 */}
          <div className="relative w-1/4 h-full group cursor-pointer">
            <div className="absolute -top-6 left-[30%] -translate-x-1/2 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]">
              <div className="absolute inset-0 bg-[#245f61] rounded-full animate-radar delay-1 -z-10"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#e8efef] shadow-lg group-hover:border-[#245f61] transition-colors duration-500 z-10">
                <Image src="/images/A1.png" alt="Rajesh Kumar" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg lg:text-xl whitespace-nowrap group-hover:text-gray-200 transition-colors duration-300">
              Commodity Market
            </div>
            <div className="absolute top-[calc(50%+50px)] left-[30%] -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1.5px] h-[60px] bg-[#1a1a1a] group-hover:bg-[#245f61] transition-colors duration-500 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1a1a1a] group-hover:border-t-[#245f61] transition-colors duration-500"></div>
              </div>
              <div className="mt-4 text-center group-hover:translate-y-1 transition-transform duration-500">
                <h4 className="font-bold text-lg lg:text-[22px] text-[#1a1a1a] group-hover:text-[#245f61] transition-colors duration-300">Rajesh kumar</h4>
                <p className="text-[13px] lg:text-sm text-[#1a1a1a] font-bold mt-1">Experience: <span className="font-normal text-gray-600">5+ Years</span></p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative w-1/4 h-full group cursor-pointer">
            <div className="absolute bottom-[calc(50%+50px)] left-[30%] -translate-x-1/2 flex flex-col items-center">
              <div className="mb-4 text-center group-hover:-translate-y-1 transition-transform duration-500">
                <p className="text-[13px] lg:text-sm text-[#1a1a1a] font-bold mb-1">Experience: <span className="font-normal text-gray-600">5+ Years</span></p>
                <h4 className="font-bold text-lg lg:text-[22px] text-[#1a1a1a] group-hover:text-[#245f61] transition-colors duration-300">Rajesh kumar</h4>
              </div>
              <div className="w-[1.5px] h-[60px] bg-[#1a1a1a] group-hover:bg-[#245f61] transition-colors duration-500 relative">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#1a1a1a] group-hover:border-b-[#245f61] transition-colors duration-500"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg lg:text-xl whitespace-nowrap group-hover:text-gray-200 transition-colors duration-300">
              Commodity Market
            </div>
            <div className="absolute -bottom-6 left-[30%] -translate-x-1/2 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]">
              <div className="absolute inset-0 bg-[#245f61] rounded-full animate-radar delay-2 -z-10"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#e8efef] shadow-lg group-hover:border-[#245f61] transition-colors duration-500 z-10">
                <Image src="/images/A2.png" alt="Rajesh Kumar" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative w-1/4 h-full group cursor-pointer">
            <div className="absolute -top-6 left-[30%] -translate-x-1/2 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]">
              <div className="absolute inset-0 bg-[#245f61] rounded-full animate-radar delay-3 -z-10"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#e8efef] shadow-lg group-hover:border-[#245f61] transition-colors duration-500 z-10">
                <Image src="/images/A3.png" alt="Rajesh Kumar" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg lg:text-xl whitespace-nowrap group-hover:text-gray-200 transition-colors duration-300">
              Commodity Market
            </div>
            <div className="absolute top-[calc(50%+50px)] left-[30%] -translate-x-1/2 flex flex-col items-center">
              <div className="w-[1.5px] h-[60px] bg-[#1a1a1a] group-hover:bg-[#245f61] transition-colors duration-500 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1a1a1a] group-hover:border-t-[#245f61] transition-colors duration-500"></div>
              </div>
              <div className="mt-4 text-center group-hover:translate-y-1 transition-transform duration-500">
                <h4 className="font-bold text-lg lg:text-[22px] text-[#1a1a1a] group-hover:text-[#245f61] transition-colors duration-300">Rajesh kumar</h4>
                <p className="text-[13px] lg:text-sm text-[#1a1a1a] font-bold mt-1">Experience: <span className="font-normal text-gray-600">5+ Years</span></p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="relative w-1/4 h-full group cursor-pointer">
            <div className="absolute bottom-[calc(50%+50px)] left-[30%] -translate-x-1/2 flex flex-col items-center">
              <div className="mb-4 text-center group-hover:-translate-y-1 transition-transform duration-500">
                <p className="text-[13px] lg:text-sm text-[#1a1a1a] font-bold mb-1">Experience: <span className="font-normal text-gray-600">5+ Years</span></p>
                <h4 className="font-bold text-lg lg:text-[22px] text-[#1a1a1a] group-hover:text-[#245f61] transition-colors duration-300">Rajesh kumar</h4>
              </div>
              <div className="w-[1.5px] h-[60px] bg-[#1a1a1a] group-hover:bg-[#245f61] transition-colors duration-500 relative">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#1a1a1a] group-hover:border-b-[#245f61] transition-colors duration-500"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg lg:text-xl whitespace-nowrap group-hover:text-gray-200 transition-colors duration-300">
              Commodity Market
            </div>
            <div className="absolute -bottom-6 left-[30%] -translate-x-1/2 w-[180px] h-[180px] lg:w-[220px] lg:h-[220px]">
              <div className="absolute inset-0 bg-[#245f61] rounded-full animate-radar delay-4 -z-10"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#e8efef] shadow-lg group-hover:border-[#245f61] transition-colors duration-500 z-10">
                <Image src="/images/A4.png" alt="Rajesh Kumar" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Layout (Stacked Cards) */}
        <div className="w-full flex flex-col gap-8 px-6 md:hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center bg-white p-6 rounded-[30px] shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-24 bg-[#245f61]"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white mt-4 mb-4 shadow-sm">
                <Image src="/images/banner.png" alt="Rajesh Kumar" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-2xl text-[#1a1a1a]">Rajesh kumar</h4>
              <p className="text-sm text-[#1a1a1a] font-bold mt-1 mb-4">Experience: <span className="font-normal text-gray-600">5+ Years</span></p>
              <div className="bg-[#245f61] text-white px-6 py-2.5 rounded-full text-sm font-semibold w-full text-center">
                Commodity Market
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Advisors;

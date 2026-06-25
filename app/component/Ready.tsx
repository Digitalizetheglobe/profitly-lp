import React from 'react';
import Image from 'next/image';

const Ready = () => {
  return (
    <section className="w-full py-6 px-4 md:px-8 lg:px-12 flex justify-center mb-0">
      <div className="w-full max-w-[1500px] bg-[#20635e] rounded-[3rem] md:rounded-[4rem] flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        {/* Left Content */}
        <div className="flex flex-col z-10 w-full md:w-[45%] text-left px-8 lg:pl-20 py-10 md:py-16 lg:py-20">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white mb-6 md:mb-8 leading-[1.15]">
            Ready to <br /> Get Started?
          </h2>
          
          {/* Store Badges */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="relative w-[150px] h-[50px] md:w-[180px] md:h-[60px] cursor-pointer hover:scale-[1.02] transition-transform">
              {/* Replace with your actual App Store badge image */}
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">
                 <Image 
                   src="/images/Apple.png" 
                   alt="Download on the App Store" 
                   fill 
                   className="object-contain" 
                 />
              </div>
            </div>
            <div className="relative w-[150px] h-[50px] md:w-[180px] md:h-[60px] cursor-pointer hover:scale-[1.02] transition-transform">
              {/* Replace with your actual Google Play badge image */}
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center overflow-hidden">
                 <Image 
                   src="/images/Google.png" 
                   alt="Get it on Google Play" 
                   fill 
                   className="object-contain" 
                 />
              </div>
            </div>
          </div>

          {/* Download Button */}
          <button className="self-start px-8 py-3 md:py-4 cursor-pointer rounded-[2rem] border-2 border-white text-white font-medium hover:bg-white hover:text-[#20635e] transition-colors flex items-center gap-3">
            <span className="text-base md:text-lg">Download App</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-[45%] h-[400px] md:h-auto md:absolute md:right-10 lg:right-20 md:top-0 md:bottom-0 mt-8 md:mt-0 flex justify-end relative">
          <Image 
            src="/images/Ready.png" 
            alt="App Screens" 
            fill 
            className="object-contain object-bottom md:object-right" 
          />
        </div>
      </div>
    </section>
  );
};

export default Ready;

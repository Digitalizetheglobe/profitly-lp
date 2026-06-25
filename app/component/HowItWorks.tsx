import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#e8efef] flex flex-col relative overflow-hidden">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        .path-animate {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 2.5s ease-in-out forwards;
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.15); }
        }
        .pulse-glow-1 { animation: pulseGlow 4s ease-in-out infinite; }
        .pulse-glow-2 { animation: pulseGlow 4s ease-in-out infinite 1.3s; }
        .pulse-glow-3 { animation: pulseGlow 4s ease-in-out infinite 2.6s; }

        @keyframes fadeInOpacity {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .node-enter-1 { animation: fadeInOpacity 0.8s ease-out 0.5s forwards; opacity: 0; }
        .node-enter-2 { animation: fadeInOpacity 0.8s ease-out 1.2s forwards; opacity: 0; }
        .node-enter-3 { animation: fadeInOpacity 0.8s ease-out 1.9s forwards; opacity: 0; }
      `}</style>
      <div className="relative w-full max-w-[1500px] mx-auto pt-8 md:pt-12 px-4 md:px-8">
        
        {/* Header section (kept as structure container) */}
        <div className="flex flex-col items-center mb-2 md:mb-4 text-center relative z-10">
          <div className="bg-[#cbdce0] text-[#1d4648] px-6 py-1.5 rounded-full font-bold text-[13px] mb-5 tracking-wide shadow-sm hover:bg-[#245f61] hover:text-white transition-colors duration-300 cursor-pointer">
            profitly
          </div>
          <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 tracking-tight">
            How it Works
          </h2>
        </div>

        {/* Timeline wrapper - horizontally scrollable on small screens to preserve exact design */}
        <div className="w-full overflow-x-auto overflow-y-hidden md:overflow-visible pb-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="relative w-[1000px] md:w-full min-w-[1000px] mx-auto h-[500px]">
            
            {/* SVG Background Curves */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
              {/* Secondary gray line - precisely translated to match the shadow effect in the image */}
              <path transform="translate(8, 16)" d="M -50 300 C 50 300, 100 350, 200 350 C 350 350, 400 150, 500 150 C 600 150, 700 280, 800 280 C 900 280, 950 200, 1050 200" fill="none" stroke="#e3e8eb" strokeWidth="4" />
              {/* Primary main line */}
              <path className="path-animate" pathLength="1" d="M -50 300 C 50 300, 100 350, 200 350 C 350 350, 400 150, 500 150 C 600 150, 700 280, 800 280 C 900 280, 950 200, 1050 200" fill="none" stroke="#245F61" strokeWidth="3" />
            </svg>

            {/* Node 1 */}
            <div className="absolute group node-enter-1" style={{ left: '20%', top: '70%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                {/* Glow shadow */}
                <div className="absolute top-[60%] left-1/2 w-[50px] h-[50px] bg-[#245F61] rounded-full blur-[14px] pulse-glow-1"></div>
                {/* Flat-top Hexagon */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-sm" viewBox="0 0 60 60">
                  <polygon points="15,4 45,4 60,30 45,56 15,56 0,30" fill="white" />
                </svg>
                {/* Flag icon */}
                <svg className="w-7 h-7 relative z-10 text-[#245F61]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
                </svg>
              </div>

              {/* Text above node */}
              <div className="absolute bottom-[calc(100%+85px)] left-1/2 -translate-x-[65%] w-[240px] group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute right-[-40px] top-[-80px] text-[200px] font-bold text-[#d0dbde] -z-10 leading-none select-none tracking-tighter transition-all duration-300 group-hover:text-[#c2d1d4]">1</div>
                <h3 className="text-[19px] font-bold text-gray-900 mb-3 leading-tight">Create Account</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Far far away, behind mountains, far from the countries Vokalia.
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="absolute group node-enter-2" style={{ left: '50%', top: '30%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                {/* Glow shadow */}
                <div className="absolute top-[60%] left-1/2 w-[50px] h-[50px] bg-[#245F61] rounded-full blur-[14px] pulse-glow-2"></div>
                {/* Flat-top Hexagon */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-sm" viewBox="0 0 60 60">
                  <polygon points="15,4 45,4 60,30 45,56 15,56 0,30" fill="white" />
                </svg>
                {/* Bar chart icon */}
                <svg className="w-7 h-7 relative z-10 text-[#245F61]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>

              {/* Text below node */}
              <div className="absolute top-[calc(100%+85px)] left-1/2 -translate-x-[30%] w-[240px] group-hover:translate-y-2 transition-transform duration-300">
                <div className="absolute left-[80%] top-[-40px] text-[200px] font-bold text-[#d0dbde] -z-10 leading-none select-none tracking-tighter transition-all duration-300 group-hover:text-[#c2d1d4]">2</div>
                <h3 className="text-[19px] font-bold text-gray-900 mb-3 leading-tight">Follow Expert Advisors</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Far far away, behind mountains, far from the countries Vokalia.
                </p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="absolute group node-enter-3" style={{ left: '80%', top: '56%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-[60px] h-[60px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                {/* Glow shadow */}
                <div className="absolute top-[60%] left-1/2 w-[50px] h-[50px] bg-[#245F61] rounded-full blur-[14px] pulse-glow-3"></div>
                {/* Flat-top Hexagon */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-sm" viewBox="0 0 60 60">
                  <polygon points="15,4 45,4 60,30 45,56 15,56 0,30" fill="white" />
                </svg>
                {/* Archive Box icon */}
                <svg className="w-7 h-7 relative z-10 text-[#245F61]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </div>

              {/* Text below node */}
              <div className="absolute top-[calc(100%+85px)] left-1/2 -translate-x-[30%] w-[240px] group-hover:translate-y-2 transition-transform duration-300">
                <div className="absolute left-[80%] top-[-80px] text-[200px] font-bold text-[#d0dbde] -z-10 leading-none select-none tracking-tighter transition-all duration-300 group-hover:text-[#c2d1d4]">3</div>
                <h3 className="text-[19px] font-bold text-gray-900 mb-3 leading-tight">Invest Based on Their Guidance</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Far far away, behind mountains, far from the countries Vokalia.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

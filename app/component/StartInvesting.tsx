"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Counter = ({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(easeProgress * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const StartInvesting = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 flex justify-center mb-14">
      <div className="w-full max-w-[1500px] relative">
        {/* Banner */}
        <div className="w-full bg-[#20635e] rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-0 md:h-[380px]">
          {/* Left Content */}
          <div className="md:w-1/2 flex flex-col items-start z-10 py-12">
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight mb-8">
              Start Investing With <br className="hidden md:block" />
              Expert Guidance Today
            </h2>
            <button className="px-8 py-3 rounded-[2rem] cursor-pointer border border-white text-white font-medium hover:bg-white hover:text-[#20635e] transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 relative h-[300px] md:h-full w-full flex justify-end items-end">
            {/* Replace src with your actual illustration image path */}
            <Image 
              src="/images/illustration.png" 
              alt="Start Investing" 
              width={480} 
              height={480} 
              className="object-contain object-scale-down scale-[1.15] translate-x-10 translate-y-12" 
            />
          </div>
        </div>

        {/* Stats Box */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[4.5rem] w-[90%] max-w-[1000px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-8 px-4 flex justify-between items-center z-20">
          <div className="flex flex-col items-center flex-1 border-r border-gray-200 last:border-0">
            <span className="text-4xl font-bold text-gray-900 mb-2"><Counter end={50} suffix="K +" /></span>
            <span className="text-gray-500 text-md font-medium">Investors</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-r border-gray-200 last:border-0">
            <span className="text-4xl font-bold text-gray-900 mb-2"><Counter end={120} suffix="+" /></span>
            <span className="text-gray-500 text-md font-medium">Advisors</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-r border-gray-200 last:border-0">
            <span className="text-4xl font-bold text-gray-900 mb-2"><Counter end={50} suffix="Cr +" /></span>
            <span className="text-gray-500 text-md font-medium">Investments</span>
          </div>
          <div className="flex flex-col items-center flex-1 border-r border-gray-200 last:border-0">
            <span className="text-4xl font-bold text-gray-900 mb-2"><Counter end={4.9} decimals={1} /></span>
            <span className="text-gray-500 text-md font-medium">Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartInvesting;

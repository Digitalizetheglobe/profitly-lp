import React from 'react';
import Image from 'next/image';

const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

const TestimonialCard = () => (
    <div className="w-[450px] flex-shrink-0 bg-[#fcfdfd] border border-gray-200/50 rounded-[24px] p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center gap-4">
            <div className="w-[52px] h-[52px] rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                {/* Fallback avatar if no image */}
                <Image src="/images/Testimonial.png" alt="Rajesh Kumar" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
                <h4 className="font-bold text-[#1b4344] text-[18px]">Rajesh Kumar</h4>
                <div className="flex items-center gap-2 text-[12px] mt-1">
                    <div className="flex gap-0.5">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <span className="font-bold text-gray-700">5.00</span>
                    <span className="text-gray-400">Apr 2, 2022 - Apr 5, 2022</span>
                </div>
            </div>
        </div>
        <p className="text-gray-500 text-[15px] leading-relaxed">
            “Proftly made investing simple expert guidance and an easy interface helped me start with confidence”
        </p>
    </div>
);

const Testimonial = () => {
    // We duplicate the cards multiple times to create a seamless infinite scroll loop
    const rowCards = Array(8).fill(null);

    return (
        <section id="testimonials" className="relative w-full py-12 overflow-hidden">
            <style>{`
                .marquee-container {
                    display: flex;
                    width: max-content;
                }
                .scroll-right {
                    animation: scroll-right 40s linear infinite;
                }
                .scroll-left {
                    animation: scroll-left 40s linear infinite;
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes scroll-left {
                    0% { transform: translateX(-150px); }
                    100% { transform: translateX(calc(-50% - 150px)); }
                }
                .fade-edges {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>

            {/* Header section */}
            <div className="flex flex-col items-center mb-16 relative z-20">
                <div className="bg-[#e4eff0] text-[#1b4344] px-6 py-1.5 rounded-full font-bold text-[13px] mb-5 tracking-wide">
                    Testimonials
                </div>
                <h2 className="text-4xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
                    Hear From Satisfied Investors
                </h2>
            </div>

            {/* Scrolling Rows Container */}
            <div className="w-full max-w-[1600px] mx-auto fade-edges flex flex-col gap-6">
                
                {/* Top Row: Scrolls Right */}
                <div className="w-full overflow-hidden">
                    <div className="marquee-container scroll-right flex gap-6">
                        {rowCards.map((_, i) => (
                            <TestimonialCard key={`top-${i}`} />
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Scrolls Left */}
                <div className="w-full overflow-hidden">
                    <div className="marquee-container scroll-left flex gap-6">
                        {rowCards.map((_, i) => (
                            <TestimonialCard key={`bottom-${i}`} />
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Testimonial;

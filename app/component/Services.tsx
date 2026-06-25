import React from 'react';
import Image from 'next/image';

const CircleItem = ({ angle, radius, children, speed = 20, reverse = false }: { angle: number, radius: number, children: React.ReactNode, speed?: number, reverse?: boolean }) => {
    return (
        <div
            className="absolute top-1/2 left-1/2 w-0 h-0 z-10"
            style={{ transform: `rotate(${angle}deg)` }}
        >
            <div
                className="absolute top-0 left-0 w-0 h-0"
                style={{ 
                    animation: `orbit ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}` 
                }}
            >
                <div
                    className="absolute top-0 left-0 w-0 h-0"
                    style={{ transform: `translate(${radius}px, 0)` }}
                >
                    <div
                        className="absolute top-0 left-0 w-0 h-0"
                        style={{ 
                            animation: `inverse-orbit ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}` 
                        }}
                    >
                        <div
                            className="absolute top-0 left-0 w-0 h-0"
                            style={{ transform: `rotate(${-angle}deg)` }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pill = ({ text }: { text: string }) => (
    <div
        className="absolute flex items-center gap-2 bg-white rounded-full p-1 pr-6 shadow-lg whitespace-nowrap border border-white"
        style={{ transform: 'translate(-30%, -50%)' }}
    >
        <div className="w-10 h-10 rounded-full bg-[#1b4a4c] flex items-center justify-center flex-shrink-0 shadow-inner relative overflow-hidden">
            <Image src="/images/S1.png" alt="Icon" fill className="object-cover scale-[1.5]" />
        </div>
        <span className="text-[#1b4344] font-bold text-[13px] md:text-sm">{text}</span>
    </div>
);

const IconCircle = () => (
    <div
        className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-white"
        style={{ transform: 'translate(-50%, -50%)' }}
    >
        <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
            <Image src="/images/S.png" alt="Icon" fill className="object-cover scale-[1.5]" />
        </div>
    </div>
);

const Dot = () => (
    <div
        className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
        style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
);

const Services = () => {
    return (
        <section id="services" className="relative w-full py-6 overflow-hidden">
            <style>{`
                @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes inverse-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
            `}</style>

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image 
                    src="/images/bg.png" 
                    alt="Services Background" 
                    fill 
                    className="object-cover" 
                />
            </div>

            <div className="relative z-10 w-[90%] max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start w-full lg:w-[40%] text-center lg:text-left">
                    <button className="bg-white text-[#1b4344] px-10 py-2.5 rounded-full font-bold text-md mb-6 hover:bg-gray-50 transition-colors shadow-md lg:ml-26">
                        Join Us
                    </button>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight">
                        Our Services
                    </h2>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                        Explore our complete suite of tailored financial tools & strategic solutions designed for modern investors. Start building your portfolio today.
                    </p>
                </div>

                {/* Right Content (Concentric Circles) */}
                <div className="w-full lg:w-[60%] flex items-center justify-center lg:justify-end">
                    <div className="relative w-[500px] h-[500px] scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 flex-shrink-0 lg:mr-16 origin-center lg:origin-right">

                        {/* Circle borders */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full border border-white/60"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/60"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/60"></div>

                        {/* Inner Circle Items (Radius 75) */}
                        <CircleItem angle={315} radius={75} speed={15}><IconCircle /></CircleItem>
                        <CircleItem angle={135} radius={75} speed={15}><IconCircle /></CircleItem>

                        {/* Middle Circle Items (Radius 150) */}
                        <CircleItem angle={240} radius={150} speed={25} reverse={true}><Dot /></CircleItem>
                        <CircleItem angle={430} radius={150} speed={25} reverse={true}><Dot /></CircleItem>

                        {/* Outer Circle Items (Radius 225) */}
                        <CircleItem angle={190} radius={225} speed={35}><Pill text="Futures & Options" /></CircleItem>
                        <CircleItem angle={285} radius={225} speed={35}><Pill text="Futures & Options" /></CircleItem>
                        <CircleItem angle={15} radius={225} speed={35}><Pill text="Futures & Options" /></CircleItem>
                        <CircleItem angle={95} radius={225} speed={35}><Pill text="Futures & Options" /></CircleItem>
                        <CircleItem angle={150} radius={225} speed={35}><Dot /></CircleItem>
                        <CircleItem angle={-30} radius={225} speed={35}><Dot /></CircleItem>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;

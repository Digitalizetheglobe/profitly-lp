import React from 'react';
import Image from 'next/image';

const Card = ({ title }: { title: React.ReactNode }) => (
    <div className="w-[260px] xl:w-[280px] bg-[#f4f7f7] rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-2 border-transparent card-glow-sync transition-colors duration-300">
        <h3 className="font-bold text-gray-900 text-[19px] mb-3 leading-tight">{title}</h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">Lorem Ipsum is simply dummy text of the printing Lorem Ipsum.</p>
    </div>
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-11 h-11 rounded-full bg-[#f4f7f7] flex items-center justify-center flex-shrink-0 shadow-sm relative z-10 border-[3px] border-white">
        {children}
    </div>
);

const ChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c4b4d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
        <path d="m3 12 6-6 4 4 8-8" stroke="#14b8a6" />
    </svg>
);

const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c4b4d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="m16 16 2 2 4-4" stroke="#14b8a6" />
    </svg>
);

const Features = () => {
    return (
        <section id="features" className="relative w-full bg-[#fcfdfd] py-16 overflow-hidden">
            <style>{`
                .glow-line-tl { position: absolute; inset: 0; pointer-events: none; border-bottom: 4px solid #1c4b4d; border-left: 4px solid #1c4b4d; border-bottom-left-radius: 40px; -webkit-mask-image: radial-gradient(circle, black 0%, transparent 50px); mask-image: radial-gradient(circle, black 0%, transparent 50px); -webkit-mask-size: 100px 100px; mask-size: 100px 100px; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; animation: draw-tl 3s linear infinite; }
                @keyframes draw-tl { 0% { mask-position: calc(100% + 150px) calc(100% + 50px); -webkit-mask-position: calc(100% + 150px) calc(100% + 50px); opacity: 0; } 5% { mask-position: calc(100% + 50px) calc(100% + 50px); -webkit-mask-position: calc(100% + 50px) calc(100% + 50px); opacity: 1; } 50% { mask-position: -50px calc(100% + 50px); -webkit-mask-position: -50px calc(100% + 50px); opacity: 1; } 95% { mask-position: -50px -50px; -webkit-mask-position: -50px -50px; opacity: 1; } 100% { mask-position: -50px -150px; -webkit-mask-position: -50px -150px; opacity: 0; } }

                .glow-line-bl { position: absolute; inset: 0; pointer-events: none; border-top: 4px solid #1c4b4d; border-left: 4px solid #1c4b4d; border-top-left-radius: 40px; -webkit-mask-image: radial-gradient(circle, black 0%, transparent 50px); mask-image: radial-gradient(circle, black 0%, transparent 50px); -webkit-mask-size: 100px 100px; mask-size: 100px 100px; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; animation: draw-bl 3s linear infinite; }
                @keyframes draw-bl { 0% { mask-position: calc(100% + 150px) -50px; -webkit-mask-position: calc(100% + 150px) -50px; opacity: 0; } 5% { mask-position: calc(100% + 50px) -50px; -webkit-mask-position: calc(100% + 50px) -50px; opacity: 1; } 50% { mask-position: -50px -50px; -webkit-mask-position: -50px -50px; opacity: 1; } 95% { mask-position: -50px calc(100% + 50px); -webkit-mask-position: -50px calc(100% + 50px); opacity: 1; } 100% { mask-position: -50px calc(100% + 150px); -webkit-mask-position: -50px calc(100% + 150px); opacity: 0; } }

                .glow-line-tr { position: absolute; inset: 0; pointer-events: none; border-bottom: 4px solid #1c4b4d; border-right: 4px solid #1c4b4d; border-bottom-right-radius: 40px; -webkit-mask-image: radial-gradient(circle, black 0%, transparent 50px); mask-image: radial-gradient(circle, black 0%, transparent 50px); -webkit-mask-size: 100px 100px; mask-size: 100px 100px; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; animation: draw-tr 3s linear infinite; }
                @keyframes draw-tr { 0% { mask-position: -150px calc(100% + 50px); -webkit-mask-position: -150px calc(100% + 50px); opacity: 0; } 5% { mask-position: -50px calc(100% + 50px); -webkit-mask-position: -50px calc(100% + 50px); opacity: 1; } 50% { mask-position: calc(100% + 50px) calc(100% + 50px); -webkit-mask-position: calc(100% + 50px) calc(100% + 50px); opacity: 1; } 95% { mask-position: calc(100% + 50px) -50px; -webkit-mask-position: calc(100% + 50px) -50px; opacity: 1; } 100% { mask-position: calc(100% + 50px) -150px; -webkit-mask-position: calc(100% + 50px) -150px; opacity: 0; } }

                .glow-line-br { position: absolute; inset: 0; pointer-events: none; border-top: 4px solid #1c4b4d; border-right: 4px solid #1c4b4d; border-top-right-radius: 40px; -webkit-mask-image: radial-gradient(circle, black 0%, transparent 50px); mask-image: radial-gradient(circle, black 0%, transparent 50px); -webkit-mask-size: 100px 100px; mask-size: 100px 100px; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; animation: draw-br 3s linear infinite; }
                @keyframes draw-br { 0% { mask-position: -150px -50px; -webkit-mask-position: -150px -50px; opacity: 0; } 5% { mask-position: -50px -50px; -webkit-mask-position: -50px -50px; opacity: 1; } 50% { mask-position: calc(100% + 50px) -50px; -webkit-mask-position: calc(100% + 50px) -50px; opacity: 1; } 95% { mask-position: calc(100% + 50px) calc(100% + 50px); -webkit-mask-position: calc(100% + 50px) calc(100% + 50px); opacity: 1; } 100% { mask-position: calc(100% + 50px) calc(100% + 150px); -webkit-mask-position: calc(100% + 50px) calc(100% + 150px); opacity: 0; } }

                @media (min-width: 1024px) {
                    .card-glow-sync {
                        animation: card-glow 3s linear infinite;
                    }
                }
                @keyframes card-glow {
                    0%, 40% { border-color: #1c4b4d; box-shadow: 0 0 25px rgba(28, 75, 77, 0.2); }
                    50%, 92% { border-color: transparent; box-shadow: 0 4px 20px rgba(0,0,0,0.02); }
                    95%, 100% { border-color: #1c4b4d; box-shadow: 0 0 25px rgba(28, 75, 77, 0.2); }
                }
            `}</style>
            <div className="w-full relative">

                {/* Header */}
                <div className="flex flex-col items-center mb-16 relative z-20">
                    <div className="bg-[#e4eff0] text-[#1b4344] px-6 py-1.5 rounded-full font-bold text-[13px] mb-5 tracking-wide">
                        Features
                    </div>
                    <h2 className="text-4xl md:text-[44px] font-extrabold text-gray-900 tracking-tight">
                        Proftly Key Features
                    </h2>
                </div>

                {/* Desktop Graphic Container */}
                <div className="hidden lg:block relative w-full h-[550px] mx-auto">

                    {/* CENTER LOGO */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center z-20">
                        {/* Outer SVG Ring with precisely calculated dashed gaps and exact dots on the arc ends */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none rotate-45" viewBox="0 0 128 128" fill="none">
                            <circle cx="64" cy="64" r="62" stroke="#1c4b4d" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="174.78 20" strokeDashoffset="87.39" strokeLinecap="round" />
                            {/* Exact dots placed perfectly at the 4 ends of the dashed arcs */}
                            <circle cx="73.96" cy="2.81" r="2.5" fill="#1c4b4d" /> {/* Top Right End */}
                            <circle cx="73.96" cy="125.19" r="2.5" fill="#1c4b4d" /> {/* Bottom Right End */}
                            <circle cx="54.04" cy="2.81" r="2.5" fill="#1c4b4d" />   {/* Top Left End */}
                            <circle cx="54.04" cy="125.19" r="2.5" fill="#1c4b4d" />   {/* Bottom Left End */}
                        </svg>

                        {/* Main Circle */}
                        <div className="w-[104px] h-[104px] rounded-full bg-[#235b5d] flex items-center justify-center shadow-2xl relative z-10 overflow-hidden">
                            {/* Replace src with your actual logo image path */}
                            <Image src="/images/F.png" alt="Logo" fill className="object-cover scale-[1.6]" />
                        </div>
                    </div>

                    {/* TOP LEFT */}
                    <div className="absolute top-1/2 right-[calc(50%+140px)] w-[calc(50vw-498px)] min-w-[40px] max-w-[500px] h-[150px] mt-[-12px] border-b border-l border-[#1c4b4d]/30 rounded-bl-[40px] -translate-y-full pointer-events-none">
                        <div className="glow-line-tl"></div>
                        <div className="absolute flex items-center gap-4 pointer-events-auto" style={{ top: '0px', left: '22px', transform: 'translate(-100%, -50%)' }}>
                            <Card title={<>Expert Stock<br />Recommendations</>} />
                            <IconWrapper><ChartIcon /></IconWrapper>
                        </div>
                    </div>

                    {/* BOTTOM LEFT */}
                    <div className="absolute top-1/2 right-[calc(50%+140px)] w-[calc(50vw-498px)] min-w-[40px] max-w-[500px] h-[150px] mt-[12px] border-t border-l border-[#1c4b4d]/30 rounded-tl-[40px] pointer-events-none">
                        <div className="glow-line-bl"></div>
                        <div className="absolute flex items-center gap-4 pointer-events-auto" style={{ bottom: '0px', left: '22px', transform: 'translate(-100%, 50%)' }}>
                            <Card title={<>Portfolio<br />Tracking</>} />
                            <IconWrapper><ClockIcon /></IconWrapper>
                        </div>
                    </div>

                    {/* TOP RIGHT */}
                    <div className="absolute top-1/2 left-[calc(50%+140px)] w-[calc(50vw-498px)] min-w-[40px] max-w-[500px] h-[150px] mt-[-12px] border-b border-r border-[#1c4b4d]/30 rounded-br-[40px] -translate-y-full pointer-events-none">
                        <div className="glow-line-tr"></div>
                        <div className="absolute flex items-center gap-4 flex-row-reverse pointer-events-auto" style={{ top: '0px', right: '22px', transform: 'translate(100%, -50%)' }}>
                            <Card title={<>Real Time<br />Market Insights</>} />
                            <IconWrapper><ClockIcon /></IconWrapper>
                        </div>
                    </div>

                    {/* BOTTOM RIGHT */}
                    <div className="absolute top-1/2 left-[calc(50%+140px)] w-[calc(50vw-498px)] min-w-[40px] max-w-[500px] h-[150px] mt-[12px] border-t border-r border-[#1c4b4d]/30 rounded-tr-[40px] pointer-events-none">
                        <div className="glow-line-br"></div>
                        <div className="absolute flex items-center gap-4 flex-row-reverse pointer-events-auto" style={{ bottom: '0px', right: '22px', transform: 'translate(100%, 50%)' }}>
                            <Card title={<>Advisor Chat<br />Support</>} />
                            <IconWrapper><ChartIcon /></IconWrapper>
                        </div>
                    </div>

                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col gap-6 mt-12 items-center">
                    <Card title={<>Expert Stock<br />Recommendations</>} />
                    <Card title={<>Real Time<br />Market Insights</>} />
                    <Card title={<>Portfolio<br />Tracking</>} />
                    <Card title={<>Advisor Chat<br />Support</>} />
                </div>

            </div>
        </section>
    );
};

export default Features;

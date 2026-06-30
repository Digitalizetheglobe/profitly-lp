import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="w-full bg-[#20635e] text-white rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden mt-12 relative">
            <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-12 flex flex-col gap-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">

                    {/* Brand & Tagline (Col 1) */}
                    <div className="flex flex-col gap-5 pt-2">
                        <div className="flex items-center -ml-2 -mt-4 lg:-mt-6">
                            <Link href="#hero">
                                <Image src="/images/Flogo.png" alt="Proftly — SEBI-registered financial advisor platform" width={220} height={100} className="w-48 md:w-56 h-auto hover:opacity-90 transition-opacity" />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 max-w-[320px]">
                            <p className="font-outfit font-semibold text-[17px] md:text-[19px] leading-snug tracking-wide text-white">
                                Insights. Execution. Profit.
                            </p>
                            <h2 className="font-bold text-[15px] md:text-[16px] leading-relaxed text-white/90">
                                Connect with SEBI-Registered Financial Advisors in India
                            </h2>
                            <p className="text-[14px] leading-relaxed text-white/75 font-medium">
                                Book consultations, chat with experts, and plan your investment goals on India&apos;s trusted financial advisory platform.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links (Col 2) */}
                    <div className="flex flex-col gap-6 pt-4 lg:pl-8">
                        <h4 className="font-bold text-[18px] tracking-wide">Quick Links</h4>
                        <div className="flex flex-col gap-5 text-[14px] text-white font-medium">
                            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                            <a href="#how-it-works" className="hover:text-gray-300 transition-colors">How it Works</a>
                            <a href="#advisors" className="hover:text-gray-300 transition-colors">Advisors</a>
                            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
                        </div>
                    </div>

                    {/* Explore (Col 3) */}
                    <div className="flex flex-col gap-6 pt-4 lg:pl-8">
                        <h4 className="font-bold text-[18px] tracking-wide">Explore</h4>
                        <div className="flex flex-col gap-5 text-[14px] text-white font-medium">
                            <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
                            <a href="#news" className="hover:text-gray-300 transition-colors">News</a>
                            <a href="#testimonials" className="hover:text-gray-300 transition-colors">Testimonials</a>
                            <a href="#faqs" className="hover:text-gray-300 transition-colors">Faqs</a>
                        </div>
                    </div>

                    {/* Legal (Col 4) */}
                    <div className="flex flex-col gap-6 pt-4 lg:pl-8">
                        <h4 className="font-bold text-[18px] tracking-wide">Legal</h4>
                        <div className="flex flex-col gap-5 text-[14px] text-white font-medium">
                            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="hover:text-gray-300 transition-colors">Terms and Conditions</Link>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#27726d] py-5 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[13px] text-white/90 font-medium tracking-wide">@2026 Proftly.All Rights Reserved</p>
                    <div className="flex items-center gap-4">
                        <span className="text-[14px] font-medium mr-2 tracking-wide">Social media</span>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#27726d] transition-colors"><FacebookIcon /></a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#27726d] transition-colors"><InstagramIcon /></a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#27726d] transition-colors"><YoutubeIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

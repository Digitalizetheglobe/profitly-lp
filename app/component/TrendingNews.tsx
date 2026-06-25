import React from 'react';
import Image from 'next/image';

const newsData = [
    {
        text: "RITS Q1 Result: Consolidated Net Profit Rises 1.1% to ₹30 Crore RITS Ltd reported a modest growth in its financial performance for the first quarter, with consolidated net profit rising by 1.1% year-on-year to ₹30 crore, compared to ₹29.7 crore in the same period last yea",
        author: "Rajesh Kumar",
        imageSrc: "/images/N1.png", // Replace with actual image
        align: "left"
    },
    {
        text: "RITS Q1 Result: Consolidated Net Profit Rises 1.1% to ₹30 Crore RITS Ltd reported a modest growth in its financial performance for the first quarter, with consolidated net profit rising by 1.1% year-on-year to ₹30 crore, compared to ₹29.7 crore in the same period last yea",
        author: "Rajesh Kumar",
        imageSrc: "/images/N2.png", // Replace with actual image
        align: "right"
    },
    {
        text: "RITS Q1 Result: Consolidated Net Profit Rises 1.1% to ₹30 Crore RITS Ltd reported a modest growth in its financial performance for the first quarter, with consolidated net profit rising by 1.1% year-on-year to ₹30 crore, compared to ₹29.7 crore in the same period last yea",
        author: "Rajesh Kumar",
        imageSrc: "/images/N3.png", // Replace with actual image
        align: "left"
    }
];

const TrendingNews = () => {
    return (
        <section id="news" className="w-full py-16 px-4 md:px-8 lg:px-2 flex flex-col items-center">
            {/* Pill */}
            <div className="bg-[#D6E1E2] text-[#1b4344] px-6 py-1.5 rounded-full text-sm font-bold mb-4">
                News
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#1f2937] mb-16 md:mb-24">
                Trending News
            </h2>

            {/* News List */}
            <div className="w-full max-w-[1300px] flex flex-col gap-16 md:gap-20">
                {newsData.map((news, index) => (
                    <div
                        key={index}
                        className={`w-full p-4 md:p-6 flex items-center gap-6 md:gap-8 transition-transform hover:scale-[1.01] ${news.align === 'right'
                                ? 'flex-row-reverse bg-gradient-to-l from-[#e3ebea] to-[#f4f4f4] rounded-r-full rounded-l-[1rem] md:rounded-l-[2rem]'
                                : 'flex-row bg-gradient-to-r from-[#e3ebea] to-[#f4f4f4] rounded-l-full rounded-r-[1rem] md:rounded-r-[2rem]'
                            }`}
                    >
                        {/* Image */}
                        <div className="relative w-[140px] h-[140px] md:w-[260px] md:h-[260px] rounded-full flex-shrink-0 overflow-hidden">
                            <Image
                                src={news.imageSrc}
                                alt="News Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div
                            className={`flex flex-col flex-1 py-4 md:py-8 ${news.align === 'right' ? 'text-left md:text-left pr-4' : 'text-right md:text-right pl-4'
                                }`}
                        >
                            <p className="text-[#1f2937] text-sm md:text-[1.1rem] leading-[1.8] mb-4 md:mb-6 font-medium">
                                {news.text}
                            </p>
                            <span className="font-bold text-[#1f2937] text-base md:text-[1.15rem]">
                                -{news.author}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingNews;

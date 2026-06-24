import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-[95%] max-w-[1500px] pb-12 mt-4">
      <div 
        className="relative rounded-[40px] overflow-hidden bg-gray-900 min-h-[500px] flex items-center shadow-2xl"
        style={{
          backgroundImage: "url('/images/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
          <h1 className="font-outfit font-semibold text-[50px] text-white leading-[55px] tracking-[-0.0041em] mb-6">
            Invest Smarter with<br />Expert Advisor<br />Guidance
          </h1>
          <p className="font-outfit font-semibold text-[20px] text-gray-200 leading-[30px] tracking-[-0.0041em] mb-8 max-w-2xl">
            Follow trusted advisors, get stock recommendations, & grow your portfolio with confidence.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="flex items-center justify-center w-[150px] h-[40px] bg-[linear-gradient(88.6deg,#194B56_50%,#277275_100%)] rounded-[50px] font-outfit font-semibold text-[18px] leading-[18px] tracking-[-0.0041em] text-white transition-opacity hover:opacity-90 shadow-lg">
              Get Started
            </button>
            <button className="flex items-center justify-center w-[180px] h-[40px] bg-transparent border-2 border-white rounded-[50px] font-outfit font-semibold text-[18px] leading-[18px] tracking-[-0.0041em] text-white transition-colors hover:bg-white/10">
              Explore Advisors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

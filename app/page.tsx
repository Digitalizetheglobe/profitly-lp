import Header from "./component/Header";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
}

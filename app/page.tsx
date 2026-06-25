import Header from "./component/Header";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import Advisors from "./component/Advisors";
import Services from "./component/Services";
import Features from "./component/Features";
import StartInvesting from "./component/StartInvesting";
import Calculators from "./component/Calculators";
import TrendingNews from "./component/TrendingNews";
import Testimonial from "./component/testimonial";
import Faq from "./component/Faq";
import Ready from "./component/Ready";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <HowItWorks />
        <Advisors />
        <Services />
        <Features />
        <StartInvesting />
        <Calculators />
        <TrendingNews />
        <Ready />
        <Testimonial />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

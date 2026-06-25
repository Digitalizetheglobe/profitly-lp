import Header from "../component/Header";
import Footer from "../Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-[20px] shadow-sm">
          <h1 className="font-outfit font-bold text-4xl text-[#191919] mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed font-medium text-[16px]">
            <p>
              Welcome to Profitly. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform for booking advisor sessions and accessing financial recommendations.
            </p>
            
            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">1. Information Collection and Advisor Booking</h2>
            <p>
              When booking a consultation with an advisor, we collect necessary personal details, contact information, and payment data. Your information is securely shared with the respective advisor solely for the purpose of the consultation.
            </p>
            
            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">2. SEBI Guidelines Compliance</h2>
            <p>
              We adhere strictly to the guidelines set forth by the Securities and Exchange Board of India (SEBI). Your financial data and interaction history with SEBI-registered investment advisors are handled with maximum confidentiality and are never shared with unauthorized third parties.
            </p>

            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">3. Data Security</h2>
            <p>
              Profitly uses industry-standard security protocols to ensure that your financial data, portfolio information, and advisor communications are protected against unauthorized access.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Header from "../component/Header";
import Footer from "../Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-[20px] shadow-sm">
          <h1 className="font-outfit font-bold text-4xl text-[#191919] mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed font-medium text-[16px]">
            <p>
              Welcome to Profitly. By accessing our website, booking advisor sessions, or acting upon our recommendations, you agree to be bound by the following Terms and Conditions.
            </p>
            
            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">1. Advisor Bookings and Services</h2>
            <p>
              Profitly facilitates the booking of financial advisors. Once a booking is confirmed, it is the user's responsibility to attend the scheduled session. Rescheduling or cancellations are subject to the individual advisor's policies. Profitly acts as an intermediary and is not liable for direct investment losses incurred based on advisor recommendations.
            </p>
            
            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">2. Compliance with SEBI Guidelines</h2>
            <p>
              Users acknowledge that stock market investments are subject to market risks. All advisors operating on Profitly are required to adhere to SEBI (Investment Advisers) Regulations. Users are encouraged to read all scheme-related documents carefully before investing and verify the credentials of the SEBI-registered advisors.
            </p>

            <h2 className="font-bold text-2xl text-[#191919] mt-8 mb-4">3. User Responsibilities</h2>
            <p>
              You agree to provide accurate information when booking an advisor. Any misuse of the platform, fraudulent bookings, or attempts to bypass the platform for advisor communications may result in immediate termination of your account.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

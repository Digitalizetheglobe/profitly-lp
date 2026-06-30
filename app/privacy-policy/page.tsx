import type { Metadata } from "next";
import Header from "../component/Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Proftly collects, uses, and protects your personal and financial information on our SEBI advisor marketplace for Android and web.",
  openGraph: {
    title: "Privacy Policy | Proftly",
    description:
      "Proftly privacy policy for users in India. Learn what data we collect, how we use it, and your rights on our financial advisory platform.",
    url: "https://proftly.in/privacy-policy",
    siteName: "Proftly",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f4] font-sans">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-20">
        <article className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-[20px] shadow-sm">
          <header className="mb-10">
            <h1 className="font-outfit font-bold text-4xl text-[#191919] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-[15px]">
              <strong>Effective date:</strong>{" "}
              <time dateTime="2026-06-30">30 June 2026</time>
            </p>
            <p className="text-gray-600 text-[15px] mt-1">
              <strong>Last updated:</strong>{" "}
              <time dateTime="2026-06-30">30 June 2026</time>
            </p>
          </header>

          <nav
            aria-label="Privacy Policy sections"
            className="mb-10 p-6 bg-[#f9f9f9] rounded-xl border border-gray-100"
          >
            <h2 className="font-bold text-lg text-[#191919] mb-3">Contents</h2>
            <ol className="list-decimal list-inside space-y-1 text-[15px] text-gray-700">
              <li>
                <a href="#introduction" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#information-we-collect" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Information We Collect
                </a>
              </li>
              <li>
                <a href="#information-we-do-not-collect" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Information We Do NOT Collect
                </a>
              </li>
              <li>
                <a href="#how-we-use-your-information" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  How We Use Your Information
                </a>
              </li>
              <li>
                <a href="#third-party-services" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Third-Party Services
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Payments
                </a>
              </li>
              <li>
                <a href="#video-consultations" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Video Consultations
                </a>
              </li>
              <li>
                <a href="#data-storage-and-security" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Data Storage &amp; Security
                </a>
              </li>
              <li>
                <a href="#data-retention" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Data Retention
                </a>
              </li>
              <li>
                <a href="#user-rights" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  User Rights
                </a>
              </li>
              <li>
                <a href="#account-deletion" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Account Deletion
                </a>
              </li>
              <li>
                <a href="#childrens-privacy" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Children&apos;s Privacy
                </a>
              </li>
              <li>
                <a href="#financial-disclaimer" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Financial Disclaimer
                </a>
              </li>
              <li>
                <a href="#changes-to-this-privacy-policy" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Changes to this Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-[#191919] underline-offset-2 hover:underline">
                  Contact Us
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-8 text-gray-700 leading-relaxed font-medium text-[16px]">
            <section id="introduction" aria-labelledby="introduction-heading">
              <h2 id="introduction-heading" className="font-bold text-2xl text-[#191919] mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>Proftly</strong> (&quot;Proftly,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                Proftly operates the Proftly mobile application for Android, the website at{" "}
                <a href="https://proftly.in" className="text-[#191919] underline underline-offset-2">
                  https://proftly.in
                </a>
                , and related services accessible through our backend API at{" "}
                <a href="https://api.proftly.in" className="text-[#191919] underline underline-offset-2">
                  https://api.proftly.in
                </a>
                .
              </p>
              <p className="mt-4">
                Proftly is a financial advisory platform that connects users with independent
                SEBI-registered financial advisors. Through Proftly, you may subscribe to advisors,
                book consultations, chat with advisors, use financial planning tools, and manage
                your investment goals. <strong>Proftly itself does not provide financial advice.</strong>
              </p>
              <p className="mt-4">
                This Privacy Policy describes how we collect, use, disclose, store, and protect your
                personal information when you use the Proftly mobile application, website, and
                related services (collectively, the &quot;Platform&quot;). It applies to users located in
                India and is designed to comply with applicable Indian laws, including the Digital
                Personal Data Protection Act, 2023 (DPDPA), the Information Technology Act, 2000,
                and the Information Technology (Reasonable Security Practices and Procedures and
                Sensitive Personal Data or Information) Rules, 2011, as well as Google Play Store
                privacy and data safety requirements.
              </p>
              <p className="mt-4">
                By creating an account, downloading our application, or otherwise using the Platform,
                you acknowledge that you have read and understood this Privacy Policy. If you do not
                agree with this policy, please do not use the Platform.
              </p>
            </section>

            <section id="information-we-collect" aria-labelledby="information-we-collect-heading">
              <h2 id="information-we-collect-heading" className="font-bold text-2xl text-[#191919] mb-4">
                2. Information We Collect
              </h2>
              <p>
                We collect information that you provide directly, information generated through your
                use of the Platform, and limited technical information from your device. The
                categories of information we collect include the following:
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.1 Account and Profile Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Full Name</strong> — to create and identify your account and display your
                  profile to advisors you engage with.
                </li>
                <li>
                  <strong>Email Address</strong> — for account registration, communication, receipts,
                  and support correspondence.
                </li>
                <li>
                  <strong>Mobile Number</strong> — for account verification, authentication, booking
                  confirmations, and important service notifications.
                </li>
                <li>
                  <strong>City and State</strong> — to personalise your experience and assist advisors
                  in understanding your location context for consultations.
                </li>
                <li>
                  <strong>Profile Photo</strong> — if you choose to upload one, to personalise your
                  account and help advisors identify you during consultations.
                </li>
              </ul>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.2 Authentication and Security Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>MPIN</strong> — a mobile personal identification number you set for
                  convenient access. Your MPIN is never stored in plain text; it is securely hashed
                  using industry-standard cryptographic methods before storage.
                </li>
                <li>
                  <strong>Authentication Token</strong> — session tokens (such as JWT-based tokens)
                  issued upon successful login to authenticate your requests to our Platform and API.
                </li>
              </ul>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.3 Financial Planning and Advisory Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Financial Goals</strong> — investment objectives, time horizons, and
                  target amounts you enter into our planning tools.
                </li>
                <li>
                  <strong>SIP Details</strong> — systematic investment plan information you provide
                  for planning and advisory purposes.
                </li>
                <li>
                  <strong>Income &amp; Expense Information</strong> — financial data you voluntarily
                  enter to support budgeting, planning, and advisor consultations.
                </li>
                <li>
                  <strong>Consultation Questionnaires</strong> — responses you submit before or
                  during advisor consultations to help advisors prepare for your session.
                </li>
              </ul>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.4 Communication and Engagement Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Chat Messages</strong> — messages exchanged between you and advisors
                  through the in-app chat feature.
                </li>
                <li>
                  <strong>Booking Information</strong> — consultation dates, times, advisor
                  selections, session status, and related scheduling details.
                </li>
                <li>
                  <strong>Subscription Details</strong> — records of advisor subscriptions, plan
                  types, and subscription status.
                </li>
                <li>
                  <strong>Reviews &amp; Ratings</strong> — feedback you submit about advisors or
                  consultations on the Platform.
                </li>
                <li>
                  <strong>Support Tickets</strong> — information you provide when contacting our
                  support team, including issue descriptions and correspondence.
                </li>
              </ul>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.5 Transaction and Payment Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Transaction History</strong> — records of payments made through the
                  Platform, including transaction identifiers, amounts, dates, and payment status.
                  We do not store your debit card, credit card, or banking credentials (see Section 6).
                </li>
              </ul>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                2.6 Device and Technical Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Push Notification Token</strong> — a device token used to deliver push
                  notifications regarding bookings, messages, subscriptions, and platform updates.
                </li>
                <li>
                  <strong>Device Information</strong> — device model, operating system version,
                  application version, and similar technical identifiers necessary for compatibility,
                  security, and troubleshooting.
                </li>
                <li>
                  <strong>App Session Information</strong> — login timestamps, session duration,
                  IP address, and activity logs related to your use of the Platform for security,
                  fraud prevention, and service improvement.
                </li>
              </ul>

              <p className="mt-4">
                We collect only the information necessary to provide, maintain, and improve the
                Platform. Where certain information is optional, we will indicate this at the point
                of collection.
              </p>
            </section>

            <section id="information-we-do-not-collect" aria-labelledby="information-we-do-not-collect-heading">
              <h2 id="information-we-do-not-collect-heading" className="font-bold text-2xl text-[#191919] mb-4">
                3. Information We Do NOT Collect
              </h2>
              <p>
                Proftly is designed with privacy in mind. Unless explicitly stated otherwise in this
                policy or at the point of collection, the Proftly application and website do{" "}
                <strong>not</strong> collect the following categories of data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                <li>
                  <strong>Precise GPS Location</strong> — we do not track or collect your real-time
                  or precise geographic location.
                </li>
                <li>
                  <strong>Contacts</strong> — we do not access or upload your phone&apos;s contact list.
                </li>
                <li>
                  <strong>SMS</strong> — we do not read, collect, or monitor your text messages.
                </li>
                <li>
                  <strong>Call Logs</strong> — we do not access your call history or telephony records.
                </li>
                <li>
                  <strong>Payment Card Details</strong> — we do not store debit card numbers, credit
                  card numbers, CVV codes, or full banking credentials.
                </li>
                <li>
                  <strong>UPI PIN</strong> — we never collect or store your UPI PIN or similar
                  payment authentication credentials.
                </li>
                <li>
                  <strong>Aadhaar</strong> — we do not collect Aadhaar numbers or Aadhaar-related
                  biometric data.
                </li>
                <li>
                  <strong>PAN</strong> — we do not collect Permanent Account Number (PAN) unless
                  you are explicitly asked to provide it for a specific, disclosed purpose (such as
                  regulatory requirements for a particular advisory service) and you choose to do so.
                </li>
                <li>
                  <strong>Biometric Information</strong> — we do not collect fingerprints, facial
                  recognition data, or other biometric identifiers.
                </li>
              </ul>
              <p className="mt-4">
                If our data collection practices change in the future, we will update this Privacy
                Policy and, where required, obtain your consent before collecting any new categories
                of personal information.
              </p>
            </section>

            <section id="how-we-use-your-information" aria-labelledby="how-we-use-your-information-heading">
              <h2 id="how-we-use-your-information-heading" className="font-bold text-2xl text-[#191919] mb-4">
                4. How We Use Your Information
              </h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                <li>
                  <strong>Account Creation and Management</strong> — to register your account,
                  maintain your profile, and provide access to Platform features.
                </li>
                <li>
                  <strong>Authentication</strong> — to verify your identity, secure your account
                  through MPIN and token-based authentication, and prevent unauthorised access.
                </li>
                <li>
                  <strong>Financial Planning</strong> — to enable financial planning tools, goal
                  tracking, SIP calculations, and income and expense management features you choose
                  to use.
                </li>
                <li>
                  <strong>Consultation Booking</strong> — to schedule, confirm, reschedule, and
                  manage consultations between you and independent SEBI-registered advisors.
                </li>
                <li>
                  <strong>Video Consultations</strong> — to facilitate secure live video sessions
                  between you and your advisor.
                </li>
                <li>
                  <strong>Chat</strong> — to enable messaging between you and advisors you have
                  engaged with on the Platform.
                </li>
                <li>
                  <strong>Notifications</strong> — to send booking reminders, subscription updates,
                  chat alerts, and other service-related communications via push notifications, email,
                  or SMS where applicable.
                </li>
                <li>
                  <strong>Payments</strong> — to process subscription fees, consultation charges, and
                  other transactions through our authorised payment partner.
                </li>
                <li>
                  <strong>Customer Support</strong> — to respond to your enquiries, resolve issues,
                  and manage support tickets.
                </li>
                <li>
                  <strong>Fraud Prevention</strong> — to detect, investigate, and prevent fraudulent,
                  abusive, or unauthorised activity on the Platform.
                </li>
                <li>
                  <strong>Security</strong> — to monitor for security threats, enforce our terms of
                  use, and protect the integrity of the Platform and its users.
                </li>
                <li>
                  <strong>Platform Improvements</strong> — to analyse usage patterns, fix bugs,
                  develop new features, and enhance the overall user experience.
                </li>
                <li>
                  <strong>Legal Compliance</strong> — to comply with applicable laws, regulations,
                  court orders, and lawful requests from government authorities.
                </li>
              </ul>
              <p className="mt-4">
                We process your personal information only for legitimate purposes consistent with
                this Privacy Policy and applicable law. We do not use your information for purposes
                incompatible with those described here without notifying you and, where required,
                obtaining your consent.
              </p>
            </section>

            <section id="third-party-services" aria-labelledby="third-party-services-heading">
              <h2 id="third-party-services-heading" className="font-bold text-2xl text-[#191919] mb-4">
                5. Third-Party Services
              </h2>
              <p>
                To deliver a secure and reliable Platform, we work with trusted third-party service
                providers who process data on our behalf. These providers are contractually obligated
                to protect your information and use it only for the purposes we specify.
              </p>
              <p className="mt-4 font-semibold text-[#191919]">
                We do not sell your personal information to any third party.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.1 Payment Processing — Razorpay
              </h3>
              <p>
                Online payments are processed by Razorpay Software Private Limited (&quot;Razorpay&quot;).
                When you make a payment, Razorpay collects and processes payment information in
                accordance with its own privacy policy. Proftly receives only transaction
                confirmations and limited payment metadata necessary to record your transaction
                history.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.2 Video Consultations — Agora
              </h3>
              <p>
                Live video consultations are facilitated through Agora.io (&quot;Agora&quot;). During a video
                session, audio and video streams are transmitted through Agora&apos;s infrastructure to
                enable real-time communication between you and your advisor. Agora processes this
                data solely to deliver the video consultation service.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.3 Push Notifications — Firebase Cloud Messaging / Expo Push Notifications
              </h3>
              <p>
                We use Firebase Cloud Messaging and Expo Push Notifications to deliver push
                notifications to your device. These services process your device push token to route
                notifications to your device. You may disable push notifications through your device
                settings at any time.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.4 File Storage — AWS S3
              </h3>
              <p>
                Profile photos, documents, and other files you upload are stored securely on Amazon
                Web Services Simple Storage Service (AWS S3) infrastructure with appropriate access
                controls and encryption.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.5 Real-Time Communication — Socket.IO
              </h3>
              <p>
                In-app chat and real-time features use Socket.IO to enable instant message delivery
                and live updates. Message content is transmitted through our secure servers and
                stored to maintain your conversation history.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.6 WebRTC Connectivity — Google STUN and Metered TURN Servers
              </h3>
              <p>
                Video consultations may use Google STUN servers and Metered TURN servers to
                establish peer-to-peer connectivity for video calls. These services facilitate
                network traversal and do not access the content of your consultations beyond what is
                technically necessary for connection establishment.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.7 Embedded Content — YouTube
              </h3>
              <p>
                Certain educational or informational content on the Platform may include embedded
                YouTube videos. When you interact with embedded YouTube content, Google may collect
                information in accordance with Google&apos;s Privacy Policy. We recommend reviewing
                Google&apos;s privacy practices if you interact with embedded video content.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                5.8 Independent Financial Advisors
              </h3>
              <p>
                When you book a consultation, subscribe to an advisor, or chat with an advisor, we
                share relevant information (such as your name, contact details, questionnaire
                responses, and booking details) with that independent SEBI-registered advisor solely
                to enable the advisory service you requested. Advisors are independent professionals
                and are responsible for handling your information in compliance with applicable laws
                and their own professional obligations.
              </p>
            </section>

            <section id="payments" aria-labelledby="payments-heading">
              <h2 id="payments-heading" className="font-bold text-2xl text-[#191919] mb-4">
                6. Payments
              </h2>
              <p>
                All online payments on the Proftly Platform are securely processed through{" "}
                <strong>Razorpay</strong>, a PCI-DSS compliant payment gateway. When you initiate a
                payment, you are redirected to or interact with Razorpay&apos;s secure payment interface.
              </p>
              <p className="mt-4">
                <strong>
                  The Proftly application and website never store your debit card details, credit
                  card details, CVV, net banking credentials, UPI PIN, or other sensitive payment
                  authentication information.
                </strong>{" "}
                Payment card and banking data is entered directly on Razorpay&apos;s secure platform and
                is subject to Razorpay&apos;s privacy and security practices.
              </p>
              <p className="mt-4">
                We retain only transaction records necessary for billing, accounting, dispute
                resolution, and legal compliance, including transaction identifiers, amounts, dates,
                and payment status.
              </p>
            </section>

            <section id="video-consultations" aria-labelledby="video-consultations-heading">
              <h2 id="video-consultations-heading" className="font-bold text-2xl text-[#191919] mb-4">
                7. Video Consultations
              </h2>
              <p>
                Proftly uses <strong>Agora</strong> solely to facilitate secure live video
                consultations between you and your chosen independent financial advisor. Video
                sessions are initiated only when you or your advisor start a scheduled consultation
                through the Platform.
              </p>
              <p className="mt-4">
                During a video consultation, audio and video data is transmitted in real time through
                Agora&apos;s encrypted communication infrastructure. Proftly does not record video
                consultations unless explicitly disclosed to you at the time of the session and you
                provide consent where required.
              </p>
              <p className="mt-4">
                WebRTC connectivity for video calls may rely on Google STUN servers and Metered TURN
                servers to establish and maintain the connection. These network services facilitate
                call quality and connectivity but are not used to store consultation content.
              </p>
              <p className="mt-4">
                You are responsible for ensuring you are in a private environment during video
                consultations, as you would be during any professional advisory meeting.
              </p>
            </section>

            <section id="data-storage-and-security" aria-labelledby="data-storage-and-security-heading">
              <h2 id="data-storage-and-security-heading" className="font-bold text-2xl text-[#191919] mb-4">
                8. Data Storage &amp; Security
              </h2>
              <p>
                We take the security of your personal and financial information seriously and
                implement appropriate technical and organisational measures to protect it against
                unauthorised access, alteration, disclosure, or destruction.
              </p>
              <p className="mt-4">Our security practices include, but are not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                <li>
                  <strong>HTTPS Encryption</strong> — all data transmitted between your device, our
                  website, and our API at{" "}
                  <a href="https://api.proftly.in" className="text-[#191919] underline underline-offset-2">
                    https://api.proftly.in
                  </a>{" "}
                  is encrypted using Transport Layer Security (TLS/HTTPS).
                </li>
                <li>
                  <strong>JWT Authentication</strong> — API requests are authenticated using JSON
                  Web Tokens (JWT) to ensure that only authorised sessions can access your account
                  data.
                </li>
                <li>
                  <strong>Hashed MPIN</strong> — your MPIN is stored only as a cryptographic hash
                  and cannot be retrieved or viewed by Proftly personnel.
                </li>
                <li>
                  <strong>Secure Cloud Infrastructure</strong> — application data and uploaded
                  files are hosted on secure cloud infrastructure, including AWS S3, with
                  industry-standard physical and network security controls.
                </li>
                <li>
                  <strong>Access Controls</strong> — access to user data is restricted to authorised
                  personnel on a need-to-know basis, and administrative access is logged and
                  monitored.
                </li>
                <li>
                  <strong>Session Management</strong> — authentication tokens are issued with defined
                  validity periods, and sessions can be invalidated upon logout or detected security
                  events.
                </li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of electronic transmission or
                storage is completely secure. We cannot guarantee absolute security, but we
                continuously review and improve our security measures. If you believe your account
                has been compromised, please contact us immediately at{" "}
                <a href="mailto:support@profitly.in" className="text-[#191919] underline underline-offset-2">
                  support@profitly.in
                </a>
                .
              </p>
            </section>

            <section id="data-retention" aria-labelledby="data-retention-heading">
              <h2 id="data-retention-heading" className="font-bold text-2xl text-[#191919] mb-4">
                9. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the
                purposes described in this Privacy Policy, unless a longer retention period is
                required or permitted by law.
              </p>
              <p className="mt-4">Specifically, we retain data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                <li>
                  <strong>Service Delivery</strong> — for as long as your account is active and you
                  use the Platform, including maintaining your profile, consultation history, chat
                  records, and subscription information.
                </li>
                <li>
                  <strong>Legal Compliance</strong> — as required under applicable Indian laws and
                  regulations, including tax, accounting, and data protection obligations.
                </li>
                <li>
                  <strong>Financial Regulations</strong> — transaction and advisory engagement
                  records may be retained for periods required by financial regulatory frameworks and
                  professional standards applicable to SEBI-registered advisors.
                </li>
                <li>
                  <strong>Dispute Resolution</strong> — information relevant to disputes, complaints,
                  or legal claims may be retained until the matter is resolved and any applicable
                  limitation periods have expired.
                </li>
              </ul>
              <p className="mt-4">
                When your information is no longer required for these purposes, we will securely
                delete or anonymise it in accordance with our data retention schedule and applicable
                law. Anonymised data that cannot reasonably be used to identify you may be retained
                for analytics and platform improvement.
              </p>
            </section>

            <section id="user-rights" aria-labelledby="user-rights-heading">
              <h2 id="user-rights-heading" className="font-bold text-2xl text-[#191919] mb-4">
                10. User Rights
              </h2>
              <p>
                Subject to applicable Indian law, including the Digital Personal Data Protection Act,
                2023, you have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-4">
                <li>
                  <strong>Access Your Profile</strong> — you can view your account information and
                  profile details within the Proftly application.
                </li>
                <li>
                  <strong>Edit Your Profile</strong> — you can update your name, email, mobile
                  number, city, state, profile photo, and other editable profile fields directly in
                  the app.
                </li>
                <li>
                  <strong>Request Corrections</strong> — if any information we hold about you is
                  inaccurate or incomplete, you may request correction by updating your profile or
                  contacting our support team.
                </li>
                <li>
                  <strong>Request Account Deletion</strong> — you may request deletion of your
                  account and associated personal data as described in Section 11.
                </li>
                <li>
                  <strong>Contact Support</strong> — you may raise privacy-related enquiries or
                  complaints by emailing{" "}
                  <a href="mailto:support@profitly.in" className="text-[#191919] underline underline-offset-2">
                    support@profitly.in
                  </a>
                  .
                </li>
                <li>
                  <strong>Manage Notifications</strong> — you can enable or disable push
                  notifications through your device settings or, where available, within the
                  application notification preferences.
                </li>
              </ul>
              <p className="mt-4">
                We will respond to legitimate requests within the timeframes required by applicable
                law. We may need to verify your identity before processing certain requests. In some
                cases, we may be unable to fulfil a request if we are required to retain certain
                information for legal, regulatory, or legitimate business purposes.
              </p>
              <p className="mt-4">
                If you are dissatisfied with our response, you may have the right to lodge a complaint
                with the Data Protection Board of India or other relevant authority once operational
                under applicable law.
              </p>
            </section>

            <section id="account-deletion" aria-labelledby="account-deletion-heading">
              <h2 id="account-deletion-heading" className="font-bold text-2xl text-[#191919] mb-4">
                11. Account Deletion
              </h2>
              <p>
                You have the right to request deletion of your Proftly account and the personal
                information associated with it, subject to legal and regulatory retention
                requirements.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                11.1 In-App Account Deletion
              </h3>
              <p>
                If your version of the Proftly application includes an account deletion option, you
                may initiate deletion directly from your account settings. Follow the in-app
                instructions to submit your deletion request.
              </p>

              <h3 className="font-bold text-xl text-[#191919] mt-6 mb-3">
                11.2 Requesting Deletion via Support
              </h3>
              <p>
                If in-app account deletion is unavailable in your application version, you may
                request account deletion by contacting our support team:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2 mt-4">
                <li>
                  Send an email to{" "}
                  <a href="mailto:support@profitly.in" className="text-[#191919] underline underline-offset-2">
                    support@profitly.in
                  </a>{" "}
                  from the email address associated with your Proftly account.
                </li>
                <li>
                  Include the subject line: <strong>&quot;Account Deletion Request&quot;</strong>.
                </li>
                <li>
                  Provide your registered full name and mobile number for identity verification.
                </li>
                <li>
                  State clearly that you wish to permanently delete your Proftly account and all
                  associated personal data.
                </li>
              </ol>
              <p className="mt-4">
                We will verify your identity and process your deletion request within a reasonable
                timeframe, typically within 30 days of receiving a verified request. Upon deletion,
                your account will be deactivated and your personal information will be deleted or
                anonymised, except where retention is required by law, for dispute resolution, or for
                legitimate business purposes such as maintaining transaction records required for
                regulatory compliance.
              </p>
              <p className="mt-4">
                Please note that deleting your account is irreversible. You will lose access to your
                consultation history, chat messages, financial planning data, subscriptions, and other
                account-related information.
              </p>
            </section>

            <section id="childrens-privacy" aria-labelledby="childrens-privacy-heading">
              <h2 id="childrens-privacy-heading" className="font-bold text-2xl text-[#191919] mb-4">
                12. Children&apos;s Privacy
              </h2>
              <p>
                The Proftly Platform is intended only for users who are <strong>18 years of age or
                older</strong>. The Platform is not directed toward children under 13 years of age,
                and we do not knowingly collect personal information from children under 13.
              </p>
              <p className="mt-4">
                If you are under 18 years of age, you may not create an account or use the Platform
                without the involvement and consent of a parent or legal guardian, where permitted
                by applicable law. Financial advisory services on the Platform are intended for
                adults capable of entering into binding agreements.
              </p>
              <p className="mt-4">
                If we become aware that we have collected personal information from a child under 13
                without appropriate parental consent, we will take steps to delete that information
                promptly. If you believe a child under 13 has provided us with personal information,
                please contact us at{" "}
                <a href="mailto:support@profitly.in" className="text-[#191919] underline underline-offset-2">
                  support@profitly.in
                </a>
                .
              </p>
            </section>

            <section id="financial-disclaimer" aria-labelledby="financial-disclaimer-heading">
              <h2 id="financial-disclaimer-heading" className="font-bold text-2xl text-[#191919] mb-4">
                13. Financial Disclaimer
              </h2>
              <p>
                <strong>
                  Proftly is a technology platform that connects users with independent,
                  SEBI-registered financial advisors.
                </strong>{" "}
                Proftly does not provide financial advice, investment recommendations, portfolio
                management services, or any regulated financial advisory services. All financial
                advice, recommendations, and opinions are provided solely by the independent advisors
                you choose to engage with through the Platform.
              </p>
              <p className="mt-4">
                <strong>
                  Investment decisions remain the sole responsibility of the user.
                </strong>{" "}
                Any investment or financial decision you make based on consultations, chat
                communications, or information obtained through the Platform is made at your own
                risk. Past performance is not indicative of future results. Investments in securities
                markets are subject to market risks, and you should read all related documents
                carefully before investing.
              </p>
              <p className="mt-4">
                Proftly does not guarantee the accuracy, completeness, or suitability of any advice
                provided by advisors on the Platform. You are encouraged to verify the SEBI
                registration status and credentials of any advisor before engaging their services
                and to seek independent professional advice where appropriate.
              </p>
            </section>

            <section id="changes-to-this-privacy-policy" aria-labelledby="changes-to-this-privacy-policy-heading">
              <h2 id="changes-to-this-privacy-policy-heading" className="font-bold text-2xl text-[#191919] mb-4">
                14. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, legal requirements, or the features of the Platform. When we
                make material changes, we will update the &quot;Last updated&quot; date at the top of this
                page and, where appropriate, notify you through the application, email, or other
                reasonable means.
              </p>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about
                how we collect, use, and protect your information. Your continued use of the
                Platform after the posting of changes constitutes your acknowledgment of the updated
                Privacy Policy, subject to applicable law. If you do not agree with any changes, you
                should discontinue use of the Platform and may request account deletion as described
                in Section 11.
              </p>
            </section>

            <section id="contact-us" aria-labelledby="contact-us-heading">
              <h2 id="contact-us-heading" className="font-bold text-2xl text-[#191919] mb-4">
                15. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our
                data practices, please contact us:
              </p>
              <address className="not-italic mt-4 space-y-2">
                <p>
                  <strong>Proftly</strong>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://proftly.in" className="text-[#191919] underline underline-offset-2">
                    https://proftly.in
                  </a>
                </p>
                <p>
                  Support Email:{" "}
                  <a href="mailto:support@profitly.in" className="text-[#191919] underline underline-offset-2">
                    support@profitly.in
                  </a>
                </p>
                <p>
                  Admin Email:{" "}
                  <a href="mailto:admin@proftly.in" className="text-[#191919] underline underline-offset-2">
                    admin@proftly.in
                  </a>
                </p>
              </address>
              <p className="mt-4">
                We aim to respond to all privacy-related enquiries within a reasonable timeframe and
                in accordance with applicable legal requirements.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

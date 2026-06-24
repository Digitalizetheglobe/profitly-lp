import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[#f4f4f4]">
      <div className="max-w-7xl">
        <div className="flex items-center pt-5 h-20 sm:justify-center lg:justify-start">
          {/* Logo in the center */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Profitly Logo"
              width={120}
              height={30}
              className="h-30 w-auto"
              priority
            />
          </div>

        </div>
      </div>
    </header>
  );
}

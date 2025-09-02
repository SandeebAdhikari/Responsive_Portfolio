"use client";
import FadeRight from "@/components/animations/FadeRight";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import ContactCard from "./ContactCard";

const ContactMe = () => {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebounced = useDebounceValue(isMobile, 600);
  const email = "sandeebadhikari@gmail.com";

  return (
    <div className="flex flex-col md:px-56 md:flex-row w-full items-center  gap-8 md:gap-8 lg:gap-8 ">
      {/* Left side */}
      <div className="flex-1 flex justify-center md:justify-start">
        <FadeRight duration={1} whileInView={!isMobileDebounced}>
          <div>
            <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-bold text-center md:text-center mt-6">
              Want to <br /> start <br /> a new <br />
              Project?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mt-4 text-center md:text-center">
              Or just say hello.
            </p>
          </div>
        </FadeRight>
      </div>

      {/* Right side (Contact Card) */}
      <div className="flex-1 w-full max-w-lg">
        <ContactCard email={email} />
      </div>
    </div>
  );
};

export default ContactMe;

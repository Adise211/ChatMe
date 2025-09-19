import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  // Default breakpoint for mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;

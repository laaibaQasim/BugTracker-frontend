import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 480);
  const [isBigScreen, setIsBigScreen] = useState(
    () => window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsBigScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {isMobile, isBigScreen};
};

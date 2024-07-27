import { useEffect, useState } from "react";

interface Breakpoints {
  [key: number]: string;
}

const breakpoints: Breakpoints = {
  0: "xs",
  640: "sm",
  768: "md",
  1024: "lg",
  1280: "xl",
};

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useBreakpoint = (): string => {
  const [breakpoint, setBreakPoint] = useState<string>("");
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    const determineBreakpoint = () => {
      if (windowSize.width !== undefined) {
        if (windowSize.width < 640) {
          setBreakPoint(breakpoints[0]);
        } else if (windowSize.width < 768) {
          setBreakPoint(breakpoints[640]);
        } else if (windowSize.width < 1024) {
          setBreakPoint(breakpoints[768]);
        } else if (windowSize.width < 1280) {
          setBreakPoint(breakpoints[1024]);
        } else {
          setBreakPoint(breakpoints[1280]);
        }
      }
    };

    determineBreakpoint();

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return breakpoint;
};

export default useBreakpoint;

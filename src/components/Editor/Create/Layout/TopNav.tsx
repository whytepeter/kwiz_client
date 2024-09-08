import { Button } from "@/components/ui/button";
import { useBreakpoint } from "@/hooks/useBreakpoint";

import React from "react";

export default function TopNav() {
  const breakpoint = useBreakpoint();

  return (
    <div className="w-full  bg-accent px-3 py-2 rounded-xl flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <h3 className="text-xs md:text-sm">
          Total Points: <span className="text-secondary font-medium">15</span>{" "}
        </h3>

        <div className="flex items-center gap-3">
          <span className="w-5 flex-shrink-0 cursor-pointer ">
            <img src="/icons/mobile.svg" alt="" />
          </span>
          <span className="w-5 flex-shrink-0 cursor-pointer ">
            <img src="/icons/cog.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="xsmall"
          className={`${breakpoint.sm && "w-9 h-9"}`}
        >
          <i className="pi pi-eye" />
          <span className="hidden md:inline"> Preview</span>
        </Button>
        <Button size="xsmall" className={`${breakpoint.sm && "w-9 h-9"}`}>
          <img src="/icons/publish.svg" alt="" />
          <span className="hidden md:inline">Publish</span>
        </Button>
      </div>
    </div>
  );
}

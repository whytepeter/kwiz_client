import { Button } from "@/components/ui/button";
import React from "react";

export default function TopNav() {
  return (
    <div className="bg-accent px-4 py-2 rounded-xl flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <h3 className="text-xs">
          Total Points: <span className="text-secondary font-medium">15</span>{" "}
        </h3>

        <div className="flex items-center gap-2">
          <i className="pi pi-mobile cursor-pointer" />
          <i className="pi pi-cog cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="xsmall">
          <i className="pi pi-eye" />
          Preview
        </Button>
        <Button size="xsmall">
          <i className="pi pi-upload" />
          Publish
        </Button>
      </div>
    </div>
  );
}

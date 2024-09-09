import React, { useState } from "react";
import Content from "../Content/Content";
import ThemeGallery from "@/components/Themes/ThemeGallery";

export default function RightSidebar() {
  const [tab, setTab] = useState("content");
  const tabItems = ["content", "design"];

  return (
    <div className="border rounded-lg w-full overflow-hidden text-sm">
      <div className="bg-accent p-4 grid grid-cols-2 gap-2">
        {tabItems.map((item) => (
          <span
            onClick={() => setTab(item)}
            className={`${
              tab === item ? "text-secondary" : ""
            } cursor-pointer capitalize`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {tab === "content" && <Content />}
        {tab === "design" && <ThemeGallery />}
      </div>
    </div>
  );
}

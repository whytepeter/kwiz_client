import React, { useState } from "react";

export default function EditorTabs() {
  const [active, setActive] = useState("Create");
  const tabItems = [
    {
      title: "Create",
      route: "",
    },
    {
      title: "Share",
      route: "",
    },
    {
      title: "Result",
      route: "",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4 w-full">
      {tabItems.map((tab) => (
        <div
          onClick={() => setActive(tab.title)}
          className={`${
            active == tab.title
              ? "text-secondary"
              : "font-light text-secondary-dark"
          } cursor-pointer p-2`}
          key={tab.title}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
}

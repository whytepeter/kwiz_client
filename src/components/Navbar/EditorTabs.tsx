import { ListType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function EditorTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "create";
  const tabItems: ListType[] = [
    {
      label: "Create",
      value: "create",
    },
    {
      label: "Share",
      value: "share",
    },
    {
      label: "Result",
      value: "result",
    },
  ];

  const setTab = (item: ListType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", item.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 w-full">
      {tabItems.map((item) => (
        <div
          onClick={() => setTab(item)}
          className={`${
            tab == item.value
              ? "text-secondary"
              : "font-light text-secondary-dark"
          } cursor-pointer p-2`}
          key={item.label}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

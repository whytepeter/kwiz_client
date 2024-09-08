"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import Create from "@/components/Editor/Create/Index";
import Share from "@/components/Editor/Share/Index";
import Result from "@/components/Editor/Result/Index";

export default function page() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="container px-3">
      {tab === "create" && <Create />}
      {tab === "share" && <Share />}
      {tab === "result" && <Result />}
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Create from "@/components/Editor/Create/Index";
import Share from "@/components/Editor/Share/Index";
import Result from "@/components/Editor/Result/Index";
import Loader from "@/components/base/Loader";

import useQuiz from "@/hooks/useQuiz";

export default function page() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const { initializeQuiz, loading } = useQuiz();

  useEffect(() => {
    initializeQuiz();
  }, []);

  return (
    <div className="container px-3">
      {tab === "create" && <Create />}
      {tab === "share" && <Share />}
      {tab === "result" && <Result />}

      <Loader loading={loading} loadingText="We are preparing things for you" />
    </div>
  );
}

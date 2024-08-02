"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    redirect("/dashboard/workspace");
  }, []);

  return <div className="text-center w-full ">Redirecting..</div>;
}

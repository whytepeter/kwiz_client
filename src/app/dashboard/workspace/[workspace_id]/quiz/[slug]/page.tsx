"use client";
import React from "react";
import { useParams } from "next/navigation";
import EditorLayout from "@/components/Editor/EditorLayout";

export default function page() {
  const params = useParams<{ slug: string }>();

  return (
    <>
      <EditorLayout />
    </>
  );
}

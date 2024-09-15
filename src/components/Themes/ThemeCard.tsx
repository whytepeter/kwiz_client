import { Theme } from "@/types/quiz";
import React from "react";

interface Props {
  theme: Theme;
}

export default function ThemeCard({ theme }: Props) {
  return <div className="mx-auto border ">ThemeCard</div>;
}

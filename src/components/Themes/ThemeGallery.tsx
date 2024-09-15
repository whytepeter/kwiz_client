import { useDataStore } from "@/store/store";
import React from "react";
import ThemeCard from "./ThemeCard";

export default function ThemeGallery() {
  const { themes } = useDataStore();

  return (
    <div className="p-4 space-y-3">
      <h5>Theme Gallery</h5>

      {themes.map((theme) => (
        <ThemeCard theme={theme} key={theme._id} />
      ))}
    </div>
  );
}

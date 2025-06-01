import { cn } from "@/lib/utils";
import { useDataStore } from "@/store/store";
import { Theme } from "@/types/quiz";
import React from "react";

interface Props {
  theme: Theme;
  isActive: boolean;
  setActive: (theme: Theme) => void;
}

export default function ThemeCard({ theme, isActive, setActive }: Props) {
  const { colors } = theme;

  return (
    <div
      style={{
        fontFamily: theme?.fontName,
      }}
      onClick={() => setActive(theme)}
      className={cn(
        "cursor-pointer relative flex-shrink-0 mx-auto w-full rounded-lg overflow-hidden",
        isActive ? "border-[3px] border-secondary" : ""
      )}
    >
      {theme?.isPremium && (
        <div className=" absolute top-3 right-3">
          <img src="/icons/premium_1.svg" alt="" />
        </div>
      )}

      <div
        style={{
          background: theme?.image
            ? `url(${theme.image}) no-repeat center/cover, ${
                colors?.background || "#fff"
              }`
            : colors?.background || "#fff",
        }}
        className="p-4  space-y-1"
      >
        <div className="">
          <h2 style={{ color: colors?.heading }}>Question</h2>
          <span
            style={{ color: colors?.option }}
            className="font-light text-xs text-dark-200"
          >
            Answer
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            style={{ background: colors?.buttonContainer }}
            className=" opacity-10 h-4 w-4  rounded"
          ></div>
          <div
            style={{ background: colors?.buttonContainer }}
            className="h-4 w-12  rounded"
          ></div>
        </div>
      </div>
      <div className="px-4 py-2.5 text-xs text-dark-200 font-light ">
        {theme?.title}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

interface PropType {
  color?: string;
  size?: number;
  width?: number;
}

export default function Spinner({
  color = "white",
  size = 20,
  width = 2.5,
}: PropType) {
  const spinnerStyle = {
    borderColor: color,
    height: size,
    width: size,
    borderWidth: width,
  };

  //
  return (
    <div className="relative ">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          style={{
            ...spinnerStyle,
            borderTopColor: "transparent",
          }}
          className=" border-solid  rounded-full animate-spin"
        ></div>
      </span>

      <span className="absolute  opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          style={{ ...spinnerStyle, borderBottomColor: "transparent" }}
          className=" border-solid   rounded-full animate-spin"
        ></div>
      </span>
    </div>
  );
}

import { cn } from "@/lib/utils";
import React from "react";

interface PropType {
  color?: string;
  size?: number;
  width?: number;
}

export default function Spinner({
  color = "#310A31",
  size = 20,
  width = 2.5,
}: PropType) {
  const sizeStyle = {
    height: size,
    width: size,
  };
  const spinnerStyle = {
    borderColor: color,
    ...sizeStyle,
    borderWidth: width,
  };

  //
  return (
    <div style={sizeStyle} className="relative ">
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

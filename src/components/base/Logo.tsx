import React from "react";
import { cn } from "@/lib/utils";

type PropsType = {
  text?: boolean;
  className?: string;
  onClick?: () => void;
};

function Logo({ text = true, className, onClick }: PropsType) {
  const logoStyles = cn(
    "flex-shrink-0 cursor-pointer w-14 rounded-xl text-xl font-light flex justify-center items-center",
    text ? "w-28" : "w-14 rounded-lg overflow-hidden",
    className
  );
  return (
    <div onClick={onClick} className={logoStyles}>
      <img
        src={text ? "/icons/logo_text.svg" : "/icons/logo.svg"}
        alt="Kwiz"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Logo;

"use client";
import React from "react";

type PropTypes = {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "Oops",
  description = "Nothing here",
  icon,
  className,
  children,
}: PropTypes) {
  return (
    <div className="flex flex-col items-center gap-2 py-10">
      <div>
        <img src="/img/empty.png" className="h-20" alt="" />
      </div>
      <h3 className="text-lg sm:text-xl text-secondary-dark  font-light">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-dark-200 mb-1 font-light">
        {description}
      </p>
      {children}
    </div>
  );
}

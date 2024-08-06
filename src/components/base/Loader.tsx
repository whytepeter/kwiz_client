"use client";
import React from "react";
import Spinner from "./Spinner";
import { useDataStore } from "@/store/store";

export default function Loader() {
  const { loading, loadingText } = useDataStore();
  if (!loading) return null;
  return (
    <div className="fixed inset-0 h-screen w-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-4 rounded-xl w-fit h-auto flex flex-col gap-2 items-center">
        <span>
          <Spinner size={30} />
        </span>
        {loadingText ? (
          <span className="text-xs font-light sm:text-sm text-primary">
            {loadingText}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

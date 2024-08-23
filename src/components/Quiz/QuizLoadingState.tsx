import { useDataStore } from "@/store/store";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import Spinner from "../base/Spinner";

export default function QuizLoadingState() {
  const { quizDisplay } = useDataStore();

  if (quizDisplay === "LIST")
    return (
      <div className="flex flex-col gap-6 py-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white border border-light px-3 py-2 rounded-xl overflow-hidden"
          >
            <div className="flex flex-1 items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-6 w-[80px] sm:w-[120px]" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-6 sm:w-10" />
              <Skeleton className="h-4 w-16 sm:w-28" />
              <Skeleton className="h-4 w-6 sm:w-10" />
            </div>
          </div>
        ))}
      </div>
    );

  if (quizDisplay === "GRID")
    return (
      <div className="py-4 w-full md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="w-10/12 mx-auto space-y-2 border border-light p-3 rounded-xl"
          >
            <div className="w-full h-24"></div>
            <Skeleton className="h-4  w-full " />
            <Skeleton className="h-4  w-10/12 " />
          </div>
        ))}
      </div>
    );
  return (
    <div className="flex items-center justify-center p-4">
      <Spinner />
    </div>
  );
}

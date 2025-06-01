"use client";
import React, { useState } from "react";
import Profile from "./Profile";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Notification from "../Notification/Index";
import EditorTabs from "./EditorTabs";
import WorkspaceList from "./WorkspaceList";
import QuizTitle from "../Quiz/QuizTitle";
import AddQuiz from "../Quiz/AddQuiz";

export default function Navbar() {
  const pathname = usePathname();
  const showTabs = pathname.includes("/quiz/");
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-10 left-0 top-0  w-full text-sm bg-white/30 backdrop-blur-md">
      <div className="container relative flex items-center justify-between gap-4 px-3 py-2.5">
        <div className="flex items-center gap-1">
          <WorkspaceList />
          {pathname?.includes("quiz") && <QuizTitle />}
        </div>

        {showTabs && (
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <EditorTabs />
          </div>
        )}

        <div className="flex items-center gap-4">
          {!showTabs && (
            <Button
              onClick={() => setOpen(true)}
              size="xsmall"
              className=" px-4"
            >
              <i className="pi pi-plus" />
              Create Quiz
            </Button>
          )}
          {/* <Button size="xsmall" className=" px-4">
            View Plans
          </Button> */}

          <Notification />

          <Profile />
        </div>
      </div>

      {showTabs && (
        <div className="flex md:hidden">
          <EditorTabs />
        </div>
      )}

      <AddQuiz open={open} setOpen={setOpen} />
    </nav>
  );
}

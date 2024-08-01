"use client";
import React from "react";
import Profile from "./Profile";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Notification from "../Notification/Index";
import EditorTabs from "./EditorTabs";
import WorkspaceList from "./WorkspaceList";

export default function Navbar() {
  const pathname = usePathname();
  const showTabs = pathname.includes("/quiz/editor");

  return (
    <nav className="fixed left-0 top-0  w-full text-sm bg-white/30 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 px-3 py-2.5">
        <WorkspaceList />

        {showTabs && (
          <div className="hidden md:flex">
            <EditorTabs />
          </div>
        )}

        <div className="flex items-center gap-4">
          <Button size="xsmall" className=" px-4">
            View Plans
          </Button>

          <Notification />

          <Profile />
        </div>
      </div>

      {showTabs && (
        <div className="flex md:hidden">
          <EditorTabs />
        </div>
      )}
    </nav>
  );
}

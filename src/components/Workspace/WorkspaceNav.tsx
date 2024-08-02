import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDataStore } from "@/store/store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListType, QuizDisplay } from "@/types";
import WorkspaceForm from "./WorkspaceForm";

export type DisplayItem = ListType & {
  value: QuizDisplay;
  active?: string;
};

const workspaceOptions = ["Rename", "Leave", "Delete"] as const;

const sortOptions: ListType[] = [
  {
    label: "Date created",
    value: "createdAt",
    icon: "/icons/calendar.svg",
  },
  {
    label: "Last updated",
    value: "updatedAt",
    icon: "/icons/edit.svg",
  },
  {
    label: "Alphabetical",
    value: "title",
    icon: "/icons/sort.svg",
  },
];

const displayOptions: DisplayItem[] = [
  {
    label: "List",
    value: "LIST",
    icon: "/icons/list.svg",
    active: "/icons/list_active.svg",
  },
  {
    label: "Grid",
    value: "GRID",
    icon: "/icons/workspace.svg",
    active: "/icons/workspace_active.svg",
  },
];

export default function WorkspaceNav() {
  const { selectedWorkspace, quizDisplay } = useDataStore();

  const [editModal, setEditModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState<ListType>(sortOptions[0]);

  const setDisplay = (val: QuizDisplay): void => {
    useDataStore.setState({
      quizDisplay: val,
    });
  };

  const handleClick = (val: (typeof workspaceOptions)[number]): void => {
    if (val == "Rename") {
      setEditModal(true);
    }
  };

  return (
    <>
      <div className="w-full border-y ">
        <div className="container flex items-center justify-between gap-4 p-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 ">
              <h3 className="text-sm sm:text-base text-secondary-dark">
                {selectedWorkspace?.title}
              </h3>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img
                    className="cursor-pointer"
                    src="/icons/dots.svg"
                    alt=""
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-24 mt-2 bg-white/30 backdrop-blur-md">
                  <DropdownMenuGroup className="max-h-44 overflow-auto">
                    {workspaceOptions.map((item) => (
                      <DropdownMenuItem
                        onClick={() => handleClick(item)}
                        className={`${
                          item == "Delete" ? "text-error-dark" : ""
                        } font-light gap-2 py-2`}
                        key={item}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button
              className="!text-dark-300 !text-sm hover:!bg-dark-50/30"
              color="white"
              size="xsmall"
            >
              <img src="/icons/invite.svg" alt="" />
              <span className="hidden md:flex">Invite</span>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src={sortBy?.icon} alt="" />
                  <span className="hidden sm:flex text-sm text-dark-300 ">
                    {sortBy?.label}
                  </span>
                  <span
                    className={`${
                      !open ? "-rotate-90" : ""
                    } transition-transform transform `}
                  >
                    <img src="/icons/arrow_down.svg" alt="" />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 mt-2 bg-white/30 backdrop-blur-md">
                <DropdownMenuGroup className="max-h-44 overflow-auto">
                  {sortOptions.map((item) => (
                    <DropdownMenuItem
                      onClick={() => setSortBy(item)}
                      className="font-light gap-2 py-2"
                      key={item.label}
                    >
                      <img src={item.icon} alt="" />
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="grid grid-cols-2 rounded-lg border overflow-hidden">
              {displayOptions.map((item) => (
                <div
                  onClick={() => setDisplay(item.value)}
                  className={`${
                    item.value == quizDisplay
                      ? "text-secondary-dark bg-accent"
                      : "text-dark-300"
                  } flex items-center gap-2 p-1.5 text-sm cursor-pointer`}
                  key={item.label}
                >
                  <img
                    className="w-4.5"
                    src={item.value == quizDisplay ? item.active : item.icon}
                    alt=""
                  />
                  <span className="hidden md:flex">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WorkspaceForm edit open={editModal} setOpen={setEditModal} />
    </>
  );
}

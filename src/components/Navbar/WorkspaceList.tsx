import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Workspace } from "@/types";
import { useDataStore } from "@/store/store";

export default function WorkspaceList() {
  const [open, setOpen] = useState(false);

  const { selectedWorkspace, workspaces } = useDataStore();

  const setSelected = (workspace: Workspace) => {
    if (workspace._id === selectedWorkspace?._id) return;
    useDataStore.setState({
      selectedWorkspace: workspace,
    });
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/icons/workspace_active.svg" alt="" />
          {selectedWorkspace?.title}

          <span
            className={`${
              !open ? "-rotate-90" : ""
            } transition-transform transform `}
          >
            <img src="/icons/arrow_down.svg" alt="" />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48  mt-2 bg-white/30 backdrop-blur-md">
        <DropdownMenuGroup className="max-h-44 overflow-auto">
          {workspaces.map((item) => (
            <DropdownMenuItem
              onClick={() => setSelected(item)}
              className={`${
                item._id === selectedWorkspace?._id ? "text-secondary" : ""
              } font-light gap-2 py-2`}
              key={item.title}
            >
              <img
                src={
                  item._id === selectedWorkspace?._id
                    ? "/icons/workspace_active.svg"
                    : "/icons/workspace.svg"
                }
                alt=""
              />
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 text-secondary">
          <i className="pi pi-plus-circle text-secondary" />
          Add New
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

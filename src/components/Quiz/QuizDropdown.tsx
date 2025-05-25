import { Quiz } from "@/types/quiz";
import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ListType } from "@/types";
import { copyText } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { ROUTES } from "@/types/routes";
import AddQuiz from "./AddQuiz";

const dropdown: ListType[] = [
  {
    label: "Open",
    value: "open",
  },
  {
    label: "Copy Link",
    value: "copy",
  },
  {
    label: "Share",
    value: "share",
  },
  {
    label: "Result",
    value: "result",
  },
  {
    label: "Rename",
    value: "rename",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

interface PropsType {
  children: React.ReactNode;
  quiz: Quiz;
}
const BASE_URL = window.location.origin;
export default function QuizDropdown({ children, quiz }: PropsType) {
  const [open, setOpen] = useState(false);
  const { workspace_id } = useParams<{ workspace_id: string }>();
  const router = useRouter();

  const handleClick = (item: ListType) => {
    switch (item.value) {
      case "open":
        router.push(`${ROUTES.Workspace}/${workspace_id}/quiz/${quiz._id}`);
        break;
      case "copy":
        const link = `${BASE_URL}/quiz/${quiz._id}`;
        copyText(link);
        break;
      case "share":
        console.log(item.value);
        break;
      case "result":
        router.push(
          `${ROUTES.Workspace}/${workspace_id}/quiz/${quiz._id}?tab=result`
        );
        break;
      case "rename":
        setOpen(true);
        break;
      case "delete":
        console.log(item.value);
        break;
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-28  bg-white/30 backdrop-blur-md">
          <DropdownMenuGroup className=" overflow-auto">
            {dropdown.map((item) => (
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(item);
                }}
                className={`${
                  item.value == "delete" ? "text-error-dark" : ""
                } font-light gap-2 py-2`}
                key={item.value}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {open && <AddQuiz edit quiz={quiz} open={open} setOpen={setOpen} />}
    </>
  );
}

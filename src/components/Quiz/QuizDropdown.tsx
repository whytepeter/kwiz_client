import { Quiz } from "@/types/quiz";
import React from "react";

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
    label: "Duplicate",
    value: "duplicate",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

interface PropsType {
  children: React.ReactNode;
  quiz?: Quiz;
}

export default function QuizDropdown({ children, quiz }: PropsType) {
  const params = useParams<{ workspace_id: string }>();
  const router = useRouter();

  const handleClick = (item: ListType) => {
    switch (item.value) {
      case "open":
        router.push(`${params.workspace_id}/quiz/123456`);
        break;
      case "copy":
        copyText(item.value, "Link copied to clipboard");
        break;
      case "share":
        console.log(item.value);
        break;
      case "result":
        console.log(item.value);
        break;
      case "duplicate":
        console.log(item.value);
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
                onClick={() => handleClick(item)}
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
    </>
  );
}

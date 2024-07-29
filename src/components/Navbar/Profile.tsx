import React from "react";
import { initials } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type DropDownType = {
  title: string;
  icon: string;
  route?: string;
};

const dropdownItems: DropDownType[] = [
  {
    title: "Account Settings",
    icon: "/icons/setting.svg",
    route: "/dashboard/settings",
  },
  {
    title: "Quick Help",
    icon: "/icons/messages.svg",
    route: "/dashboard/help",
  },
  {
    title: "Contact Support",
    icon: "/icons/call.svg",
    route: "/dashboard/support",
  },
  {
    title: "Refer Friends",
    icon: "/icons/happy.svg",
    route: "/dashboard/referral",
  },
];

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden text-secondary-dark font-semibold bg-accent-100 flex items-center justify-center">
            {initials(user.name)}
          </div>

          <div className="flex flex-col ">
            <h4 className="text-sm">{user?.name}</h4>
            <span className="text-xs text-dark-300">{user?.email}</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-1 bg-white/30 backdrop-blur-md">
        <DropdownMenuGroup>
          {dropdownItems.map((item) => (
            <DropdownMenuItem
              className="font-light gap-2 py-2"
              key={item.title}
            >
              <img src={item.icon} />
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 text-secondary">
          <img src="/icons/logout.svg" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

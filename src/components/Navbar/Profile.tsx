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
import { useDataStore } from "@/store/store";
import useAuth from "@/hooks/useAuth";

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
  const { user } = useDataStore();
  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 rounded-full overflow-hidden text-secondary-dark font-semibold bg-accent-100 flex items-center justify-center">
            {initials(user?.name!)}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-1 mr-2 bg-white/30 backdrop-blur-md">
        <DropdownMenuItem
          onClick={logout}
          className="gap-2 text-secondary rounded"
        >
          <div className="hidden md:flex flex-col max-w-44">
            <h4 className="text-sm truncate">{user?.name}</h4>
            <div className=" text-xs text-dark-300 truncate">{user?.email}</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dropdownItems.map((item) => (
            <DropdownMenuItem
              className="font-light gap-2 py-2 rounded"
              key={item.title}
            >
              <img src={item.icon} />
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={logout}
          className="gap-2 text-secondary rounded"
        >
          <img src="/icons/logout.svg" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

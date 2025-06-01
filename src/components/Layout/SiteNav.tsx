import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../base/Logo";

export default function SiteNav() {
  return (
    <nav className="sticky-0 left-0 top-0 w-full bg-accent/80 backdrop-blur-sm ">
      <div className="flex items-center justify-between gap-4 px-4 py-5 container mx-auto">
        <Logo />
        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="text" className="px-4" size="small">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="px-4" size="small">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

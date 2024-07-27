import LoginForm from "@/components/Auth/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="container  w-full  min-h-screen flex flex-col ">
      <nav className="flex  justify-end items-center gap-3 py-4 text-sm sm:text-base ">
        <span className="text-primary">New to Kwiz?</span>
        <Link href="/auth/register">
          <Button
            color="secondary"
            className="px-4"
            variant="outline"
            size="small"
          >
            Sign up
          </Button>
        </Link>
      </nav>

      <div className="h-full flex-1 w-full flex items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}

export default page;

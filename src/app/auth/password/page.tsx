import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="container  w-full  min-h-screen flex flex-col ">
      <nav className="flex  justify-end items-center gap-3 py-4 text-sm sm:text-base ">
        <span className="text-primary">Go back to?</span>
        <Link href="/auth/login">
          <Button
            color="secondary"
            className="px-4"
            variant="outline"
            size="small"
          >
            Login
          </Button>
        </Link>
      </nav>

      <div className="h-full flex-1 w-full flex items-center justify-center">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}

export default page;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

import PasswordPage from "@/components/Auth/PasswordPage";

function page() {
  return (
    <main className="container  w-full  min-h-screen flex flex-col ">
      <nav className="flex  justify-end items-center gap-3 py-4 text-sm sm:text-base ">
        <span className="text-primary font-light">Go back to?</span>
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

      <Suspense fallback={<div>Loading...</div>}>
        <PasswordPage />
      </Suspense>
    </main>
  );
}

export default page;

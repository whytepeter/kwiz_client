import RegistrationForm from "@/components/Auth/RegistrationForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="grid md:grid-cols-2  w-full  min-h-screen ">
      <div className="hidden md:flex items-center justify-center bg-primary text-accent">
        <div className="w-full max-w-xl  aspect-square">
          <img
            src="/signup_bg.png"
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </div>
      <div className="container flex-1 h-full flex flex-col">
        <nav className="flex  justify-end items-center gap-3 py-4 text-sm sm:text-base ">
          <span className="text-primary">Already have an account? ?</span>
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
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
}

export default page;

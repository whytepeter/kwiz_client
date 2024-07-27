"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../base/Logo";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submit}
      className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-4"
    >
      <Logo className="mx-auto" />

      <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
        Create any kind of quiz with <br /> 28 quiz question types
      </h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-sm font-light">
          Full name
        </label>
        <TextInput id="fullName" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-light">
          Email
        </label>
        <TextInput
          id="email"
          type="email"
          inputMode="email"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-light">
          Password
        </label>
        <TextInput
          id="password"
          placeholder="At least 8 characters"
          type={showPassword ? "text" : "password"}
          righIcon={
            showPassword ? (
              <i className="pi pi-eye-slash text-dark-200 text-lg" />
            ) : (
              <i className="pi pi-eye text-dark-200 text-lg" />
            )
          }
          rightIconClick={() => {
            setShowPassword((prev) => !prev);
          }}
          disabled={loading}
        />
      </div>

      <div className="flex  gap-2">
        <Checkbox
          checked={accept}
          onCheckedChange={(e: boolean) => setAccept(e)}
        />
        <div className="text-sm text-secondary font-light mb-1.5">
          I agree to Kwiz’s
          <Link className="underline " href="">
             Terms of Service 
          </Link>
          , and{" "}
          <Link className="underline " href="">
            Privacy Policy
          </Link>
        </div>
      </div>

      <Button loading={loading} block>
        Create my free account
      </Button>
    </form>
  );
}

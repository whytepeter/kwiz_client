"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../base/Logo";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={submit}
      className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-5"
    >
      <Logo className="mx-auto" />

      <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
        Forgot Password
      </h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-base font-light">
          Email
        </label>
        <TextInput
          id="email"
          type="email"
          inputMode="email"
          placeholder="Enter email"
          hint="Type the address linked to your account and we'll send you password reset instructions. They might end up in your spam folder, so please check there as well."
        />
      </div>

      <Button loading={loading} block>
        Send Instruction
      </Button>
    </form>
  );
}

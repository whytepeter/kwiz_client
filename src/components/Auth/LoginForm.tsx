"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../base/Logo";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
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
        Hello, who’s this?
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
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-base font-light">
          Password
        </label>
        <TextInput
          id="password"
          placeholder="Enter password"
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

      <Link
        className="text-sm underline text-secondary font-light mb-1.5"
        href="/auth/password"
      >
        Forgot Password?
      </Link>

      <Button loading={loading} block>
        Login to Kwiz
      </Button>
    </form>
  );
}

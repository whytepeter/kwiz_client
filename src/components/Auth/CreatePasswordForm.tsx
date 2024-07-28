"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Logo from "../base/Logo";

export default function CreatePasswordForm() {
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
        Create Password
      </h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-base font-light">
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
      <div className="flex flex-col gap-1">
        <label htmlFor="confirm_password" className="text-base font-light">
          Confirm Password
        </label>
        <TextInput
          id="confirm_password"
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

      <Button loading={loading} block>
        Submit
      </Button>
    </form>
  );
}

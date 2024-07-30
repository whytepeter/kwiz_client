"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../base/Logo";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/types/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    //Login user
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-3.5"
      >
        <Logo className="mx-auto" />

        <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
          Hello, who’s this?
        </h2>

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <TextInput
                  error={error ? String(error.message) : ""}
                  placeholder="Enter email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
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
                  error={error ? String(error.message) : ""}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Link
          className="text-sm underline text-secondary font-light mb-1.5"
          href="/auth/password"
        >
          Forgot Password?
        </Link>

        <Button type="submit" loading={loading} block>
          Login to Kwiz
        </Button>
      </form>
    </Form>
  );
}

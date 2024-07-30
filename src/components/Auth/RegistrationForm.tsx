"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../base/Logo";
import { Checkbox } from "@/components/ui/checkbox";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterFormSchema } from "@/types/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    //Login user
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-3"
      >
        <Logo className="mx-auto" />

        <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
          Create any kind of quiz with <br /> 28 quiz question types
        </h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <TextInput
                  id="name"
                  placeholder="John Doe"
                  error={error ? String(error.message) : ""}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

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

        <Button type="submit" loading={loading} block>
          Create my free account
        </Button>
      </form>
    </Form>
  );
}

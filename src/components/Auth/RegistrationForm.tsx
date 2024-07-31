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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signUp } = useAuth();

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      accept: false,
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    try {
      setLoading(true);

      const { accept, ...payload } = values;

      await signUp(payload);
      toast.success("Resigration successful");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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

        <FormField
          control={form.control}
          name="accept"
          render={({ field }) => (
            <FormItem className="flex flex-row  space-x-2 space-y-0 my-1">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <div className="flex flex-col">
                <FormDescription className=" text-sm text-secondary font-light ">
                  I agree to Kwiz’s
                  <Link className="underline " href="">
                     Terms of Service 
                  </Link>
                  , and{" "}
                  <Link className="underline " href="">
                    Privacy Policy
                  </Link>
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" loading={loading} block>
          Create my free account
        </Button>
      </form>
    </Form>
  );
}

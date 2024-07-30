"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
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

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    //Login user
    console.log(values);
    router.push("/login");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-5"
      >
        <Logo className="mx-auto" />

        <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
          Forgot Password
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
                  type="email"
                  inputMode="email"
                  hint="Type the address linked to your account and we'll send you password reset instructions. They might end up in your spam folder, so please check there as well."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" loading={loading} block>
          Send Instruction
        </Button>
      </form>
    </Form>
  );
}

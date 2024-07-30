"use client";
import React, { FormEvent, useState } from "react";
import TextInput from "@/components/base/TextInput";
import { Button } from "@/components/ui/button";
import Logo from "../base/Logo";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreatePasswordFormSchema } from "@/types/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

export default function CreatePasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof CreatePasswordFormSchema>>({
    resolver: zodResolver(CreatePasswordFormSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof CreatePasswordFormSchema>) {
    //Create new password
    console.log(values);
    router.push("/login");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  max-w-sm mx-auto   text-dark-300 flex flex-col gap-3.5"
      >
        <Logo className="mx-auto" />

        <h2 className="text-secondary-dark text-center text-[1.25rem] font-light">
          Create Password
        </h2>

        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
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
                  error={error ? String(error.message) : ""}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
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
                  error={error ? String(error.message) : ""}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="mt-1.5" type="submit" loading={loading} block>
          Submit
        </Button>
      </form>
    </Form>
  );
}

import { PASSWORD_RULE } from "@/lib/constant";
import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .describe("Email")
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .describe("Password")
    // .regex(PASSWORD_RULE, {
    //   message:
    //     "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
    // })
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
});

export const RegisterFormSchema = z.object({
  name: z.string().describe("Full name").min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .describe("Email")
    .email({ message: "Invalid email address" }),
  password: z.string().describe("Password").min(8, {
    message: "Password must be at least 8 characters.",
  }),
  accept: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    })
    .describe("Terms and Conditions"),
});

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string()
    .describe("Email")
    .email({ message: "Invalid email address" }),
});

export const CreatePasswordFormSchema = z
  .object({
    password: z.string().describe("Password").min(8, {
      message: "Password must be at least 8 characters.",
    }),

    confirm_password: z.string().describe("Confirm Password").min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match.",
    path: ["confirm_password"],
  });

export const workspaceSchema = z.object({
  title: z.string().describe("Title").min(3, {
    message: "Title must be at least 3 characters.",
  }),
});

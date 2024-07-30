"use client";
import React from "react";
import CreatePasswordForm from "./CreatePasswordForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useSearchParams } from "next/navigation";

export default function PasswordPage() {
  const searchParams = useSearchParams();
  const showCreatePassword = searchParams.get("page") == "create_password";

  return (
    <div className="h-full flex-1 w-full flex items-center justify-center">
      {showCreatePassword ? <CreatePasswordForm /> : <ForgotPasswordForm />}
    </div>
  );
}

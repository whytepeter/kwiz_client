"use client";
import Navbar from "@/components/Navbar/Index";
import { useDataStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { isLogin } = useDataStore();

  useEffect(() => {
    setLoading(false);

    if (!loading && !isLogin) {
      router.replace("/auth/login");
    }
  }, [isLogin]);

  if (!isLogin) return null;

  return (
    <main className="relative">
      <Navbar />
      <div className="mt-[4rem]">{children}</div>
    </main>
  );
}

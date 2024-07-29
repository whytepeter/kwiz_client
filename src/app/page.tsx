import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-4  p-24">
      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
      <Link href="/admin">
        <Button>Dashboard</Button>
      </Link>
    </main>
  );
}

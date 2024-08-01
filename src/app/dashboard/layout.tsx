import Navbar from "@/components/Navbar/Index";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-screen relative">
      <Navbar />
      <div className="mt-[4rem]">{children}</div>
    </main>
  );
}

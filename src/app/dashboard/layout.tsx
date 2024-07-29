import Navbar from "@/components/Navbar/Index";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-screen relative">
      <Navbar />
      <div className="mt-[4.5rem]">{children}</div>
    </main>
  );
}

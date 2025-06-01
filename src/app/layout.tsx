import type { Metadata } from "next";
import "./globals.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as Toast } from "react-hot-toast";
import { fonts } from "@/lib/font";

export const metadata: Metadata = {
  title: "Kwiz : The best online quiz editor",
  description: "An online quiz editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const PrimeConfig = {
    ripple: true,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Orbitron:wght@400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-white">
        <PrimeReactProvider value={PrimeConfig}>
          <main>{children}</main>
          <Toaster />
          <Toast
            toastOptions={{
              className: "",
              style: {
                fontSize: 14,
              },
            }}
          />
        </PrimeReactProvider>
      </body>
    </html>
  );
}

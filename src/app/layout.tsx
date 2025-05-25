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
    <html
      lang="en"
      className={`
      ${fonts.Inter.variable}
      ${fonts.Poppins.variable}
      ${fonts["Roboto Slab"].variable}
      ${fonts["Open Sans"].variable}
      ${fonts["Playfair Display"].variable}
      ${fonts.Lora.variable}
      ${fonts.Montserrat.variable}
      ${fonts.Orbitron.variable}
    `}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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

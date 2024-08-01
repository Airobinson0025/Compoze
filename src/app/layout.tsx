import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import AuthProvider from "@/components/providers/auth-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compozed",
  description: "Intellignently Organize and Elevate Your Website Design Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider >
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

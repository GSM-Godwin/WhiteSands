import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({ weight: ["100","300","400","500","700","900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitesands Agency",
  description: "Whitesands Agency is a global leading logistics provider that provides innovative suply chain solutions for a multitude of industries worldwide.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={roboto.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}

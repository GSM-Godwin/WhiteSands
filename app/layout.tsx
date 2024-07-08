import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";
import ClientProviders from "@/components/frontend/ClientProviders";

const roboto = Roboto({ weight: ["100","300","400","500","700","900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitesands Agency",
  description: "Whitesands Agency is a global leading logistics provider that provides innovative supply chain solutions for a multitude of industries worldwide.",
  icons: {
    icon: "/assets/footer-logo.jpg"
  }
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
        <head>
          <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCL6fMXy4J0P7Dh7k2JaZcKlg5yAkpBww&region=fr&libraries=places,geometry"></script>
        </head>
        <body className={roboto.className}>
          <ClientProviders>
            <Toaster />
            {children}
          </ClientProviders>
        </body>
      </html>
    </SessionProvider>
  );
}

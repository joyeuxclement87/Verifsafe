import type { Metadata } from "next";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verifsafe - Fire Protection Solutions in Rwanda",
  description: "Fire protection solutions for businesses and buildings in Rwanda. We supply, install, inspect, and maintain certified fire safety equipment and protection systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

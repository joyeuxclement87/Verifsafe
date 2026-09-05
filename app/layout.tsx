import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fire Protection & Safety Equipment in Rwanda | VerifSafe",
    template: "%s | VerifSafe",
  },
  description:
    "VerifSafe provides fire safety equipment, fire alarm systems, installation, inspection, maintenance and fire protection services across Rwanda.",
  metadataBase: new URL("https://verifsafe.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable}`}>
      <body className="min-h-full flex flex-col">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

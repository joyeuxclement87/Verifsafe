import type { Metadata } from "next";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

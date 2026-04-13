import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verifisafe - Fire Protection Solutions Rwanda",
  description: "Reliable fire safety equipment supply, installation, and maintenance services in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Top Info Bar */}
        <TopBar />
        
        {/* Main Navigation Bar */}
        <MainNavigation />
        
        {/* Main content with top padding to account for fixed bars */}
        {/* Top bar: 48px (h-12), Navbar: 112px (h-28) */}
        <div className="pt-40 flex-1">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

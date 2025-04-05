"use client";

import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { BottomNavbar } from "@/components/ui/bottom-navbar";
import { Footer } from "@/components/ui/footer";
import "./globals.css";

const navigationItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/#services" },
  { name: "Contact Us", link: "/#contact", isButton: true },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <main className="flex min-h-screen flex-col items-center justify-between pt-8 pb-16 md:pb-8">
          {children}
          <FloatingNavbar items={navigationItems} />
          <BottomNavbar />
          <Footer />
        </main>
      </body>
    </html>
  );
}

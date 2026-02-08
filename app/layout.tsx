import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart";
import TheaterNavbar from "./components/TheaterNavbar";
import TheaterFooter from "./components/TheaterFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theaterstücke Online — Stücke & Sketche zum Download",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <div data-site="theater">
            <TheaterNavbar />
            {children}
            <TheaterFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

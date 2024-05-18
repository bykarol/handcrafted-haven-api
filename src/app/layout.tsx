import type { Metadata } from "next";
import { primaryFont } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Web platform where you can find the best handmade products. Ideal for artisans and craftsmen to display and sell their unique items on the market.",
  authors: [
    { name: "David Peña" },
    { name: "Diana Quispe" },
    { name: "Karol Bracho" },
    { name: "Natalia Paredes" },
    { name: "Stéphane Lima e Lima" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} antialiased`}>{children}</body>
    </html>
  );
}

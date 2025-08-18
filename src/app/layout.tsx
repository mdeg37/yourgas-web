import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourGas",
  description: "Customer portal and services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

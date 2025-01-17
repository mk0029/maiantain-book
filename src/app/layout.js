"use client";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}

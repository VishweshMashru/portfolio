import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishwesh | Portfolio",
  description: "Portfolio of Vishwesh, showcasing projects in AI, Computer Vision, and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1F1F1F] text-gray-200`}
      >
        {/* Global Toaster for success/error messages */}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#2C2C2C",
              color: "#ffffff",
              border: "1px solid #3A3A3A",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#1F1F1F",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#1F1F1F",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}

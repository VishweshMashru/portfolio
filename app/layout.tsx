import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vishwesh Mashruwala - Software Engineer",
  description: "Software Engineer specializing in AI, Computer Vision, Systems Programming, and Full-Stack Development",
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    title: "Vishwesh Mashruwala - Software Engineer",
    description: "Software Engineer specializing in AI, Computer Vision, and Systems Programming",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
              border: "none",
              borderRadius: "9999px",
              padding: "16px 24px",
              fontSize: "14px",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#ffffff",
                secondary: "#000000",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ffffff",
                secondary: "#000000",
              },
            },
            loading: {
              iconTheme: {
                primary: "#ffffff",
                secondary: "#000000",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "@/components/ui/notification-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musab - Full Stack Developer",
  description: "Passionate full stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building efficient, scalable applications that solve real-world problems.",
  keywords: "full stack developer, react, nextjs, nodejs, mongodb, mysql, tailwind css, web development",
  authors: [{ name: "Musab" }],
  openGraph: {
    title: "Musab - Full Stack Developer",
    description: "Passionate full stack developer specializing in React, Next.js, Node.js, and modern web technologies.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}

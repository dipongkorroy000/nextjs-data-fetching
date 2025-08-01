import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuthSessionProvider from "@/providers/nextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  // variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NEXT.js",
    template: "%s | Learning NEXT.js",
  },
  keywords: ["nextjs", "react", "javascript", "web development", "learning", "playground"],
  description: "Trying to learn NEXT.js with a custom layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={`${poppins.className}  ${geistMono.variable} antialiased`}>
          <Navbar></Navbar>
          {children}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}

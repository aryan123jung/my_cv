import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Aryan Jung Chhetri | Portfolio & CV",
  description:
    "Premium portfolio and CV website for Aryan Jung Chhetri, frontend developer, UI/UX enthusiast, computing student, and aspiring cybersecurity professional.",
  keywords: [
    "Aryan Jung Chhetri",
    "Frontend Developer",
    "UI UX Designer",
    "Computing Student",
    "Cybersecurity",
    "React Developer Nepal"
  ],
  authors: [{ name: "Aryan Jung Chhetri" }],
  openGraph: {
    title: "Aryan Jung Chhetri | Portfolio & CV",
    description:
      "Frontend development, UI/UX design, cybersecurity learning, and leadership experience.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}

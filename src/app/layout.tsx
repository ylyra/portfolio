import { JetBrains_Mono, Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";

const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yan Lyra | Software Engineer",
  description:
    "Portfolio of Yan Lyra, a software engineer with a passion for building web applications.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

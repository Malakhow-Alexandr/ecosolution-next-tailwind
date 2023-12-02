import type { Metadata } from "next";
import { Oswald, Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

// export const oswald = Oswald({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-oswald",
// });

export const fira = Fira_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-fira"
});

export const metadata: Metadata = {
  title: "Ecosolution",
  description: "Ecosolution GREENERGY FOR LIFE"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fira.variable}>
      <body>
        <div id="backdrop-root"></div>
        <Header />

        {children}
      </body>
    </html>
  );
}

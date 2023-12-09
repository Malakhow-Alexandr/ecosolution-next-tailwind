import type { Metadata } from "next";
import { Oswald, Fira_Sans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OgpImage from "@/public/cases/Case4.png";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald"
});

const fira = Fira_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-fira"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://ecosolution-next-tailwind"
  ),
  openGraph: {
    images: [
      {
        url: "http://localhost:3000/api/og",
        width: 417,
        height: 207,
        alt: "Wind power plants in the field."
      }
    ],
    title: "Ecosolution",
    description: "Ecosolution GREENERGY FOR LIFE"
  },
  title: "Ecosolution",
  description: "Ecosolution GREENERGY FOR LIFE"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fira.variable} ${oswald.variable}`}
    >
      <body>
        <div id="backdrop-root"></div>
        <Header />

        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Head from "next/head";
import { Oswald, Fira_Sans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { openGraphImage } from "./shared-metadata";

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
  openGraph: {
    ...openGraphImage,
    title: "Ecosolution GREENERGY FOR LIFE"
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
      {/* <Head>
        <meta property="og:image" content={OgpImage.src} />
        <meta
          property="og:image:type"
          content="image/png"
        />
        <meta property="og:image:width" content="417" />
        <meta property="og:image:height" content="207" />
        <meta
          property="og:image:alt"
          content="Wind power plants in the field."
        />
      </Head> */}
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

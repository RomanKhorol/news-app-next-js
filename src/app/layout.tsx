import "./globals.scss";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Gordiienko News",
    template: `%s | Gordiienko News`,
  },
  description: "Generated by Next.js",
};

const montserat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserat.className}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/icon" />
      </head>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

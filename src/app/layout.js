import { Outfit } from "next/font/google";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart - Summer Essentials",
  description: "Ultra-premium summer eCommerce platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased font-sans`}
      data-theme="lofi"
    >
      <body className="min-h-full flex flex-col relative text-slate-800">
        <Navbar />
        <main className="flex-grow pt-28 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

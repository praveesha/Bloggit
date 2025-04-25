import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloggit",
  description: "Words that stick!!!",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "lightgrey" }}>
        <div className="container">
          <div className="wrapper"> 
            <Navbar />
            { children } 
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

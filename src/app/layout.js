import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/MobileNavbar";
import Footer from "@/components/layout/MobileFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Moacyr Contabilidade",
  description: "Contabilidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

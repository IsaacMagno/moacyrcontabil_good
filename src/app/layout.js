import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Moacyr Contabilidade",
  description: "Contabilidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-5">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

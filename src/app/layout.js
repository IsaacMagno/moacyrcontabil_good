import "./globals.css";

import Navbar from "@/components/layout/MobileNavbar";
import Footer from "@/components/layout/MobileFooter";

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

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBar from "@/components/layout/ContactBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preload" href="/banner mobile.png" as="image" />
      <link rel="preload" href="/banner about.png" as="image" />
      <link rel="preload" href="/banner contact.png" as="image" />
      <link rel="preload" href="/banner service.png" as="image" />
      <link rel="preload" href="/los bg.png" as="image" />
      <link rel="preload" href="/los mobile bg.png" as="image" />
      <body className={montserrat.className}>
        <div className="hidden lg:block">
          <ContactBar />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "@/components/layout/MobileNavbar";
import "./globals.css";

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
      </body>
    </html>
  );
}

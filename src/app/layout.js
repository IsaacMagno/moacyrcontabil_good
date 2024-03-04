import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/MobileNavbar";
import Footer from "@/components/layout/MobileFooter";
import LinkButton from "@/components/layout/LinkButton";
import { WhatsappIcon } from "@/components/svgs";
import { Attach } from "@/components/svgs";
import Input from "@/components/layout/Input";
import Textarea from "@/components/layout/Textarea";
import Dropdown from "@/components/layout/Dropdown";
import ContactBar from "@/components/layout/ContactBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="hidden lg:block">
          <ContactBar />
        </div>
        <Navbar />
        {children}
        <LinkButton name="Padrão" />
        <LinkButton icon={<WhatsappIcon />} wppButton name="Whatsapp" />
        <LinkButton icon={<Attach />} name="Anexo" />
        <Input placeholder="Padrão" type="text" />
        <Textarea placeholder="Textarea" />
        <Dropdown placeholder="Dropdown" values={["A", "B", "C"]} />
        {/* <LinkButton name="Testando um dois tres" />
        <LinkButton
          icon={<WhatsappIcon />}
          wppButton
          name="Testando um dois tres"
        />
        <LinkButton icon={<Attach />} name="Testando um dois tres" /> */}
        <Footer />
      </body>
    </html>
  );
}

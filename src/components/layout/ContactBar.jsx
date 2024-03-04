"use client";
import React from "react";
import { Instagram, Mail, Phone } from "lucide-react";

import WhatsAPP from "/public/logo_whatsapp.png";

import Link from "next/link";
import Image from "next/image";

const ContactBar = () => {
  return (
    <div className="flex min-w-full justify-between py-2  border-b border-black text-xs lg:text-base items-center px-5 2xl:py-4">
      <div className="flex gap-4 ">
        <a
          href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail"
          className="navbar-contact-buttons-hover"
        >
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
            <p className="">Email</p>
          </span>
        </a>

        <span className="flex items-center gap-2 navbar-contact-buttons-hover">
          <Phone className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
          <a href="tel:+551938932236" className="">
            <p>(19) 3893 2236</p>
          </a>
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="https://www.instagram.com/moacyrgasparinicontabilidade/"
          target="_blank"
        >
          <Instagram className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
          target="_blank"
        >
          <Image
            src={WhatsAPP}
            alt="WhatsApp"
            className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactBar;

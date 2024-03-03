"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import Logo from "/public/logo_gasparini.png";
import WhatsAPP from "/public/logo_whatsapp.svg";

import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { navbarButtonList } from "@/helpers/navBarButtonText";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleShowMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="flex flex-col bg-gray-300">
      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
      >
        <div
          className="min-h-screen bg-black bg-opacity-80 fixed inset-0 z-50"
          onClick={handleShowMenu}
        />
      </CSSTransition>

      <CSSTransition
        in={menuActive}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="bg-zinc-600 fixed h-full right-0 top-0 z-50 w-64 p-5 overflow-auto">
          <div className="flex flex-col  items-end ">
            <X
              className="navbar-contact-buttons text-zinc-100"
              onClick={handleShowMenu}
            />
            <ul className="flex flex-col min-w-full">
              {navbarButtonList.map((button, index) => (
                <Link href={button[index][1]} className="mobile-sidebar-link">
                  <li className="mobile-sidebar">{button[index][0]}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>

      {/* Contacts */}
      <div className="flex min-w-full justify-between py-2  border-b border-black text-xs lg:text-base items-center">
        <div className="flex gap-4 ">
          <a href="mailto:atendimento01@moacyrcontabil.com.br?subject=Contato Moacyr Contabilidade do E-mail&body=Corpo do E-mail">
            <span className="flex items-center gap-2">
              <Mail className="navbar-contact-buttons w-4" />
              <p className="navbar-contact-buttons">Email</p>
            </span>
          </a>

          <span className="flex items-center gap-2 ">
            <Phone className="navbar-contact-buttons w-4" />
            <a href="tel:+551938932236" className="navbar-contact-buttons">
              (19) 3893 2236
            </a>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            href="https://www.instagram.com/moacyrgasparinicontabilidade/"
            target="_blank"
          >
            <Instagram
              className="navbar-contact-buttons w-4"
              strokeWidth={2.8}
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
          >
            <Image
              src={WhatsAPP}
              alt="WhatsApp"
              className="navbar-contact-buttons w-4"
            />
          </Link>
        </div>
      </div>

      {/* NavBar Buttons */}
      {menuActive ? (
        <div className="min-h-screen bg-black absolute top-0 z-50"> </div>
      ) : null}
      <div className="flex justify-between py-4 ">
        <Image
          src={Logo}
          className="w-[7rem] lg:w-[10rem] xl:w-[13rem] 2xl:w-[17rem]"
        />

        <div className="block lg:hidden">
          <Menu onClick={handleShowMenu} className="navbar-contact-buttons" />
        </div>
        <ul className="hidden lg:flex gap-4">
          {navbarButtonList.map((button, index) => (
            <Link
              href={button[index][1]}
              className="p-3 hover:opacity-80 2xl:text-xl"
            >
              <li className="">{button[index][0]}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// mobile-sidebar-link
// mobile-sidebar

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

import Logo from "/public/logo_gasparini.png";

import { Menu, X } from "lucide-react";
import { navbarButtonList } from "@/helpers/navBarButtonText";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleShowMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="flex flex-col bg-gray-300 px-10">
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
                  <li className="mobile-sidebar">
                    <p>{button[index][0]}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>

      {/* NavBar Buttons */}
      {menuActive ? (
        <div className="min-h-screen bg-black absolute top-0 z-50"> </div>
      ) : null}
      <div className="flex justify-between py-4 items-center">
        <Image
          src={Logo}
          className="w-[7rem] lg:w-[12rem] xl:w-[13rem] 2xl:w-[17rem]"
        />

        <div className="block lg:hidden">
          <Menu onClick={handleShowMenu} className="navbar-contact-buttons" />
        </div>
        <ul className="hidden lg:flex gap-4">
          {navbarButtonList.map((button, index) => (
            <Link href={button[index][1]} className="">
              <li className="hover:opacity-80">
                <h2>{button[index][0]}</h2>
              </li>
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

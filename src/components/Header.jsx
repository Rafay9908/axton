import React, { useState } from "react";

import logo from "../assets/logo-black.png";

import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Testimonials",
    "Pricing",
    "Contact",
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-[0px_5px_30px_rgba(0,0,0,0.1)]">
        <div className="container relative">
          <div className="flex items-center justify-between py-[20px]">
            <a href="#">
              <img src={logo} alt="axton logo" />
            </a>

            <ul className="hidden xl:flex flex-row gap-x-[26px]">
              {navItems.map((navItem) => (
                <li
                  className="text-[16px] leading-[24px] font-medium cursor-pointer transition-all duration-300 hover:text-[#04C37F]"
                  key={navItem}
                >
                  {navItem}
                </li>
              ))}
            </ul>

            <div className="hidden xl:flex flex-row items-center">
              <a
                className="text-lg leading-[27px] font-bold mr-[25px] transition-all duration-300 hover:text-[#04c37f] flex flex-row items-center gap-x-2"
                href="tel:+15417543010"
              >
                <span className="text-[#04c37f] font-bold">
                  <FaPhoneAlt />
                </span>{" "}
                +1-541-754-3010
              </a>
              <a
                href="#"
                className="text-lg font-medium text-white bg-[#04C37F] py-[15px] px-[30px] rounded-[50px] transtion-all duration-700 hover:bg-[#0B1B2A]"
              >
                Download CV
              </a>
            </div>

            <span
              className="inline-block xl:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoClose size="30" />
              ) : (
                <GiHamburgerMenu size="30" />
              )}
            </span>
          </div>

          <div className={`absolute top-[60px] z-50 bg-white w-full
              transition-all duration-300 ease-in-out xl:opacity-0 xl:-translate-y-5 xl:pointer-events-none
              ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
            <ul className="flex items-center flex-col gap-x-[26px] py-[15px] px-[20px] border">
              {navItems.map((navItem) => (
                <li
                  className="text-[16px] leading-[24px] font-medium cursor-pointer transition-all duration-300 hover:text-[#04C37F] my-[8px]"
                  key={navItem}
                >
                  {navItem}
                </li>
              ))}
            </ul>
            <div className="flex flex-row items-center mt-[20px] pb-[15px]">
              <a
                className="text-[14px] leading-[27px] font-bold mr-[25px] transition-all duration-300 hover:text-[#04c37f] flex flex-row items-center gap-x-2"
                href="tel:+15417543010"
              >
                <span className="text-[#04c37f] font-bold">
                  <FaPhoneAlt />
                </span>{" "}
                +1-541-754-3010
              </a>
              <a
                href="#"
                className="text-[12px] font-medium text-white bg-[#04C37F] py-[10px] px-[15px] rounded-[50px] transtion-all duration-700 hover:bg-[#0B1B2A]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";

import logo from "../assets/logo-black.png";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  return (
    <>
      <div className="shadow-[0px_5px_30px_rgba(0,0,0,0.1)]">
        <div className="container">
          <div className="flex text-center xl:text-left flex-col xl:flex-row items-center justify-between py-[35px]">
            <a href="#">
              <img src={logo} alt="axton logo" />
            </a>

            <p className="text-[15px] xl:text-lg text-[##3C4648] my-[15px]">
              Copyright @Axton. All Rights Reserved by{" "}
              <span className="text-[#04c37f]">EnvyTheme</span>
            </p>

            <div className="flex flex-row items-center gap-x-[15px]">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className="w-[35px] h-[35px] border-[#04c37f] border rounded-[50px] flex items-center justify-center transition-all duration-800 hover:bg-[#04c37f] hover:text-white"
                  href={link.href}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
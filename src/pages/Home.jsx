import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import profileImg from "../assets/man.png";

function Home() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
  ];

  const contactInfo = [
    { label: "Address", value: "432 Mechanic Road Riverside, NJ 08075" },
    { label: "Email", value: "beverly@gmail.com" },
    { label: "Phone", value: "+1-541-754-3010" },
  ];
  return (
    <>
      <Header />

      <div className="mt-[70px] mb-[50px] xl:mb-[120px] ">
        <div className="container">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[20px] xl:text-[30px] text-[#04c37f] mb-[5px] font-semibold">
                Hi I’m
              </p>
              <h3 className="text-[#0b1b2a] text-[30px] xl:text-[120px] font-bold leading-[140%] xl:leading-[125px] mb-[10px]">
                Beverly Tiedeman
              </h3>
              <p className="max-w-[636px] text-lg text-[#3C4648] mb-[25px] leading-[180%]">
                My interest in Graphic design, I am responsible for the user
                experience of a product, usually taking the direction towards
                business goals.
              </p>
              <a
                href="#"
                className="text-lg font-medium text-white bg-[#04C37F] py-[15px] px-[30px] rounded-[50px] self-start transtion-all duration-700 hover:bg-[#0B1B2A]"
              >
                Contact Me!
              </a>

              <div className="flex flex-row items-center gap-x-[10px] mt-[30px]">
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

            <div className="p-[1px] rounded-[500px] bg-gradient-to-t from-[#FAC544] to-[#04c37f] mt-[30px] xl:mt-[0px]">
              <div className="py-[50px] px-[30px] max-w-[530px] rounded-[500px] bg-[#ECF1F9]">
                <img className="mb-[40px]" src={profileImg} alt="" />

                {contactInfo.map((info, i) => (
                  <div
                    className={`text-center ${
                      i === contactInfo.length - 1 ? "mb-[0px]" : "mb-[20px]"
                    }`}
                    key={i}
                  >
                    <p className="text-[17px] font-semibold mb-[8px] text-[#04c37f]">
                      {info.label}
                    </p>
                    <p className="text-[#3C4648] text-lg font-normal">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
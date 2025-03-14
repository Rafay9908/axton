import React from 'react'
import Form from "../components/Form";

import call from "../assets/call.svg";
import email from "../assets/email.svg";
import address from "../assets/address.svg";




function Contact() {

    

    
  const contactForm = [
    {
      label: "Phone",
      value: "+1-541-754-3010",
      image: call,
      href: "tel:+1-541-754-3010",
    },
    {
      label: "Email",
      value: "axton@gmail.com",
      image: email,
      href: "mailto:axton@gmail.com",
    },
    {
      label: "Address",
      value: "432 Mechanic Road Riverside, NJ 08075",
      image: address,
      href: "#",
    },
  ];
  return (
    <div className="py-[120px] bg-[#ECF1F9]">
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="w-[100%] lg:w-[26%] lg:border-r-2 lg:border-[#E2D3CB] lg:pr-[40px]">
          <h3 className="mb-[40px] text-[#0b1b2a] font-semibold text-[36px] leading-[43px]">
            Contact Info
          </h3>
          {contactForm &&
            contactForm?.map((info, i) => (
              <div
                key={i}
                className={`flex items-start gap-x-4 ${
                  i === contactForm.length - 1 ? "mb-[0px]" : "mb-[40px]"
                }`}
              >
                <img src={info.image} alt="" />
                <div>
                  <p className="mb-[10px] text-[#04c37f] text-[20px] leading-[30px] font-semibold">
                    {info.label}
                  </p>
                  <a
                    href={info.href}
                    className={`text-[#3C4648] text-[18px] leading-[27px] font-normal  transition-all duration-300  ${
                      i === contactForm.length - 1
                        ? "cursor-auto"
                        : "hover:text-[#04c37f]"
                    }`}
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div className="w-[100%] md:w-[74%] lg:pl-[70px]">
          <p className="mb-[12px] text-[#04c37f] text-base leading-[150%] font-normal mt-[40px] lg:mt-[0px]">
            Contact Us
          </p>
          <h3 className="mb-[35px] text-[#0b1b2a] text-[36px] leading-[43px] font-semibold">
            Have Questions? Get in Touch!
          </h3>

          <Form />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
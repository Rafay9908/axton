import React, { useState } from "react";
import CountUp from "react-countup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

import profileImg from "../assets/man.png";

import serviceOne from "../assets/services-1.png";
import serviceTwo from "../assets/services-2.png";
import serviceThree from "../assets/services-3.png";
import serviceFour from "../assets/services-4.png";

import { FaArrowRight } from "react-icons/fa6";

import { SiTicktick } from "react-icons/si";

import portfolioOne from "../assets/portfolio-1.jpg";
import portfolioTwo from "../assets/portfolio-2.jpg";
import portfolioThree from "../assets/portfolio-3.jpg";
import portfolioFour from "../assets/portfolio-4.jpg";
import portfolioFive from "../assets/portfolio-5.jpg";
import portfolioSix from "../assets/portfolio-6.jpg";

import imgOne from "../assets/1.png";
import imgTwo from "../assets/2.png";
import imgThree from "../assets/3.png";
import imgFour from "../assets/4.png";
import imgFive from "../assets/5.png";
import imgSix from "../assets/6.png";

import signature from "../assets/signature.png";
import about from "../assets/about.png";

import call from "../assets/call.svg";
import email from "../assets/email.svg";
import address from "../assets/address.svg";

import testimonials from '../assets/testimonials.png'

import chatQuote from '../assets/chat-quote.svg'

function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [testimonialCounter, setTestimonialCounter] = useState(0);

  const increment = () => {
    
    if(testimonialCounter === testimonialInfo.length - 1) {
      setTestimonialCounter(0);
    } else {
      setTestimonialCounter((prev) => prev += 1)
    }

  }

  const decrement = () => {
    
    if(testimonialCounter === 0) {
      setTestimonialCounter(testimonialInfo.length - 1);
    } else {
      setTestimonialCounter((prev) => prev -= 1)
    }

    
  }

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

  const clientImages = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];

  const services = [
    { image: serviceOne, title: "Vector Design" },
    { image: serviceTwo, title: "Podcast Design" },
    { image: serviceThree, title: "Mascot Design" },
    { image: serviceFour, title: "3d Design" },
    { image: serviceFour, title: "3d Design" },
    { image: serviceFour, title: "3d Design" },
    { image: serviceFour, title: "3d Design" },
    { image: serviceFour, title: "3d Design" },
  ];

  const pricingPlans = [
    {
      type: "Full Time",
      price: isYearly ? "10000" : "1000",
      billingCycle: isYearly ? "/Yearly" : "/Monthly",
      description:
        "You can check out my pricing plan if you want to work with me",
      features: [
        "Product Design",
        "Landing Pages",
        "Mobile Applications",
        "Wireframes",
        "Dashboard Design",
        "Prototyping & Animation",
      ],
      buttonText: "Contact Me",
    },
    {
      type: "Hourly",
      price: isYearly ? "1000" : "100",
      billingCycle: isYearly ? "/Yearly" : "/Monthly",
      description:
        "You can check out my pricing plan if you want to work with me",
      features: [
        "Product Design",
        "Landing Pages",
        "Mobile Applications",
        "Wireframes",
        "Dashboard Design",
        "Prototyping & Animation",
      ],
      buttonText: "Contact Me",
    },
  ];

  const portfolioInfo = [
    { image: portfolioOne, area: "one" },
    { image: portfolioTwo, area: "two" },
    { image: portfolioThree, area: "three" },
    { image: portfolioFour, area: "four" },
    { image: portfolioFive, area: "five" },
    { image: portfolioSix, area: "six" },
  ];

  const personalInfo = [
    {
      label: "Born In",
      value: "America",
    },
    {
      label: "Experience",
      value: "10+ Years",
    },
    {
      label: "Date of Birth",
      value: "07 May, 1990",
    },
  ];

  const education = [
    {
      year: "2018 - 2019",
      degree: "Master in Graphic",
      institution: "Columbia University",
    },
    {
      year: "2014 - 2017",
      degree: "Bachelors of Fine Art",
      institution: "Harvard University",
    },
    {
      year: "2013 - 2014",
      degree: "Graphic Design Certificate",
      institution: "Harvard Business School",
    },
  ];

  const experience = [
    {
      year: "2019 - Present",
      company: "Themeforest Co.",
      position: "Head Of Graphic Design",
      description:
        "Donec rutrum congue leo eget malesuada quisque velit nisi pretium ut lacinia.",
    },
    {
      year: "2016 - 2019",
      company: "EnvyTheme Co.",
      position: "Sr. Product Designer",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia curae.",
    },
  ];

  const counterInfo = [
    {
      start: 0,
      end: 10,
      duration: 6,
      label: "Years of <br /> Experience",
      symbol: "+",
    },
    {
      start: 0,
      end: 784,
      duration: 6,
      label: "Project <br /> Completed",
      symbol: "",
    },
    {
      start: 0,
      end: 90,
      duration: 6,
      label: "Clients of <br /> Worldwide",
      symbol: "+",
    },
    {
      start: 0,
      end: 99,
      duration: 6,
      label: "Happy <br /> Clients",
      symbol: "%",
    },
  ];

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

  const testimonialInfo = [
    {
      image: chatQuote,
      review: "“1 Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.”",
      name: "Jason",
      designation: "Project Manager"
    },
    {
      image: chatQuote,
      review: "“2 Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.”",
      name: "Alex",
      designation: "Founder at Envato"
    },
    {
      image: chatQuote,
      review: "“3 Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.”",
      name: "Jason",
      designation: "Ceo & Manager"
    },
  ]

  return (
    <>
      <Header />

      <div
        id="home"
        className="mt-[170px] mb-[250px] md:mb-[345px] xl:mb-[300px]"
      >
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

      <div className="bg-[#ECF1F9] relative">
        <div className="container">
          <div className="absolute w-[90%] max-w-[1296px] -translate-y-1/2">
            <div className="relative">
              {/* Green Border Effect */}
              <div className="hidden xl:block absolute inset-0 w-[100%] h-[100%] bg-[#04c37f] rounded-full rotate-2"></div>

              {/* Main Content */}
              <div className="relative z-10 bg-[#0B1B2A] py-[50px] px-[50px] md:py-[120px] md:px-[100px] xl:rounded-full flex flex-col items-center xl:items-start xl:flex-row justify-between w-full">
                <div className="mb-[30px] xl:mb-[0px] text-center xl:text-left">
                  <p className="text-[#04c37f] text-base font-normal leading-[150%] mb-[12px]">
                    My Clients
                  </p>
                  <h3 className="text-white text-[30px] md:text-4xl leading-[125%] font-medium">
                    Awesome <br />
                    Clients
                  </h3>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-[30px] md:gap-y-[70px] gap-x-[80px] pl-[20px] xl:pl-[0px]">
                  {clientImages.map((image) => (
                    <img
                      className="cursor-pointer brightness-50 transition-all duration-500 hover:brightness-100"
                      key={image}
                      src={image}
                      alt="#"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="about" className="pt-[250px] md:pt-[383px] xl:pt-[303px]">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between pb-[50px] lg:pb-[120px] border-b-2 border-white">
                <div className="w-[100%] lg:w-[40%] xl:w-[45%] lg:border-r-2 lg:border-white lg:pr-[57.5px]">
                  <h5 className="text-[#04c37f] mb-[15px] text-base leading-[150%] font-normal">
                    About Me
                  </h5>
                  <h3 className="text-[#0b1b2a] text-[22px] md:text-[30px] leading-[150%] font-semibold mb-[12px]">
                    Leading the way in Creative Product Designer
                  </h3>
                  <p className="text-[#3c4648] text-[15px] md:text-lg leading-[177%] font-normal ">
                    My interest in product design, I am responsible for the user
                    experience of a product, usually taking direction towards
                    business goals.
                  </p>
                  <img className="mt-[20px] mb-[25px]" src={signature} alt="" />
                  <img className="w-[100%] lg:w-auto" src={about} alt="" />
                </div>

                <div className="mt-[50px] w-[100%] lg:w-[60%] xl:w-[55%] lg:pl-[57.5px]">
                  <div className="flex flex-col sm:flex-row justify-between mb-[30px]">
                    {personalInfo.map((info, i) => (
                      <div
                        className={`sm:mb-[0px] ${
                          i === personalInfo.length - 1
                            ? "mb-[0px]"
                            : "mb-[30px]"
                        }`}
                        key={info}
                      >
                        <h3 className="text-base leading-[150%] text-[#04c37f] mb-[12px]">
                          {info.label}
                        </h3>
                        <p className="text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] text-[#0b1b2a] font-semibold">
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h2 className="mt-[10px] text-[20px] md:text-[30px] leading-[24px] md:leading-[36px] font-semibold text-[#0b1b2a]">
                      Education & Experience
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex justify-between flex-col md:w-[50%]">
                        {education.map((program, i) => (
                          <div
                            className={`mt-[35px] ${
                              i === education.length - 1
                                ? "mb-[35px]"
                                : "mb-[0px]"
                            }`}
                            key={program}
                          >
                            <p className="text-base leading-[150%] font-normal text-[#04c37f]">
                              {program.year}
                            </p>
                            <h3 className="text-base md:text-[20px] leading-[19px] md:leading-[24px] font-semibold text-[#0b1b2a] my-[8px]">
                              {program.degree}
                            </h3>
                            <p className="text-[15px] leading-[27px] md:text-lg md:leading-[32px] font-normal text-[#3c4648]">
                              {program.institution}
                            </p>
                          </div>
                        ))}

                        <a
                          href="#"
                          className="text-[15px] xl:text-lg font-medium text-white bg-[#04C37F] py-[15px] px-[30px] rounded-[50px] transtion-all duration-700 hover:bg-[#0B1B2A] self-start"
                        >
                          Contact Me!
                        </a>
                      </div>

                      <div className="flex justify-between flex-col w-[100%] lg:w-[50%] pl-[0px] md:pl-[50px] lg:pl-[20px] xl:pl-[0px]">
                        {experience.map((program, i) => (
                          <div
                            className={`mt-[35px] ${
                              i === education.length - 1
                                ? "mb-[35px]"
                                : "mb-[0px]"
                            }`}
                            key={program}
                          >
                            <p className="text-base leading-[150%] font-normal text-[#3c4648]">
                              {program.year}
                            </p>
                            <h3 className="text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-semibold text-[#0b1b2a] my-[8px]">
                              {program.company}
                            </h3>
                            <p className="text-base leading-[150%] font-normal text-[#04c37f] mb-[8px] lg:mb-[0px]">
                              {program.position}
                            </p>
                            <p className="text-[15px] leading-[27px] md:text-lg md:leading-[32px] font-normal text-[#3c4648]">
                              {program.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[100px]">
                <div className="flex flex-row flex-wrap justify-between gap-y-10">
                  {counterInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex flex-row items-center gap-x-5 pr-[20px] ${
                        index === counterInfo.length - 1
                          ? "xl:pr-[0px] w-[235px] md:w-[222px] xl:w-auto"
                          : "pr-[20px]"
                      }`}
                    >
                      <div
                        className={`flex flex-row md:flex-col items-center justify-center text-green-500 font-bold text-[30px] md:text-[36px] leading-none bg-white py-[14px] px-[18px] rounded-full md:h-[108px] w-[107px] md:w-[80px]`}
                      >
                        <span className="md:pb-2 pr-2">{info.symbol}</span>
                        <span className="md:rotate-[-90deg]">
                          <CountUp
                            start={info.start}
                            end={info.end}
                            duration={info.duration}
                          />
                        </span>
                      </div>
                      <p
                        className="text-base md:text-lg leading-[32px] text-[#0b1b2a]"
                        dangerouslySetInnerHTML={{ __html: info.label }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="my-[120px]">
        <div className="container">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-[35px]">
            <div>
              <p className="text-base font-normal text-[#0bc37f] leading-[150%] mb-[12px]">
                Services we Provide
              </p>
              <h3 className="text-[22px] xl:text-[35px] text-[#0B1B2A] font-bold xl:leading-[53px] my-[12px]">
                Best Quality Service <br /> We Provide
              </h3>
            </div>
            <p className="text-[#888C8F] text-[15px] xl:text-[18px] font-normal leading-[32px] xl:w-[50%] w-[100%]">
              Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
              congue leo eget malesuada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
            {services.map((service) => (
              <div
                key={service}
                className="hover:p-[1px] hover:rounded-[500px] hover:bg-gradient-to-t hover:from-[#FAC544] hover:to-[#04c37f] mt-[30px] xl:mt-[0px] cursor-pointer mb-[35px] hover:bg-[#]"
              >
                <div className=" py-[50px] px-[30px] max-w-[530px] rounded-[500px] bg-[#ECF1F9] flex flex-col items-center gap-[24px]">
                  <img src={service.image} alt="#" />
                  <h3 className="text-[#000000] text-[18px] font-semibold hover:text-[#0BC37F] cursor-pointer transition-all duration-500">
                    {service.title}
                  </h3>
                  <a
                    href="#"
                    className="w-[50px] h-[50px] border-[#04c37f] border rounded-[50px] flex items-center justify-center transition-all duration-800 hover:bg-[#04c37f] hover:text-white"
                  >
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between flex-col xl:flex-row items-center pt-[120px]">
              <div className="w-[100%] xl:w-[40%] mb-[30px] xl:mb-[0px] md:pr-6">
                <p className="text-base font-normal text-[#0bc37f] leading-[150%] mb-[12px]">
                  Pricing Plan
                </p>
                <h3 className="text-[32px] xl:text-[35px] text-[#0B1B2A] font-bold xl:leading-[53px]">
                  You Can Check Out My Pricing Plan If You Want To Work
                </h3>
                <div className="flex gap-x-[16px] mt-[20px]">
                  <p
                    className={`text-lg font-normal leading-[150%] ${
                      isYearly ? "text-black" : "text-[#0bc37f]"
                    }`}
                  >
                    Monthly
                  </p>
                  <div
                    className={`relative w-14 h-7 flex items-center rounded-full cursor-pointer transition-all duration-300 border border-[#0bc37f] bg-white`}
                    onClick={() => setIsYearly(!isYearly)}
                  >
                    {/* Circle */}
                    <div
                      className={`absolute bg-[#0bc37f] w-5 h-5 rounded-full shadow-md transition-all duration-300 transform ${
                        isYearly ? "translate-x-7" : "translate-x-1"
                      }`}
                    ></div>
                  </div>
                  <p
                    className={`text-lg font-normal leading-[150%] ${
                      isYearly ? "text-[#0bc37f]" : "text-black"
                    }`}
                  >
                    Yearly
                  </p>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row">
                {pricingPlans.map((pricingPlan, i) => (
                  <div
                    className={`mb-[30px] xl:mb-[0px] bg-[#0B1B2A] py-[38px] px-[45px] ${
                      i === 0
                        ? "border-r xl:rounded-l-lg border-[#7B8692]"
                        : "xl:rounded-r-lg"
                    }`}
                    key={pricingPlan}
                  >
                    <div>
                      <p className="text-[15px] xl:text-[20px] text-white font-semibold">
                        {pricingPlan.type}
                      </p>
                      <p className="text-[25px] xl:text-[36px] text-[#0bc37f] font-bold leading-[150%] flex">
                        {pricingPlan.price}{" "}
                        <span className="text-[12px] xl:text-[18px] text-white font-normal pl-[10px]">
                          {pricingPlan.billingCycle}
                        </span>
                      </p>
                      <p className="text-lg font-normal leading-[170%] text-white mb-[16px]">
                        {pricingPlan.description}
                      </p>
                    </div>
                    <ul className="mb-[50px]">
                      {pricingPlan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center flex-row mb-[22px] text-[#dfdfdf] font-normal text-base"
                        >
                          <span className="pr-[10px] text-[#0bc37f]">
                            <SiTicktick />
                          </span>{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="py-[15px] px-[35px] bg-[#0bc37f] text-[18px] rounded-[30px] font-medium text-white hover:bg-[#0b1b2a] border border-[#0bc37f] transition-all duration-400"
                    >
                      {pricingPlan.buttonText}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="bg-[#ECF1F9] py-[120px]">
        <div className="container">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-[35px]">
            <div>
              <p className="text-base font-normal text-[#0bc37f] leading-[150%] mb-[12px]">
                My Portfolio
              </p>
              <h3 className="text-[22px] xl:text-[35px] text-[#0B1B2A] font-bold xl:leading-[53px] my-[12px]">
                Best Quality Works That I <br /> Did For Clients
              </h3>
            </div>
            <p className="text-[#888C8F] text-[15px] xl:text-[18px] font-normal leading-[32px] xl:w-[50%] w-[100%]">
              Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
              congue leo eget malesuada.
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolioInfo.map((project, i) => (
              <div
                key={i}
                className="portfolio-item"
                style={{ gridArea: project.area }}
              >
                <img
                  src={project.image}
                  alt="Project"
                  className="rounded-[10px] w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen bg-center bg-no-repeat my-[120px] md:my-[0px] md:py-[120px] "
      style={{backgroundImage: `url(${testimonials})`}}
      >
        <div className="container">
          <div className="flex flex-col items-center mb-[35px]">
            <h3 className="mb-[12px] text-[#04c37f] text-base leading-[150%] font-normal">Testimonial</h3>
            <p className="text-[36px] leading-[54px] font-bold text-[#0b1b2a]">Our Happy Clients Says About Me</p>
          </div>
        
            <div className="flex flex-col items-center text-center">
              <img className="mb-6" src={testimonialInfo[testimonialCounter].image} alt="#" />
              <p className="w-[70%] mb-6 text-lg leading-[32px] text-[#3c4648] font-normal">{testimonialInfo[testimonialCounter].review}</p>
              <p className="mb-2 text-[20px] leading-[24px] font-semibold text-[#0b1b2a]">{testimonialInfo[testimonialCounter].name}</p>
              <p className="text-base leading-[150%] font-normal text-[#04c37f]">{testimonialInfo[testimonialCounter].designation}</p>

              <div className="flex flex-row mt-[30px] gap-x-5">
              <div href="#" className="p-3 border rounded-4xl transition-all duration-300 hover:bg-[#04c37f] hover:text-white cursor-pointer" onClick={decrement}><HiOutlineArrowSmallLeft size={24} /></div>
              <div className="p-3 border rounded-4xl transition-all duration-300 hover:bg-[#04c37f] hover:text-white cursor-pointer" onClick={increment}><HiOutlineArrowSmallRight size={24} /></div>
            </div>
            </div>
        </div>
      </div>

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

      <Footer />
    </>
  );
}

export default Home;

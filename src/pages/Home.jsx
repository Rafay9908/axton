import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import profileImg from "../assets/man.png";

import userOne from "../assets/user1.png";
import userTwo from "../assets/user2.png";
import userThree from "../assets/user3.png";

import serviceOne from "../assets/services-1.png";
import serviceTwo from "../assets/services-2.png";
import serviceThree from "../assets/services-3.png";
import serviceFour from "../assets/services-4.png";

import { FaArrowRight } from "react-icons/fa6";

import { SiTicktick } from "react-icons/si";

import imgOne from '../assets/1.png'
import imgTwo from '../assets/2.png'
import imgThree from '../assets/3.png'
import imgFour from '../assets/4.png'
import imgFive from '../assets/5.png'
import imgSix from '../assets/6.png'

function Home() {
  const [isYearly, setIsYearly] = useState(false);

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

  const blogPosts = [
    {
      author: "Jason Statham",
      title: "4 Reasons to Leverage DIY Website Builders",
      date: "February 12, 2024",
      image: userOne,
    },
    {
      author: "Anna Tester",
      title: "10 Website Fails Your Business Is Making",
      date: "February 11, 2024",
      image: userTwo,
    },
    {
      author: "Fred Benson",
      title: "Instagram Feed Add To Your WordPress Site",
      date: "February 10, 2024",
      image: userThree,
    },
  ];

  const services = [
    { image: serviceOne, title: "Vector Design" },
    { image: serviceTwo, title: "Podcast Design" },
    { image: serviceThree, title: "Mascot Design" },
    { image: serviceFour, title: "3d Design" },
  ];

  const pricingPlans = [
    {
      type: "Full Time",
      price: isYearly? "10000" : "1000",
      billingCycle: isYearly? "/Yearly" : "/Monthly",
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
      price: isYearly? "1000" : "100",
      billingCycle: isYearly? "/Yearly" : "/Monthly",
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

  return (
    <>
      <Header />

      <div className="mt-[70px] mb-[50px] xl:mb-[120px]">
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

      <div className="">
        <div className="container">
          <div className="bg-[#0B1B2A] py-[120px] px-[100px] rounded-full flex justify-between h-[365px]">
            <div>
              <p className="text-[#04c37f] text-base font-normal leading-[150%] mb-[12px]">My Clients</p>
              <h3 className="text-white text-4xl leading-[125%] font-medium">Awesome  <br />Clients</h3>
            </div>

            <div className="grid grid-cols-3 gap-y-[70px] gap-x-[80px]">
              {clientImages.map((image) => (
                <img className="cursor-pointer brightness-50 transition-all duration-500 hover:brightness-100" key={image} src={image} alt="#" />
              ))}
            </div>
          </div>



          
        </div>
      </div>

      <div className="my-[120px]">
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

          <div className="flex flex-col items-center xl:flex-row justify-between gap-x-[24px]">
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
          <div className="flex flex-row justify-center">
            <a
              href="#"
              className="text-lg font-medium leading-[23px] text-[#0B1B2A] py-[15px] px-[35px] border-[1px] border-[#04c37f] rounded-[35px] mt-[20px] hover:bg-[#04c37f] hover:text-white transition-all duration-500"
            >
              View All Services
            </a>
          </div>

          <div>
            <div className="flex justify-between flex-col xl:flex-row items-center pt-[120px]">
              <div className="w-[100%] xl:w-[40%] mb-[30px] xl:mb-[0px]">
                <p className="text-base font-normal text-[#0bc37f] leading-[150%] mb-[12px]">
                  Pricing Plan
                </p>
                <h3 className="text-[32px] xl:text-[35px] text-[#0B1B2A] font-bold xl:leading-[53px]">
                  You Can Check Out My Pricing Plan If You Want To Work
                </h3>
                <div className="flex gap-x-[16px] mt-[20px]">
                  <p className={`text-lg font-normal leading-[150%] ${isYearly? 'text-black' : 'text-[#0bc37f]'}`}>Monthly</p>
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
                  <p className={`text-lg font-normal leading-[150%] ${isYearly? 'text-[#0bc37f]' : 'text-black'}`}>Yearly</p>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row">
                {pricingPlans.map((pricingPlan, i) => (
                  <div
                    className={`mb-[30px] xl:mb-[0px] bg-[#0B1B2A] py-[38px] px-[45px] ${
                      i === 0 ? "border-r border-[#7B8692]" : ""
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

      <div className="mb-[30px]">
        <div className="container">
          <div className="text-center mb-[35px]">
            <p className="mb-[12px] text-[#04c37f] text-base">Our Blogs</p>
            <h4 className="text-[22px] leading-[120%] text-[#0b1b2a] font-bold">
              Read Our Latest Blog
            </h4>
          </div>

          <div className="flex flex-col items-center justify-between gap-y-[30px] xl:flex-row xl:gap-y-[0px] xl:gap-x-[24px] flex-nowrap">
            {blogPosts.map((post, i) => (
              <div
                key={post}
                className="max-w-[516px] xl:w-1/3 xl:max-w-[416px] p-[1px] bg-gradient-to-t from-[#FAC544] to-[#04c37f] rounded-lg"
              >
                <div className="bg-white py-[45px] px-[30px] rounded-lg hover:bg-[#ECF1F9] transition-all duration-1000 cursor-pointer">
                  <div className="flex flex-row items-center mb-[20px]">
                    <img src={post.image} alt="" />
                    <h3 className="ml-[15px] text-[20px] font-semibold text-[#0b1b2a]">
                      {post.author}
                    </h3>
                  </div>
                  <h2 className="text-[30px] text-black leading-[150%] font-semibold hover:text-[#04c37f] mb-[15px] cursor-pointer transition-all duration-500">
                    {post.title}
                  </h2>
                  <p className="text-base font-normal text-[#04c37f] leading-[150%]">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

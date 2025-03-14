import React, { useState } from 'react'

import serviceOne from "../assets/services-1.png";
import serviceTwo from "../assets/services-2.png";
import serviceThree from "../assets/services-3.png";
import serviceFour from "../assets/services-4.png";

import { FaArrowRight } from "react-icons/fa6";

import { SiTicktick } from "react-icons/si";

function Services() {
    const [isYearly, setIsYearly] = useState(false);

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
  return (
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
  )
}

export default Services
import React from 'react'
import CountUp from "react-countup";

import imgOne from "../assets/1.png";
import imgTwo from "../assets/2.png";
import imgThree from "../assets/3.png";
import imgFour from "../assets/4.png";
import imgFive from "../assets/5.png";
import imgSix from "../assets/6.png";

import signature from "../assets/signature.png";
import about from "../assets/about.png";

function About() {

    const clientImages = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];



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
  return (
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
  )
}

export default About
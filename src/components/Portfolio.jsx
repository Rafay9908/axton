import React from 'react'


import portfolioOne from "../assets/portfolio-1.jpg";
import portfolioTwo from "../assets/portfolio-2.jpg";
import portfolioThree from "../assets/portfolio-3.jpg";
import portfolioFour from "../assets/portfolio-4.jpg";
import portfolioFive from "../assets/portfolio-5.jpg";
import portfolioSix from "../assets/portfolio-6.jpg";

function Portfolio() {

  
  const portfolioInfo = [
    { image: portfolioOne, area: "one" },
    { image: portfolioTwo, area: "two" },
    { image: portfolioThree, area: "three" },
    { image: portfolioFour, area: "four" },
    { image: portfolioFive, area: "five" },
    { image: portfolioSix, area: "six" },
  ];
  return (
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
  )
}

export default Portfolio
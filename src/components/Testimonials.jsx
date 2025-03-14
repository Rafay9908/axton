import React, { useState } from 'react'

import testimonials from '../assets/testimonials.png'

import chatQuote from '../assets/chat-quote.svg'

import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

function Testimonials() {

      const [testimonialCounter, setTestimonialCounter] = useState(0);

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

      
  return (
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
  )
}

export default Testimonials
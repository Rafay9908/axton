import React from "react";
import { useForm } from "react-hook-form";

function Input() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-6">
         
          <div className="w-full md:w-[48%]">
            <input
              className="w-full border-b border-[#9b9c9c80] outline-none pb-[14px] text-[#3c464880] text-[15px] font-normal focus:border-[#04c37f]"
              placeholder="Your Name"
              type="text"
              {...register("name", {
                required: "Name is required",
                validate: {
                  isValidName: (value) =>
                    /^[a-zA-Z\s]+$/.test(value) ||
                    "Name must contain only letters and spaces",
                  minLength: (value) =>
                    value.length >= 2 ||
                    "Name must be at least 2 characters long",
                },
              })}
            />
            {errors.name && <p className="text-[#f00] text-[13px] mt-1">{errors.name.message}</p>}
          </div>

          <div className="w-full md:w-[48%]">
            <input
              className="w-full border-b border-[#9b9c9c80] outline-none pb-[14px] text-[#3c464880] text-[15px] font-normal focus:border-[#04c37f]"
              placeholder="Your Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                    "Please enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="text-[#f00] text-[13px] mt-1">{errors.email.message}</p>}
          </div>

          <div className="w-full md:w-[48%]">
            <input
              className="w-full border-b border-[#9b9c9c80] outline-none pb-[14px] text-[#3c464880] text-[15px] font-normal focus:border-[#04c37f]"
              placeholder="Your Phone Number"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                validate: {
                  isValidPhone: (value) =>
                    /^\+?[0-9]{10,15}$/.test(value) ||
                    "Phone number must be 10 to 15 digits and contain only numbers",
                },
              })}
            />
            {errors.phone && <p className="text-[#f00] text-[13px] mt-1">{errors.phone.message}</p>}
          </div>

          <div className="w-full md:w-[48%]">
            <input
              className="w-full border-b border-[#9b9c9c80] outline-none pb-[14px] text-[#3c464880] text-[15px] font-normal focus:border-[#04c37f]"
              placeholder="Subject"
              type="text"
              {...register("subject", {
                required: "Subject is required",
                validate: {
                  minLength: (value) =>
                    value.length >= 3 || "Subject must be at least 3 characters long",
                  maxLength: (value) =>
                    value.length <= 100 || "Subject cannot exceed 100 characters",
                },
              })}
            />
            {errors.subject && <p className="text-[#f00] text-[13px] mt-1">{errors.subject.message}</p>}
          </div>
        </div>

        {/* Message Textarea */}
        <div className="mt-[25px]">
          <textarea
            className="w-full border-b border-[#9b9c9c80] outline-none text-[#3c464880] text-[15px] font-normal focus:border-[#04c37f]"
            placeholder="Your message"
            rows="4"
            {...register("message", {
              required: "Message is required",
              validate: {
                minLength: (value) =>
                  value.length >= 10 || "Message must be at least 10 characters long",
                maxLength: (value) =>
                  value.length <= 500 || "Message cannot exceed 500 characters",
              },
            })}
          />
          {errors.message && <p className="text-[#f00] text-[13px] mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          className="w-full md:w-auto text-lg font-medium leading-[23px] py-[15px] px-[35px] border-[1px] rounded-[35px] transition-all duration-500 md:mt-[24px] mt-[50px] bg-[#04c37f] border-[#04c37f] text-white hover:border-[#0b1b2a] hover:bg-[#0b1b2a] cursor-pointer"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Input;

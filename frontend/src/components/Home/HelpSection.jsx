import React from "react";
import ServiceImg from "../../assets/ServiceImg.png";

const HelpSection = () => {
  return (
    <section className="flex sm:justify-around sm:items-center flex-col justify-center items-center px-3   sm:flex-row lg:px-10 2xl:px-24 pt-[100px]">
      <div className="flex flex-col sm:justify-start sm::items-start xl:gap-5 lg:gap-4 md:gap-3 sm:gap-2 gap-4  pl-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
          Transforming Communities Through Essential Services
        </h2>
        <p className="text-sm md:text-base w-3/4">
          AlkhidmatAssist enhances community well-being by improving
          infrastructure and promoting public health. Our initiatives, such as
          road repairs and cleanups, create safer, healthier environments for
          everyone.
        </p>
        <div className="py-2">
          <a href="#" className="border-2 border-[#00529B] py-2 px-4">
            Lear More
          </a>
        </div>
      </div>{" "}
      <div className="p-10 sm:pr-6 md:pr-10 sm:w-[900px] md:w-[1000px] lg:w-[1000px] 2xl:w-2/4">
        <img src={ServiceImg} className="w-full" alt="Service" />
      </div>
    </section>
  );
};

export default HelpSection;

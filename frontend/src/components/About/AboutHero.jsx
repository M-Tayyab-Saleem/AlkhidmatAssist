import React from "react";
import AboutHeroImg from "../../assets/AboutHero.png";

const AboutHero = () => {
  return (
    <div>
      <div
        className="w-[full] h-[200.98px] md:h-[349.98px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${AboutHeroImg})` }}
      >
        <h1 className="text-white uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;

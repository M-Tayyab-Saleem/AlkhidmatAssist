import React from "react";

const HeroSection = () => {
  return (

    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white "
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1455390746/photo/traffic-cones-on-road-with-electronic-arrow-pointing-to-the-right-to-divert-traffic-and-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=5bPIb1aLD8p7DuQ1lzUqZYG6l1PaecpVZ-Nadmw1rnI=')", // Local image path
        opacity: 0.8,
      }}
    >

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-black">
        Empowering Communities
        <br />
        for a Brighter Future
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8">
        At AlkhidmatAssist, we believe in the power of community-driven change. Our mission is to
        <br />
        enhance public infrastructure and create a more livable environment for everyone.
      </p>
      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
  <button className="border md:border-[#00529B] md:border-solid font-bold md:px-6 md:py-2 px-2 py-1 bg-[#00529B] text-white hover:bg-white hover:text-[#00529B]">
    Donate
  </button>
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">
    Get Involved
  </button>
</div>
    </div>
  );
};

export default HeroSection;

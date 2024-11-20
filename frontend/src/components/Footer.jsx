import React from "react";
import FooterLogo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full mt-14 ">
        <div className="flex justify-end px-10 gap-10 sm:pl-28 md:gap-56 lg:gap-72 lg:pr-10 items-center flex-row-reverse md:flex-row">
          <img src={FooterLogo} alt="Footer image" className="w-8 md:w-16" />
          <ul className="flex text-[11px]  md:text-base text-balance gap-2 md:relative md:left-0 md:pt-0 items-center  md:flex-row md:space-x-6 sm:mr-[100px] md:mr-[160px] lg:mr-[170px] xl:mr-[500px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/application">Applications</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full border-t border-black mt-4"></div>
        <div className="w-full flex justify-center items-center px-2 gap-16 md:gap-28 pt-4">
          <div>
            <p className="text-[11px] sm:text-sm md:text-base">
              © 2024 AlkhidmatAssist. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-col h-16 items-center text-balance gap-3  text-[11px] sm:text-sm md:text-base  md:justify-center md:gap-5 lg:gap-9  md:flex-row  ">
            <li>Privacy Policy</li>
            <li>Terms of Service </li>
            <li>Settings</li>
          </ul>
        </div>
      </footer >
    </>
  );
};

export default Footer;

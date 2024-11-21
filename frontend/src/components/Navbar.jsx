import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6  bg-white  md:px-0 flex justify-between md:justify-around items-center w-full py-2 md:py-3 ">
      <img src={NavLogo} alt="Nav Logo" className="sm:w-10 w-8 md:w-16" />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-around w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul
          className="flex flex-col absolute right-0 top-[5%] bg-white z-10 px-10 py-4 gap-8 md:gap-1 xl:gap-6  font-bold md:relative md:font-normal lg:text-xl xl:tracking-widest justify-center items-center md:flex md:justify-center md:items-center md:flex-row md:space-x-6"
        >
          <li>
            <Link to="/" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNavbar}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/application" onClick={toggleNavbar}>
              Applications
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNavbar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="btns absolute top-0 left-[34%] sm:left-[44%] pt-2 md:left-0 flex md:relative  justify-center items-center gap-3">
        <Link
          to="/"
          className="md:border md:border-[#00529B] md:border-solid  md:font-bold md:px-6 md:py-2 text-[#00529B] bg-white hover:text-white hover:p-1 hover:font-bold  hover:bg-[#00529B] "
        >
          Complain
        </Link>
        <Link
          to="/"
          className="border md:border-[#00529B] md:border-solid  font-bold md:px-6 md:py-2 px-2 py-1 bg-[#00529B] text-white hover:bg-white  hover:text-[#00529B] hover:font-normal"
        >
          Donate
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoMenu className=" text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

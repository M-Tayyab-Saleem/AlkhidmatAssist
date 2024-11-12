import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/navLogo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-6 md:px-0 flex justify-between md:justify-around items-center w-full ">
      <img src={NavLogo} alt="Nav Logo" className="w-7 sm:w-10" />
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-start w-full md:w-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col absolute left-[43%] pt-10 md:relative md:left-0 md:pt-0 justify-center items-center  md:flex-row md:space-x-6 sm:mr-[100px] md:mr-[160px] lg:mr-[270px] xl:mr-[600px]">
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
        <div className="btns absolute top-0 left-[40%] pt-2 md:left-0 flex md:relative  justify-center items-center gap-3">
          <Link to="/">Complain</Link>
          <Link to="/">Donate</Link>
        </div>
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

import React from "react";
import NavLogo from "../assets/navLogo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center w-full ">
      <img src={NavLogo} alt="Nav Logo" className="w-10" />
      <ul className="flex justify-center items-center gap-5">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/application">Applications</a>
        </li>
        <li>
          <a href="/contact">Contact us</a>
        </li>
      </ul>

      <div className="btns flex justify-center items-center gap-3">
        <a href="">Complain</a>
        <a href="">Donate</a>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Images } from "../constant";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

Images;
function Navbar() {
  return (
    <>
      <nav className=" flex justify-between items-center px-15 py-10">
        <div>
          <img className="" src={Images.Logo} />
        </div>
        <div className="flex justify-center items-center gap-15 font-bold ">
          <Link to="/" className="hover:text-[orange]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[orange]">
            About
          </Link>
          <Link to="/recipes" className="hover:text-[orange]">
            Recipes
          </Link>
          <Link to="/contact" className="hover:text-[orange]">
            Contact us
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <CiSearch className="size-[2.5rem] hover:text-[orange] cursor-pointer" />
          <FaRegUserCircle className="size-[2rem] hover:text-[orange] cursor-pointer" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

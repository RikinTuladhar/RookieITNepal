"use client";
import Link from "next/link";
import React from "react";
import Brand from "../Brand";
import { useState } from "react";
import { HeaderNavs } from "./constants";
import HeaderNav from "../Navs/HeaderNav";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import { CloseIcon } from "../Icons/CloseIcon";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header
      className="
    w-11/12 sm:w-5/6 md:w-3/4 lg:w-[90%] 
    mx-auto flex bg-[#26472B] rounded-3xl 
    fixed top-[1px] left-0 right-0 z-50"
    >
      <div className="w-full max-w-screen-xl mx-5 md:mx-14 flex items-center px-4 py-3 md:px-0 md:py-3 justify-between">
        <Link href={"/"}>
          <Brand />
        </Link>
        <nav className="gap-14 hidden lg:flex text-xl">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
        </nav>
        <div className="flex items-center">
          <div className="hidden lg:flex gap-4 md:gap-8">
            <Link href={"/signin"}>
              <span className="text-[#f4f3f3] font-bold hover:text-green-400">
                Sign In
              </span>
            </Link>
            <Link href={"/signup"}>
              <span className="text-white font-bold bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 rounded-3xl p-3 shadow-md transition-all duration-300 transform hover:scale-105">
                Get Started
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden  rounded-md bg-white "
            onClick={toggleHamburger}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>
      {/* Sidebar Nav*/}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-950 z-50 transform transition-transform duration-1000 ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 relative">
          <button
            className="mb-4 absolute top-4 right-4 p-2 text-white"
            onClick={toggleHamburger}
          >
            <CloseIcon />
          </button>
          <Link href={"/"}>
            <Brand />
          </Link>
          <nav className="pt-10 flex flex-col gap-6 ">
            {HeaderNavs.map((el, _i) => (
              <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
            ))}
            <Link
              href={"/signin"}
              onClick={toggleHamburger}
              className="text-lg text-gray-200 border-b border-gray-300 hover:border-green-600 font-semibold transition-all duration-300"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              onClick={toggleHamburger}
              className="text-lg text-gray-200 border-b border-gray-300 hover:border-green-600 font-semibold transition-all duration-300"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

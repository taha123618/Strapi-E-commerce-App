import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
// import { IoChevronDown } from "react-icons/io";
import Images from "../../utils/Images";

function Nav1({ cart }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-transparent">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-40 flex justify-between">
            {/* <Image
              src={Images.logo}
              alt="logo"
              // width={500}
              // height={500}
              className="md:cursor-pointer h-9"
              priority
            /> */}
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {/* <IoChevronDown
               name={`${open ? "close" : "menu"}`} /> */}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link href="/">
                <a className="mr-5 hover:text-orange-400">Home</a>
              </Link>
              <Link href="/about">
                <a className="mr-5 hover:text-white">About</a>
              </Link>
              <Link href="/products">
                <a className="mr-5 hover:text-white">New Products</a>
              </Link>
              <Link href="/checkout">
                <a className="mr-5 hover:text-primary">Cart({cart.length})</a>
              </Link>
              <Link href="/contact">
                <a className="mr-5 hover:text-primary">Contact US</a>
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            {/* button  */}
            <Link href="/login">
              <button className="bg-primary text-black  px-6 py-2 rounded-full">
                Login
              </button>
            </Link>
            {/* <Link href="/singnup">
              <button className="bg-yellow-400 text-black  px-6 py-2 rounded-full">
                SingUp
              </button>
            </Link> */}
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-transparent fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link href="/">
                <a className="py-7 px-3 inline-block">Home</a>
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              {/* button  */}
              <Link href="/login">
                <button className="bg-primary text-black   px-6 py-2 rounded-full">
                  Login
                </button>
              </Link>
              {/* <Link href="/singnup">
                <button className="bg-yellow-400 text-black  px-6 py-2 rounded-full">
                  SingUp
                </button>
              </Link> */}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav1;

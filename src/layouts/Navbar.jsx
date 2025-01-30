import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Work", link: "/Work" },
    { name: "Contact", link: "/contact" },
  ];

  const [Navbar, setNavbar] = useState(true);
  const [Open, setOpen] = useState(false);
  const showButton = () => {
    console.log("Scrolled...");
    if (window.scrollY > 490) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  window.addEventListener("scroll", showButton);
  return (
    <>
      <div className={`${Navbar ? "active" : " navbars"} w-full`}>
        <nav className=" text-white relative z-10 py-1 md:px-10 xl:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
            <div className="logo ">
              <Link className="cursor-pointer" to="/home">
                <img
                  src="./public/logo.png"
                  className="ml-2 sm:ml-4 md:ml-0 w-[30%]"
                  alt="my-pic"
                />
              </Link>
            </div>
            <div
              className="text-2xl absolute md:hidden right-6 top-7"
              onClick={() => {
                setOpen(!Open);
              }}
            >
              {Open ? (
                <RxCross2 className="text-[30px]" />
              ) : (
                <IoMenu className="text-[30px]" />
              )}
            </div>
            <ul className="hidden md:flex items-start bg-[#000]  md:bg-transparent w-full md:items-center absolute md:z-auto z-10   md:w-auto md:static top-14 duration-300 transition-all ease-in py-10 md:py-0 ">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="ml-8 mt-3 md:mt-0 text-base  md:text-lg  2xl:text-xl hover:duration-500 hover:text-red font-saira font-semibold"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-500" : "text-white"
                    }
                    to={link.link}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <Link
                to="https://Wa.me/923036939413"
                className=" items-center hidden md:flex whitespace-nowrap md:flex-row  bg-red text-base xl:text-lg px-3 py-2 mt-3 md:mt-0  rounded-lg ml-8  btn font-saira font-bold"
              >
                <BsWhatsapp className="mr-1 " /> Contact me
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      
      <ul
        className={`flex flex-col text-center md:hidden text-white z-10 fixed   bg-[#000] w-full  duration-500 transition-all ease-in py-10
             ${Open ? "top-20" : "-top-[600px]"}
            `}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className="ml-8 mt-3 md:mt-0 text-base  md:text-lg  2xl:text-xl hover:duration-500 hover:text-red font-saira font-semibold"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white"
              }
              to={link.link}
              onClick={() => {
                setOpen(false);
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <Link
          to="https://Wa.me/923036939413"
          className=" items-center hidden md:flex whitespace-nowrap md:flex-row  bg-red text-base xl:text-lg px-3 py-2 mt-3 md:mt-0  rounded-lg ml-8  btn font-saira font-bold"
        >
          <BsWhatsapp className="mr-1 " /> Contact me
        </Link>
      </ul>
    </>
  );
}

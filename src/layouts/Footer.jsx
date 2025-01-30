import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaMailBulk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <section className="bg-[url(/public/portfoliobg.avif)]   text-gray-200 font-saira px-2 sm:px-5 md:px-10 xl:px-16">
        <div className=" grid gap-5 py-10 md:gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:grid lg:grid-cols-4 md:py-16 ">
          <div className="bg-[#000] p-5 rounded-lg">
            <img
              src="../public/logo.png"
              alt="My-Pic"
              className="w-[20%] sm:w-[20%]"
            />
            <hr className="my-3" />
            <p className="text-sm py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              eius ab, iste ipsam perferendis quaerat accusantium ut debitis
              saepe at.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:px-10 md:items-center ">
            <h1 className="text-lg font-medium">Explore</h1>
            <ul className="flex flex-col gap-2">
              <Link
                to="/home"
                className="flex items-center text-sm hover:text-[#934753]"
              >
                <IoIosArrowForward className="mr-0 mt-1 text-[#d90a2c] " />
                Home
              </Link>
              <Link
                to="/work"
                className="flex items-center text-sm hover:text-[#d90a2c]"
              >
                <IoIosArrowForward className="mr-0 mt-1 text-[#d90a2c] " />
                Work
              </Link>
              <Link
                to="/portfolio"
                className="flex items-center text-sm hover:text-[#d90a2c]"
              >
                <IoIosArrowForward className="mr-0 mt-1 text-[#d90a2c] " />
                Portfolio
              </Link>
              <Link
                to="/about"
                className="flex items-center text-sm hover:text-[#d90a2c]"
              >
                <IoIosArrowForward className="mr-0 mt-1 text-[#d90a2c] " />
                About
              </Link>
              <Link
                to="/contact"
                className="flex items-center text-sm hover:text-[#d90a2c]"
              >
                <IoIosArrowForward className="mr-0 mt-1 text-[#d90a2c] " />
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:px-0 ">
            <h1 className="text-lg font-medium">Contact Us</h1>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center text-sm cursor-pointer">
                <FaHome className="text-[20px] text-[#d90a2c] mr-2" />
                Ali Town Lahore.
              </li>
              <li className="flex items-center text-sm cursor-pointer">
                <IoIosMail className="text-[20px] text-[#d90a2c] mr-2" />
                basharatalidogar14@gmail.com
              </li>
              <li className="flex items-center text-sm cursor-pointer">
               <MdCall className="text-[20px] text-[#d90a2c] mr-2" />
                +923211339413
              </li>
            </ul>
          </div>
          <div className="md:px-10 md:mt-5 lg:mt-0 ">
            <h1 className="text-lg font-medium">Follow Us</h1>
            <div className="flex gap-2 md:gap-3 mt-3">
              <div className="flex flex-row sm:flex-col gap-2">
                <a href="https://Wa.me/923211339413">
                  <FaWhatsapp className="text-3xl text-white bg-green-700 rounded-full p-2" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100080969177729&mibextid=ZbWKwL">
                  <FaFacebookF className="text-3xl text-white bg-blue-900 rounded-full p-2" />
                </a>
              </div>
              <div className="flex flex-row sm:flex-col gap-2">
                <a href="https://twitter.com/Bashara84911062?t=OpULgNmkh3QkEfe0Jq4HRQ&s=09">
                  <FaTwitter className="text-3xl text-white bg-blue-400 rounded-full p-2" />
                </a>
                <a href="/">
                  <FaGoogle className="text-3xl text-white bg-orange-500 rounded-full p-2" />
                </a>
              </div>
              <div className="flex flex-row sm:flex-col gap-2">
                <a href="https://www.instagram.com/bdking141/">
                  <FaInstagram className="text-3xl text-white bg-purple-500 rounded-full p-2" />
                </a>
                <a href="https://www.linkedin.com/in/basharat-ali-0a5131208">
                  <FaLinkedinIn className="text-3xl text-white bg-blue-600 rounded-full p-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#000] py-1 px-2 sm:px-5 md:px-10 xl:px-16">
        <div className="flex flex-col md:flex-row py-2 text-center  text-gray-200">
          <div className="text-xs md:text-sm font-normal cursor-pointer  px-2">
            Copyright &copy; basharatalidogar14@gmail.com All Right Reversed!
          </div>
          <div className="md:ml-auto text-xs md:text-sm cursor-pointer">
            Designed by B.D king
          </div>
        </div>
      </div>
    </>
  );
}

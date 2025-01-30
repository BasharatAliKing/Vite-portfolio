import React from "react";
import WorkComp from "../components/WorkComp";
import { TypeAnimation } from "react-type-animation";
import AboutComp from "../components/AboutComp";
import resume from "../assets/cv.pdf";
import ContactComp from "../components/ContactComp";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
export default function Home() {
  return (
    <>
      <div className=" bg-[url(/images/portfoliobg.avif)] bg-no-repeat bg-cover">
        <div className="flex  px-2 sm:px-5 md:px-10 xl:px-16 flex-col items-center py-10 justify-center w-full md:flex-row md:h-screen  ">
          <div className="flex flex-col text-white gap-y-1 mt-24 sm:mt-28 md:mt-0  md:h-auto w-screen  md:gap-y-3  px-4 md:w-1/2">
            <h4 className="text-sm md:text-base lg:text-xl font-medium font-saira">
              Hey, I Am
            </h4>
            <div className="flex flex-col items-start sm:flex-row md:flex-col xl:flex-row lg:gap-2">
              <div className="full-main ">Hey folks,</div>
              <TypeAnimation
                className="full-main"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " I am Basharat Ali",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " I am UI Specialist",
                  1000,
                  " React Developer",
                  1000,
                ]}
                // wrapper="span"
                speed={10}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="text-sm md:text-base lg:text-lg font-medium font-saira">
              Website Developer
            </p>
            <div className="flex flex-col mt-5 sm:flex-row gap-2 lg:mt-7 items-start md:items-center">
              <Link
                to="/Work"
                className=" px-7 py-2 text-sm  md:px-3 md:py-2 lg:text-md btn font-saira font-bold rounded-lg uppercase"
              >
                View my Work
              </Link>
              <a
                href={resume}
                className=" px-3 py-2 text-sm md:px-3 md:py-2 lg:text-md btn font-saira font-bold rounded-lg uppercase"
                download="Resume"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className=" md:w-1/2 md:h-auto flex justify-center mt-10 md:mt-0">
            <img src="/images/user.png" className="w-[50%] border-red-500 border-8 rounded-bl-[20%] rounded-tr-[20%] pr-2 pt-2" alt="my-pic" />
          </div>
        </div>
      </div>
      {/* Work section start here */}
      <WorkComp />
      {/* About section start here */}
      <AboutComp />
      {/* Contact section start here */}
      <ContactComp />
      {/* Footer section here */}
      <div className="container">
        <hr className="text-gray-700" />
      </div>
    </>
  );
}

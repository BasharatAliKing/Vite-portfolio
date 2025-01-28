import React from "react";
import { Link } from "react-router-dom";
const WorkCompImg = [
  {
    link: "https://bdking-currencychanger.netlify.app/",
    img: "./public/currencychanger.png",
  },
  {
    link: "https://teal-bublanina-5595ac.netlify.app/",
    img: "../public/petcare.png",
  },
  {
    link: "https://titanic-bd.netlify.app/",
    img: "../public/titanic.png",
  },
  {
    link: "https://divisima-bdking.netlify.app/",
    img: "../public/divisima.png",
  },
  {
    link: "https://bpexch.netlify.app/",
    img: "../public/pbexch.png",
  },
  {
    link: "https://bdking-tasktracking.netlify.app/",
    img: "../public/tasktracker.png",
  },
  {
    link: "https://exquisite-taiyaki-bb2767.netlify.app/",
    img: "../public/leadbud.png",
  },
  {
    link: "https://bdking-backery.netlify.app/",
    img: "../public/bakery.PNG",
  },
];
export default function WorkComp() {
  return (
    <section className="flex flex-col gap-3 bg-[url(/public/work.png)]  bg-cover bg-white font-saira py-6 md:py-10 xl:py-16 px-2 sm:px-5 md:px-10 xl:px-16">
      <h1 className="text-2xl md:text-3xl lg:text-5xl px-1 md:px-2 font-bold text-[#d90a2c] border-4 border-l-[#d90a2c] border-t-0 border-r-0 border-b-0 lg:px-3">
        Work
      </h1>
      <p className="text-sm md:text-base lg:text-xl font-normal text-gray-700">
        A Cross sectoin off my recent projects and works so please just Click on
        to check it.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {WorkCompImg.map((val, index) => (
          <Link
            key={index}
            to={val.link}
            className="relative hover:opacity-50 duration-500 group"
          >
            <div className="absolute  h-full w-full flex items-center duration-1000 justify-center invisible group-hover:visible">
              <button className="bg-[#f80000] cursor-pointer font-medium p-2 rounded-md text-white">
                Go to Page
              </button>
            </div>
            <img src={val.img} alt="my-img" />
          </Link>
        ))}
      </div>
    </section>
  );
}

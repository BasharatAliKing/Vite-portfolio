import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactComp() {
  // const [form,setform]=useState({
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   phone:"",
  //   description:""
  // });
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [Country, setCountry] = useState("us");
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Your Responce is Submitted!");
    console.log(fname, lname, email, phone, description);
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setDescription("");
  };
  useEffect(() => {});
  return (
    <>
    
        <section className="contact flex flex-col md:flex-row pt-0 font-saira py-6 md:py-10 xl:pb-16 px-2 sm:px-5 md:px-10 xl:px-16">
          <div className="md:w-1/2 flex flex-col gap-5">
            <h1 className="text-2xl px-1 md:px-2 md:text-3xl lg:text-5xl font-bold text-[#d90a2c] border-4 border-l-[#d90a2c] border-t-0 border-r-0 border-b-0 lg:px-3">
              Contact
            </h1>
            <p className="text-sm md:text-base  lg:text-lg font-normal text-gray-700">
              Got a Project in mind? Need to Collaaborate or Bounce Ideas.
            </p>
            <h2 className="uppercase text-md md:text-xl lg:text-2xl font-semibold  text-[#174153]">
              Hit Up Me!
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-normal text-gray-700">
              Just Click On the Method Button You want to Contact Me.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="/"
                className="flex items-center text-base lg:text-xl font-medium text-gray-700"
              >
                <img
                  className="mr-2"
                  src="/images/gmail.png"
                  alt=""
                />
                E-Mail
              </a>
              <a
                href="https://Wa.me/923211339413"
                className="flex items-center text-base lg:text-xl font-medium text-gray-700"
              >
                <img
                  className="mr-2"
                  src="/images/whatsapp.png"
                  alt=""
                />
                Whatsapp
              </a>
              <a
                href="https://twitter.com/Bashara84911062?t=OpULgNmkh3QkEfe0Jq4HRQ&s=09"
                className="flex items-center text-base lg:text-xl font-medium text-gray-700"
              >
                <img
                  className="mr-2"
                  src="/images/twitter.png"
                  alt=""
                />
                Twitter
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100080969177729&mibextid=ZbWKwL"
                className="flex items-center text-base lg:text-xl font-medium text-gray-700"
              >
                <img
                  className="mr-2"
                  src="/images/facebook.png"
                  alt=""
                />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bdking141/"
                className="flex items-center text-base lg:text-xl font-medium text-gray-700"
              >
                <img
                  className="mr-2"
                  src="/images/instagram.png"
                  alt=""
                />
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-10 md:mt-0 md:w-1/2 md:mx-10 my-auto">
            <div className="shadow p-3 md:p-7 rounded-xl flex flex-col gap-3">
              <h2 className="text-lg md:text-2xl text-btn font-medium">
                Fill out the form and we'll be in touch ASAP.
              </h2>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Email Address"
              />
              <PhoneInput
                country={Country}
                value={phone}
                placeholder="Enter Phone"
                countryCodeEditable={false}
                onChange={(e) => {
                  setPhone(e);
                }}
              />
              <textarea
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Tell us more About your Projects.."
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button
                className="btn p-1 text-white rounded-sm font-medium text-sm"
                onClick={handleSubmit}
              >
                Submit Query
              </button>
            </div>
          </div>
        
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

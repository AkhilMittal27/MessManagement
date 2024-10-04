import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {
  const [scroll, setScroll] = useState(false);
  const changeState = () => {
    if (window.scrollY >= 38) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeState);

  return (
    <>
      <Navbar className="" />
      <div>
        <div className="flex ">
        <div className="relative h-screen">
  <img
    className="h-full w-full object-cover object-center"
    src="/images/backg.png"
    alt="background-image"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
</div>
          <div
            className={` absolute mt-[300px] ml-4 text-md sm:text-xl md:text-2xl lg:text-3xl font-bold ${
              scroll ? "text-cyan-500 text-opacity-80 " : "text-indigo-300"
            }`}
          >
            <TypeAnimation
              sequence={[
                "Well Hello There",
                1000,
                "Welcome To The Mess Complaint PortaL",
                1000,
                "Let's Dive Into !",
                1200,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className=""
            />
          </div>
        </div>

        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
}

import React, { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Profil", link: "/" },
    { name: "Služby", link: "/" },
    { name: "Reference", link: "/" },
    { name: "Kontakty", link: "/kontakty" },
    { name: "Ke stažení", link: "/" },
    { name: "GDPR", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <Video className="absolute w-full h-3/4 object-cover invisible md:visible lg:visible"></Video>

      <div className="w-full  top-0 left-0 mb-36 md:mb-96 lg:md:mb-96 ">
        <div className="md:flex items-center  bg-opacity-20 py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 "
          >
            <Link to={"/"}>
              <span className="text-3xl text-indigo-600 mr-1 pt-2">
                <img
                  src="/assets/SDT_logo_as_plain.png"
                  alt="logo"
                  className="w-32 md:w-36 lg:w-48 "
                />
              </span>
            </Link>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden "
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="z-50"
            ></ion-icon>
          </div>

          <ul
            className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-40  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in   ${
              open ? "left-0 bg-gray-200 mt-20" : "left-[-450px] "
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                <Link
                  to={link.link}
                  className=" hover:underline underline-offset-[73px] bg decoration-red-600 decoration-4 duration-200 lg:mb-10 font-bold text-black  lg:text-black "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:border-b-2 lg:border-black lg:mx-10"></div>
      </div>
    </>
  );
};

export default Nav;

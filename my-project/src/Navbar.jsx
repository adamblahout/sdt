import React, { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Profil", link: "/profil" },
    { name: "Služby", link: "/sluzby" },
    { name: "Reference", link: "/#" },
    { name: "Kontakty", link: "/kontakty" },
    { name: "Ke stažení", link: "/#" },
    { name: "GDPR", link: "/#" },
  ];

  let [open, setOpen] = useState(true);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                name={open ? "close" : "open"}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="/assets/SDT_logo_as_plain.png"
                    alt="Your Company"
                  ></img>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {Links.map((link) => (
                    <Link
                      key={link.name}
                      className="hover:bg-gray-700 hover:text-white block rounded-md  py-2 text-base font-medium"
                      aria-current="page"
                    >
                      <Link
                        to={link.link}
                        className=" text-white block rounded-md px-3 py-2 text-base font-medium"
                      >
                        {link.name}
                      </Link>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden mb-80" id="mobile-menu ">
          <div
            className={`space-y-1 px-2 pb-3 pt-2 ${
              open ? "hidden" : "visible"
            }`}
          >
            {Links.map((link) => (
              <Link
                key={link.name}
                className="hover:bg-gray-700 hover:text-white block rounded-md  py-2 text-base font-medium"
                aria-current="page"
                onClick={() => setOpen(!open)}
              >
                <Link
                  to={link.link}
                  className=" text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  {link.name}
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Video className=""></Video>
    </>
  );
};

export default Nav;

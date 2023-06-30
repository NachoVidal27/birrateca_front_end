import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuName, setMenuName] = useState("menu");
  const [listClasses, setListClasses] = useState(
    "bg-black md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-80px] transition-all ease-in-duration-5"
  );

  const toggleHandler = () => {
    if (menuName === "menu") {
      setMenuName("close");
      setListClasses(
        "bg-black md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0  w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[40px] opacity-100"
      );
    } else {
      setMenuName("menu");
      setListClasses(
        "bg-black md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-80px] transition-all ease-in-duration-5"
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbarTitle");

      if (window.pageYOffset > 0) {
        navbar.classList.add("scale-[75%]");
      } else {
        navbar.classList.remove("scale-[75%]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="p-0 bg-black shadow md:flex md:items-center md:justify-between top-0 fixed  w-full ">
        <div className="flex justify-between items-center">
          <span
            id="navbarTitle"
            className=" font-bold text-white   cursor-pointer ms-10 "
          >
            <a href="/" className="text-[2rem] ms-4">
              Birrateca
            </a>
          </span>
          <span
            className="text-3xl cursor-pointer md:hidden block text-white"
            onClick={toggleHandler}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>
        <ul className={listClasses}>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/birras"
              className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
            >
              Catalogo
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/birra-form"
              className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
            >
              Nueva birra
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/signup"
              className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium me-6"
            >
              Sign up
            </Link>
          </li>

          {/* <button className="text-xl px-3 py-2 mx-4 md:my-0 font-semibold bg-secondary rounded text-white  hover:border-0 hover:border-white hover:bg-secondary-light hover:text-primary duration-500 cursor-pointer">
            Contacto
          </button>{" "} */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userReducer";
import logo from "../assets/logoBirrateca.png";

function Navbar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const toggleHandler = () => {
  //   if (menuName === "menu") {
  //     setMenuName("close");
  //     setListClasses(
  //       "bg-black md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0  w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[40px] opacity-100"
  //     );
  //   } else {
  //     setMenuName("menu");
  //     setListClasses(
  //       "bg-black md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[-80px] transition-all ease-in-duration-5"
  //     );
  //   }
  // };

  function handleLogOut() {
    dispatch(logOut());
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementById("navbarTitle");

  //     if (window.pageYOffset > 0) {
  //       navbar.classList.add("scale-[75%]");
  //     } else {
  //       navbar.classList.remove("scale-[75%]");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <nav className="p-0 bg-black shadow md:flex md:items-center md:justify-center top-0 z-50 fixed  w-full ">
        <div className="flex justify-center items-between">
          <ul className="flex">
            <li className="mx-4 my-6 md:my-0">
              <Link
                to="/birras"
                className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
              >
                Birras
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

            {/* <button className="text-xl px-3 py-2 mx-4 md:my-0 font-semibold bg-secondary rounded text-white  hover:border-0 hover:border-white hover:bg-secondary-light hover:text-primary duration-500 cursor-pointer">
            Contacto
          </button>{" "} */}
          </ul>
          {/* <span
            className="text-3xl cursor-pointer md:hidden block text-white"
            onClick={toggleHandler}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </span> */}
        </div>
        <div>
          <Link to="/">
            <img
              alt="imagen de dos jarras chocando "
              className="h-20 hover:brightness-150"
              src={logo}
            />
          </Link>
        </div>
        <span className=" font-bold text-white   cursor-pointer mx-4">
          {!user ? (
            <ul className="flex">
              {" "}
              <li className="me-4 my-6 md:my-0">
                <Link
                  to="/signup"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium "
                >
                  Sign up
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link
                  to="/login"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium me-6"
                >
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex">
              <li className="me-4 my-6 md:my-0">
                <Link
                  to="/perfil"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium "
                >
                  Perfil
                </Link>
              </li>
              <Link to="/">
                <li className="mx-4 my-6 md:my-0" onClick={handleLogOut}>
                  <p className="text-lg text-white opacity-70 hover:opacity-100 hover:text-red-500  duration-300 cursor-pointer font-medium me-6">
                    {" "}
                    Logout
                  </p>
                </li>
              </Link>
            </ul>
          )}
        </span>
      </nav>
    </>
  );
}

export default Navbar;

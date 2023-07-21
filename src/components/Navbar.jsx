import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userReducer";
import logo from "../assets/logoBirrateca.png";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <>
      <nav className="p-0 bg-black shadow md:flex md:items-center md:justify-center top-0 z-50 fixed  w-full ">
        <div className="flex justify-center items-between  ">
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
          </ul>
        </div>
        <div className="flex justify-between">
          <Link to="/">
            <img
              alt="imagen de dos jarras chocando "
              className="h-20 hover:brightness-150"
              src={logo}
            />
          </Link>
        </div>
        <div className=" font-bold text-white   cursor-pointer mx-4 h-0 md:h-10 ">
          {!user ? (
            <div>
              <ul className="flex invisible md:visible">
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
            </div>
          ) : (
            <ul className="flex invisible md:visible h-0 md:h-10">
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;

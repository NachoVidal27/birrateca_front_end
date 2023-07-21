import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logoBirrateca.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../redux/userReducer";
import { useDispatch } from "react-redux";

function AlternativeNavbar() {
  const user = useSelector((state) => state.user);
  const [mobile, setMobile] = useState(true);
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleLogOut() {
    setToggle(false);
    dispatch(logOut());
  }

  return mobile ? (
    <div className="top-0 z-50 fixed w-full ">
      <nav className="p-0 h-20 bg-black shadow  md:items-center   ">
        <div className="flex justify-between px-3">
          <Link to="/">
            <img src={logo} className="h-16 mt-2" alt="dos jarras chocando" />{" "}
          </Link>
          <div className="my-auto" onClick={handleToggle}>
            <MenuIcon className="text-white " />
          </div>
        </div>
      </nav>
      {toggle ? (
        <div className="h-auto pb-2 flex justify-center  bg-black">
          {!user ? (
            <ul className="text-center">
              {" "}
              <li onClick={handleToggle}>
                <Link
                  to="/login"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium "
                >
                  Login
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="text-center">
              <li className="mb-3" onClick={handleToggle}>
                <Link
                  to="/birras"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
                >
                  Birras
                </Link>
              </li>
              <li className="mb-3" onClick={handleToggle}>
                <Link
                  to="/birra-form"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
                >
                  Nueva birra
                </Link>
              </li>
              <li className="mb-3" onClick={handleLogOut}>
                <Link
                  to="/"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium "
                >
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : null}
    </div>
  ) : (
    <nav className="p-0 h-16 bg-red-500 shadow md:flex md:items-center md:justify-center top-0 z-50 fixed  w-full "></nav>
  );
}

export default AlternativeNavbar;

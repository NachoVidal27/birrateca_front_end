import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logoCCCUY_2.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../redux/userReducer";
import { useDispatch } from "react-redux";

function Navbar() {
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
    <div className="top-0 z-50 fixed w-full transition duration-500 ease-in-out transform translate-y-0">
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
              <li className="mb-3" onClick={handleToggle}>
                <Link
                  to="/perfil"
                  className="text-lg text-white opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium"
                >
                  Perfil {user.name}
                </Link>
              </li>
              <li className="mb-3" onClick={handleLogOut}>
                <Link
                  to="/"
                  className="text-lg text-white hover:text-red-500 opacity-70 hover:opacity-100   duration-300 cursor-pointer font-medium "
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
    <nav className="p-0 h-24 bg-black shadow md:flex justiy-center md:items-center  pe-6 top-0 z-50 fixed  w-full ">
      {!user ? (
        <div className="flex mx-auto">
          <Link
            className="text-white text-xl font-semibold my-auto me-4 opacity-90 hover:opacity-100"
            to="/signup"
          >
            {" "}
            Registro
          </Link>
          <Link to="/">
            <img
              src={logo}
              className="h-20 mt-2  hover:brightness-150 "
              alt="dos jarras chocando"
            />{" "}
          </Link>
          <Link
            className="text-white text-xl font-semibold my-auto ms-4 opacity-90 hover:opacity-100"
            to="/login"
          >
            Login
          </Link>
        </div>
      ) : (
        <div className="mx-auto">
          <ul className="flex">
            <li className="text-white text-xl font-semibold my-auto me-4 opacity-90 hover:opacity-100">
              <Link to="/birras">Catalogo</Link>
            </li>
            <li className="text-white text-xl font-semibold my-auto me-4 opacity-90 hover:opacity-100">
              <Link to="birra-form">Nueva birra</Link>
            </li>
            <Link to="/">
              <img
                src={logo}
                className="h-20 mt-2  hover:brightness-150 "
                alt="dos jarras chocando"
              />
            </Link>
            <li className="text-white text-xl font-semibold my-auto ms-4 opacity-90 hover:opacity-100">
              <Link to="perfil">Perfil</Link>
            </li>
            <li
              className="text-white text-xl font-semibold my-auto ms-4 opacity-90 hover:opacity-100 hover:text-red-500"
              onClick={handleLogOut}
            >
              <Link to="/">Cerrar sesión</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

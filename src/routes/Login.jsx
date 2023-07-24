import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Login() {
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMemberId = (e) => {
    const memberId = e.target.value;
    setMemberId(memberId);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios({
        url: `${process.env.REACT_APP_API_URL}/users/token`,
        data: { memberId: memberId, password: password },
        method: "post",
      });
      dispatch(login(response.data.user));
      if (response.data.user.token) {
        console.log(response.data.user.token);
        navigate("/birras");
      } else {
        console.log("no funcionó el login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-24 h-[80vh] ">
      <h2 className="text-2xl font-bold mb-1">Iniciar sesión</h2>
      <form action="" onSubmit={handleLogin}>
        <div className="flex flex-col mt-2">
          <label htmlFor="memberId">ID socio</label>
          <input
            type="string"
            name="memberId"
            id="memberId"
            className="border-2 w-[50%] md:w-[20%] mx-auto mt-1"
            onChange={handleMemberId}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 w-[50%] md:w-[20%] mx-auto mt-1"
            onChange={handlePassword}
          />
        </div>

        <button className="px-4 py-1 block mx-auto bg-black text-white border-1  w-28 font-semibold mt-4 rounded">
          Ingresar
        </button>
        <button className="px-4 py-1 block mx-auto bg-cream-dark text-white border-1 w-28  font-semibold mt-2 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;

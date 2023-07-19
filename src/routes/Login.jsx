import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        url: "http://localhost:8000/users/token",
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
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form action="" onSubmit={handleLogin}>
        <div className="flex justify-center py-2">
          <label htmlFor="memberId ">ID socio</label>
          <input
            type="string"
            name="memberId"
            id="memberId"
            className="border-2 ms-8"
            onChange={handleMemberId}
          />
        </div>
        <div className="flex justify-center py-2">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2  ms-3"
            onChange={handlePassword}
          />
        </div>
        <button className="px-4 py-1  bg-black text-white border-1  text-l rounded-[12%] font-semibold mt-4 hover:bg-cream-dark">
          Login
        </button>
        <br />
        {/* <Link to="/signup">
          <button className="px-2 py-1 bg-cream-light border-2 text-l rounded font-semibold mt-2">
            Sign Up
          </button>
        </Link> */}
      </form>
    </div>
  );
}

export default Login;

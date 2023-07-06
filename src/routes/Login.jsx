import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMemberId = (e) => {
    const memberId = e.target.value;
    setMemberId({ memberId });
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword({ password });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:8000/token",
      data: { memberId, password },
      method: "post",
    });
    dispatch(login(response.data.user));
    if (response.data.user.token) {
      navigate("/birras");
    }
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold">Login?</h2>

      <form action="" onSubmit={handleLogin}>
        <div className="">
          <label htmlFor="memeberId ">Member ID</label>
          <input
            type="text"
            className="border-2 mt-4 ms-2"
            onChange={handleMemberId}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border-2 mt-4 ms-4"
            onChange={handlePassword}
          />
        </div>
        <button className="px-4 py-1 bg-blue-500 hover:bg-blue-400 text-l rounded font-semibold mt-4">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

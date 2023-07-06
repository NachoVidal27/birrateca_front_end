import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { create } from "../redux/beerReducer";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    memberId: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleName = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, name: value });
  };

  const handleMemberId = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, memberId: value });
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, phone: value });
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, email: value });
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    console.log(value);
    setUser({ ...user, password: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      memberId: user.memberId,
      email: user.email,
      password: user.password,
      phone: user.phone,
    };
    console.log("no entramos al axios");
    const response = await axios({
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },
      method: "post",
      url: "http://localhost:8000/users",
      data: newUser,
    });
    dispatch(create(response.data));
    navigate("/login", { replace: true });
    console.log("entramos al axios");
  };

  return (
    <div className="mt-12">
      <div className="flex text-start ms-4 pt-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="me-6" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full border rounded ps-1"
              type="text"
              name="name"
              value={user.name}
              onChange={handleName}
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-2">
            <label className="me-6 mb-2" htmlFor="memberId">
              Número de socio
            </label>
            <input
              className="w-full border rounded ps-1"
              type="text"
              name="memberId"
              value={user.memberId}
              onChange={handleMemberId}
              placeholder="Ingrese su número de socio"
            />
          </div>
          <div className="mb-2">
            <label className="me-6" htmlFor="phone">
              Número de contacto
            </label>
            <input
              className="w-full border rounded ps-1"
              type="text"
              name="phone"
              value={user.phone}
              onChange={handlePhone}
              placeholder="Ingrese su número de contacto"
            />
          </div>
          <div className="mb-2">
            <label className="me-6" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border rounded ps-1"
              type="text"
              name="email"
              value={user.email}
              onChange={handleEmail}
              placeholder="Ingrese su email"
            />
          </div>
          <div className="mb-2">
            <label className="me-6" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border rounded ps-1"
              type="password"
              name="password"
              value={user.password}
              onChange={handlePassword}
              placeholder="Ingrese su password"
            />
          </div>
          <button className="px-4 py-1 bg-blue-500 hover:bg-blue-400 text-l rounded mt-2 ">
            Submit
          </button>
        </form>
      </div>

      <h1 className="text-xl text-yellow-500">{user.name}</h1>
      <h1 className="text-xl text-yellow-500">{user.memberId}</h1>
      <h1 className="text-xl text-yellow-500">{user.phone}</h1>
      <h1 className="text-xl text-yellow-500">{user.email}</h1>
      <h1 className="text-xl text-yellow-500">{user.password}</h1>
    </div>
  );
}

export default SignUp;

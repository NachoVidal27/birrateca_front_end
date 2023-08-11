import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { create } from "../redux/beerReducer";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/getAllUsers";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  // const users = [
  //   { email: "igjovidal@gmail.com", phone: "091459408" },
  //   {
  //     email: "igjovidaleeee@gmail.com",
  //     phone: "091459407",
  //   },
  // ];

  const [users, setUsers] = useState([]);

  const [formError, setFormError] = useState({
    email: false,
    phone: false,
    memberId: false,
  });

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
    setUser({ ...user, name: value });
  };

  const handleMemberId = (e) => {
    const value = e.target.value;
    let hasError = false;

    users.forEach((user) => {
      if (user.memberId === value) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, memberId: hasError });
    setUser({ ...user, memberId: value });
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    let hasError = false;
    users.forEach((user) => {
      if (user.phone === value) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, phone: hasError });
    setUser({ ...user, phone: value });
  };

  /* precisamos que el value del input email
users.map((user) => {
  if user.email === value {
    return alert("este email ya esta en uso")
  } else {
    setUser(...user, email: value)
  }
})
*/

  const handleEmail = (e) => {
    const value = e.target.value;
    let hasError = false;
    users.forEach((user) => {
      if (user.email === value) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, email: hasError });
    setUser({ ...user, email: value });
  };

  //   users.map((user) => {
  //     if (user.email === value) {
  //       return alert("este email ya esta en uso");
  //     } else {
  //       return setUser({ ...user, email: value });
  //     }
  //   });
  // };

  const handlePassword = (e) => {
    const value = e.target.value;
    setUser({ ...user, password: value });
  };

  const dispatch = useDispatch();

  const alerta = () => {
    toast.error("Los datos utilizados pertenecen a otro usuario", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formError.email === true ||
      formError.memberId === true ||
      formError.phone === true
    ) {
      return alerta();
    } else {
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
          "Content-Type": "application/json",
        },
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/users`,
        data: newUser,
      });
      dispatch(create(response.data));
      navigate("/login", { replace: true });
      console.log("entramos al axios");
    }
  };

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="mt-28 h-[75vh]">
      <div className="flex justify-center text-start mx-auto ms-4 pt-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="me-6 ps-1" htmlFor="name">
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
          <div className="">
            <label className="me-6 mb-2 ps-1" htmlFor="memberId">
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
          <div>
            {formError.memberId ? (
              <h2 className="text-md ps-1 text-red-500">Member Id en uso</h2>
            ) : null}
          </div>
          <div className="">
            <label className="me-6 ps-1" htmlFor="phone">
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
          <div>
            {formError.phone ? (
              <h2 className="text-md ps-1 text-red-500">Telefono en uso</h2>
            ) : null}
          </div>
          <div className="mb-1">
            <label className="me-6 ps-1" htmlFor="email">
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
            {formError.email ? (
              <h2 className="text-md ps-1 text-red-500">E-mail en uso</h2>
            ) : null}
          </div>

          <div className="mb-2">
            <label className="me-6 ps-1" htmlFor="password">
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
          <div className="flex justify-center">
            <button className="px-4 py-1  bg-cream-light hover:bg-cream-dark border-2 text-l rounded mt-2 ">
              Guardar
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { create } from "../redux/beerReducer";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/getAllUsers";
import { ToastContainer, toast } from "react-toastify";
/* eslint-disable */
function SignUp() {
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState({
    name: false,
    email: false,
    phone: false,
    memberId: false,
  });

  const [regexNameError, setRegexNameError] = useState(true);
  const [regexMemberIdError, setRegexMemberIdError] = useState(true);
  const [regexPhoneError, setRegexPhoneError] = useState(true);
  const [regexEmailError, setRegexEmailError] = useState(true);

  const regexName = /^[A-Za-záéíóúñÁÉÍÓÚÑ]+([ ]?[A-Za-záéíóúñÁÉÍÓÚÑ]+)*$/;
  const regexMemberID = /^(?:1000|[1-9][0-9]{0,2}|0)$/;
  const regexPhoneNumber = /^(?:\+598\d{8}|0\d{8})$/;
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

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
    setRegexNameError(true);
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
    setRegexMemberIdError(true);
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
    setRegexPhoneError(true);
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
    setRegexEmailError(true);
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

  // const alerta = () => {
  //   toast.error("Los datos utilizados pertenecen a otro usuario", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 4000,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      name: user.name,
      memberId: user.memberId,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };

    let checkName = regexName.test(newUser.name);
    let checkMemberId = regexMemberID.test(newUser.memberId);
    let checkPhone = regexPhoneNumber.test(newUser.phone);
    let checkEmail = regexEmail.test(newUser.email);

    console.log("name " + checkName);
    console.log("memberid " + checkMemberId);
    console.log("phone " + checkPhone);
    console.log("email " + checkEmail);

    if (
      checkName === true &&
      checkMemberId === true &&
      checkPhone === true &&
      checkEmail === true
    ) {
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
    } else {
      /*si tiene error se setea el valir del state en false */
      setRegexNameError(checkName);
      setRegexMemberIdError(checkMemberId);
      setRegexPhoneError(checkPhone);
      setRegexEmailError(checkEmail);
      return console.log("error en input");
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
          <div className="">
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
          <div>
            {regexNameError ? null : (
              <h2 className="text-md ps-1 text-red-500">
                Asegurate de no incluir simbolos o espacios después del nombre
              </h2>
            )}
          </div>
          <div className="">
            <label className="me-6 ps-1" htmlFor="memberId">
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
            {regexMemberIdError ? null : (
              <h2 className="text-md ps-1 text-red-500">
                Asegurate de incluir un número de socio valido
              </h2>
            )}
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
            {regexPhoneError ? null : (
              <h2 className="text-md ps-1 text-red-500">
                Asegurate que el número sea valido
              </h2>
            )}
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
            {regexEmailError ? null : (
              <h2 className="text-md ps-1 text-red-500">
                Asegurate de incluir un email valido
              </h2>
            )}
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

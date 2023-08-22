import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { edit } from "../redux/userReducer";
import SmallerBeerCard from "../components/SmallerBeerCard";
import { getAllUsers } from "../services/getAllUsers";

function Profile() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [memberId, setMemberId] = useState(user.memberId);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [formError, setFormError] = useState({
    email: false,
    phone: false,
    memberId: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [regexNameError, setRegexNameError] = useState(true);
  const [regexMemberIdError, setRegexMemberIdError] = useState(true);
  const [regexPhoneError, setRegexPhoneError] = useState(true);
  const [regexEmailError, setRegexEmailError] = useState(true);

  const regexName = /^[A-Za-záéíóúñÁÉÍÓÚÑ]+([ ]?[A-Za-záéíóúñÁÉÍÓÚÑ]+)*$/;
  const regexMemberID = /^(?:1000|[1-9][0-9]{0,2}|0)$/;
  const regexPhoneNumber = /^(?:\+598\d{8}|0\d{8})$/;
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setRegexNameError(true);
  };

  const handleMemberId = (e) => {
    const value = e.target.value;
    let hasError = false;

    users.forEach((index) => {
      if (index.memberId === value && value !== user.memberId) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, memberId: hasError });
    setMemberId(value);
    setRegexMemberIdError(true);
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    let hasError = false;
    users.forEach((index) => {
      if (index.phone === value && value !== user.phone) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, phone: hasError });
    setPhone(value);
    setRegexPhoneError(true);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    let hasError = false;
    users.forEach((index) => {
      if (index.email === value && value !== user.email) {
        console.log("coincide con db");
        hasError = true;
      }
    });
    setFormError({ ...formError, email: hasError });
    setEmail(value);
    setRegexEmailError(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUser = {
      name: name,
      memberId: memberId,
      phone: phone,
      email: email,
    };

    let checkName = regexName.test(newUser.name);
    let checkMemberId = regexMemberID.test(newUser.memberId);
    let checkPhone = regexPhoneNumber.test(newUser.phone);
    let checkEmail = regexEmail.test(newUser.email);

    console.log("name " + checkName);
    console.log("memberid " + checkMemberId);
    console.log("phone " + checkPhone);
    console.log("email " + checkEmail);

    if (!name || !memberId || !phone || !email) {
      // setFormError("Por favor, asegurate de completar todos los campos ");
      return;
    } else if (
      checkName === true &&
      checkMemberId === true &&
      checkPhone === true &&
      checkEmail === true
    )
      try {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          data: {
            name,
            memberId,
            phone,
            email,
          },
        });
        navigate("/perfil");
        dispatch(edit(response.data));
      } catch (error) {
        console.log(error);
        // setFormError("An error occurred while submitting the form.");
      }
    else {
      setRegexNameError(checkName);
      setRegexMemberIdError(checkMemberId);
      setRegexPhoneError(checkPhone);
      setRegexEmailError(checkEmail);
      return console.log("error en input");
    }
  };

  return user.beers ? (
    <div className="mt-28 h-fit mb-36">
      <h1 className="text-[2rem] font-bold font-roboto ">
        Bienvenido {user.name}
      </h1>
      <h3 className="text-xl font-semibold mt-1 font-roboto">
        Aqui podrás editar la información de tu cuenta
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-6 gap-4">
        <div className="h-80 md:w-[70%] mx-auto ">
          <h2 className="text-2xl font-semibold mb-8">
            Información de usuario
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="name"
                className="text-start text-lg font-semibold"
              >
                Nombre
              </label>
              <div>
                <div>
                  <input
                    type="text"
                    className="border border-black rounded px-2 w-[90%] md:w-full"
                    value={name}
                    onChange={handleName}
                  />
                  {regexNameError ? null : (
                    <h2 className="text-md ps-1 text-red-500">
                      Asegurate de no incluir simbolos en este input
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="memberId"
                className="text-start text-lg font-semibold"
              >
                Número de socio
              </label>
              <div>
                <input
                  type="text"
                  className="border border-black rounded px-2 w-[90%] md:w-full"
                  value={memberId}
                  onChange={handleMemberId}
                />
                {formError.memberId ? (
                  <h2 className="text-md ps-1 text-red-500">Número inválido</h2>
                ) : null}
                {regexMemberIdError ? null : (
                  <h2 className="text-md ps-1 text-red-500">
                    Asegurate de incluir un número de socio valido
                  </h2>
                )}
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="phone"
                className="text-start text-lg font-semibold "
              >
                Teléfono
              </label>
              <div>
                {" "}
                <input
                  type="text"
                  className="border border-black rounded px-2 w-[90%] md:w-full"
                  value={phone}
                  onChange={handlePhone}
                />
                {formError.phone ? (
                  <h2 className="text-md ps-1 text-red-500">Telefono en uso</h2>
                ) : null}
                {regexPhoneError ? null : (
                  <h2 className="text-md ps-1 text-red-500">
                    Asegurate que el número sea valido
                  </h2>
                )}
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="email"
                className="text-start text-lg font-semibold"
              >
                Email
              </label>
              <div>
                <input
                  type="text"
                  className="border border-black rounded px-2 w-[90%] md:w-full"
                  value={email}
                  onChange={handleEmail}
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
            </div>
            <hr />

            <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-4 rounded text-md text-white">
              Confirmar cambios
            </button>
          </form>
        </div>
        <div className="">
          {user.beers.length > 0 ? (
            <h2 className="text-2xl font-semibold mt-14 md:mt-0 mb-6">
              Tus birras
            </h2>
          ) : null}

          <div className="">
            {user.beers.map((birra) => (
              <SmallerBeerCard
                key={birra.id}
                id={birra.id}
                photo={birra.photo}
                style={birra.style}
                abv={birra.abv}
                description={birra.description}
                date={birra.brewDate}
                location={birra.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-24">
      <h2 className="mt-24 text-red-500 text-2xl">rompimo todo</h2>
    </div>
  );
}

export default Profile;

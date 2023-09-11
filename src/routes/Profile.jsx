import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { edit } from "../redux/userReducer";
import SmallerBeerCard from "../components/SmallerBeerCard";
import { getAllUsers } from "../services/getAllUsers";
import { ToastContainer, toast } from "react-toastify";

function Profile() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [formError, setFormError] = useState({
    email: false,
    phone: false,
  });
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [regexNameError, setRegexNameError] = useState(true);
  const [regexPhoneError, setRegexPhoneError] = useState(true);
  const [regexEmailError, setRegexEmailError] = useState(true);

  const regexName = /^[A-Za-záéíóúñÁÉÍÓÚÑ]+([ ]?[A-Za-záéíóúñÁÉÍÓÚÑ]+)*$/;
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

  const notify = () => {
    toast.success("Usuario editado correctamente", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUser = {
      name: name,
      phone: phone,
      email: email,
    };

    let checkName = regexName.test(newUser.name);

    let checkPhone = regexPhoneNumber.test(newUser.phone);
    let checkEmail = regexEmail.test(newUser.email);

    if (!name || !phone || !email) {
      // setFormError("Por favor, asegurate de completar todos los campos ");
      return;
    } else if (checkName && checkPhone && checkEmail)
      try {
        const response = await axios({
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          data: {
            name,
            phone,
            email,
          },
        });
        dispatch(edit(response.data));
        notify();
        // setTimeout(function () {
        //   navigate("/perfil");

        // }, 200);
      } catch (error) {
        console.log(error);
        // setFormError("An error occurred while submitting the form.");
      }
    else {
      setRegexNameError(checkName);
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
                    className="border border-black rounded px-2 w-[900%] md:w-full"
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
            <ToastContainer />
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

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { edit } from "../redux/userReducer";
import SmallerBeerCard from "../components/SmallerBeerCard";

function Profile() {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [memberId, setMemberId] = useState(user.memberId);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleMemberId = (e) => {
    const value = e.target.value;
    setMemberId(value);
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !memberId || !phone || !email) {
      setFormError("Por favor, asegurate de completar todos los campos ");
      return;
    }
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
      setFormError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="mt-28 h-fit mb-36">
      <h1 className="text-[2rem] font-bold font-roboto ">
        Bienvenido {user.name}
      </h1>
      <h3 className="text-xl font-semibold mt-1 font-roboto">
        Aqui podrás editar la información de tu cuenta
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-6 gap-4">
        <div className="h-80 w-[70%] mx-auto">
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
              <input
                type="text"
                className="border border-black rounded px-2 "
                value={name}
                onChange={handleName}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="memberId"
                className="text-start text-lg font-semibold"
              >
                Número de socio
              </label>
              <input
                type="text"
                className="border border-black rounded px-2"
                value={memberId}
                onChange={handleMemberId}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="phone"
                className="text-start text-lg font-semibold "
              >
                Teléfono
              </label>
              <input
                type="text"
                className="border border-black rounded px-2"
                value={phone}
                onChange={handlePhone}
              />
            </div>
            <hr />
            <div className="grid grid-cols-2 my-3 mx-4">
              <label
                htmlFor="email"
                className="text-start text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                className="border border-black rounded px-2 "
                value={email}
                onChange={handleEmail}
              />
            </div>
            <hr />
            <div>
              {" "}
              <small className="text-red-600 text-md font-semibold">
                {formError}
              </small>
            </div>

            <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-4 rounded text-md text-white">
              Confirmar cambios
            </button>
          </form>
        </div>
        <div className="">
          {user.beers.lenght > 1 ? (
            <h2 className="text-2xl font-semibold mt-14 md:mt-0 mb-6">
              Tus birras
            </h2>
          ) : null}

          <div className="">
            {user.beers.map((birra) => (
              <SmallerBeerCard
                key={birra.id}
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
  );
}

export default Profile;

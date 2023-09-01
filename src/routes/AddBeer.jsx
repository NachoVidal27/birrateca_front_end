import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BeerCardPreview from "../components/BeerCardPreview";
import axios from "axios";
import { create } from "../redux/beerReducer";
import { newUserBeer } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from "react-toastify";

function AddBeer() {
  const user = useSelector((state) => state.user);
  const [newBeer, setNewBeer] = useState({
    style: "",
    description: "",
    location: "",
    abv: "",
    photo: "",
    brewDate: "",
  });

  const [charCount, setCharCount] = useState(120);

  const navigate = useNavigate();

  const handleLocation = (e) => {
    const location = e.target.value;

    setNewBeer({ ...newBeer, location: location });
  };

  const handleBrewDate = (e) => {
    const brewDate = e.target.value;

    setNewBeer({ ...newBeer, brewDate: brewDate });
  };

  const handleStyle = (e) => {
    const style = e.target.value;

    setNewBeer({ ...newBeer, style: style });
  };

  const handleDescription = (e) => {
    const description = e.target.value;

    // Verificar si la longitud del texto ingresado supera el límite
    if (description.length <= 120) {
      setNewBeer({ ...newBeer, description });
      setCharCount(120 - description.length);
    } else {
      // Si supera el límite, truncar el texto para que tenga solo 120 caracteres
      setNewBeer({ ...newBeer, description: description.slice(0, 120) });
      setCharCount(0);
    }
  };

  const handleAbv = (e) => {
    const abv = e.target.value;

    setNewBeer({ ...newBeer, abv: abv });
  };

  const handlePhoto = (e) => {
    const photo = e.target.files[0];

    setNewBeer({ ...newBeer, photo: photo });
  };

  const dispatch = useDispatch();

  // const notify = () => {
  //   toast.success("Birra enviada", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 4000,
  //   });
  // };

  const notifyMissingField = () => {
    toast.warning("Asegurate de haber completado todos los campos", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      newBeer.abv === "" ||
      newBeer.brewDate === "" ||
      newBeer.description === "" ||
      newBeer.photo === "" ||
      newBeer.style === "" ||
      newBeer.location === ""
    ) {
      notifyMissingField();
    } else {
      // notify();
      const formData = new FormData();

      const data = {
        style: newBeer.style,
        description: newBeer.description,
        abv: newBeer.abv,
        photo: newBeer.photo,
        brewDate: newBeer.brewDate,
        location: newBeer.location,
      };

      for (const key in data) {
        formData.append(key, newBeer[key]);
      }

      // data correcta

      // formData.append("style", newBeer.style);
      // formData.append("description", newBeer.description);
      // formData.append("abv", newBeer.abv);
      // formData.append("photo", newBeer.photo);
      // formData.append("brewDate", newBeer.brewDate);
      // formData.append("location", newBeer.location);
      try {
        const response = await axios({
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
          method: "post",
          url: "https://birrateca-back.vercel.app/beers/",
          data: formData,
        });
        navigate("/birras", { replace: true });
        dispatch(create(response.data));
        dispatch(newUserBeer(response.data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-32 h-[90vh]">
        <div className="md:mt-28">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="style"
                  className="font-semibold  font-roboto text-lg my-1 md:my-0"
                >
                  Estilo
                </label>
              </div>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                onChange={handleStyle}
                value={newBeer.style}
              />
            </div>
            <hr className="ms-28 me-4 my-2 invisible md:visible" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="abv"
                  className="font-semibold  font-roboto text-lg my-1 md:my-0"
                >
                  Abv
                </label>
              </div>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                onChange={handleAbv}
                value={newBeer.abv}
              />
            </div>
            <hr className="ms-28 me-4 my-2 invisible md:visible" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="location"
                  className="font-semibold  font-roboto text-lg my-1 md:my-0"
                >
                  Ubicación
                </label>
              </div>
              <select
                name="cars"
                className="border-2 mx-8 md:mx-2 roundeed"
                htmlFor="location"
                onChange={handleLocation}
              >
                <option value="Artigas">Artigas</option>
                <option value="Canelones">Canelones</option>
                <option value="Cerro Largo">Cerro Largo</option>
                <option value="Colonia">Colonia</option>
                <option value="Durazno">Durazno</option>
                <option value="Flores">Flores</option>
                <option value="Florida">Florida</option>
                <option value="Lavalleja">Lavalleja</option>
                <option value="Maldonado">Maldonado</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Paysandu">Paysandu</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="Rivera">Rivera</option>
                <option value="Rocha">Rocha</option>
                <option value="Salto">Salto</option>
                <option value="San José">San José</option>
                <option value="Soriano">Soriano</option>
                <option value="Tacuarembó">Tacuarembo</option>
                <option value="Treinta y Tres">Treinta y Tres</option>
              </select>
            </div>
            <hr className="ms-28 me-4 my-2 invisible md:visible" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="photo"
                  className="font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Foto
                </label>
              </div>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="file"
                onChange={handlePhoto}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div></div>
              <Link to="/tips">
                <div className="w-[50%] md:w-[80%] mx-auto mt-2 border border-black rounded bg-black roundeed my-1 py-1 hover:scale-105">
                  <h2 className="text-white text-sm hover:text-cream-dark  ">
                    tips para fotografías
                  </h2>
                </div>
              </Link>
            </div>
            <hr className="ms-28 me-4 my-2 invisible md:visible" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="brewDate"
                  className="font-semibold  font-roboto text-lg my-1 md:my-0"
                >
                  Fecha elaboración
                </label>
              </div>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="date"
                onChange={handleBrewDate}
                value={newBeer.brewDate}
              />
            </div>
            <hr className="ms-28 me-4 my-2 invisible md:visible" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[50%] mx-auto">
                <label
                  htmlFor="description"
                  className="font-semibold  font-roboto text-lg my-1 md:my-0"
                >
                  Descripción
                </label>
              </div>
              <textarea
                className="border-2 mx-8 md:mx-2 roundeed h-16 resize-none"
                type="text"
                onChange={handleDescription}
                value={newBeer.description}
                maxLength={120}
              />
              <div></div>
              <small className={charCount < 20 ? "text-red-500" : null}>
                {" "}
                Palabras restantes: {charCount}
              </small>
            </div>

            <div></div>
            <div className="">
              <button className="px-4 py-2 mt-6 bg-black text-white font-semibold rounded text-end">
                Guardar
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
        <div className="invisible md:visible mt-20">
          <h3 className=" text-xl font-bold  mb-3">PREVIEW</h3>
          <BeerCardPreview
            key={newBeer.id}
            photo={newBeer.photo}
            style={newBeer.style}
            abv={newBeer.abv}
            description={newBeer.description}
            date={newBeer.brewDate}
            location={newBeer.location}
          />
        </div>
      </div>
    </>
  );
}

export default AddBeer;

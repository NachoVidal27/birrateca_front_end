import React from "react";
import { Link } from "react-router-dom";
import BeerCardPreview from "../components/BeerCardPreview";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { editAllBeers } from "../redux/beerReducer";
import { deleteUserBeer } from "../redux/userReducer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from "react-toastify";

function EditBeer() {
  const user = useSelector((state) => state.user);
  const [birra, setBirra] = useState(null);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_URL}/beers/${id}`;

  const handleStyle = (e) => {
    setBirra({ ...birra, style: e.target.value });
  };
  const handleAbv = (e) => {
    setBirra({ ...birra, abv: e.target.value });
  };
  const handleLocation = (e) => {
    setBirra({ ...birra, location: e.target.value });
  };
  const handleBrewDate = (e) => {
    setBirra({ ...birra, brewDate: e.target.value });
  };
  const handleDescription = (e) => {
    setBirra({ ...birra, description: e.target.value });
  };

  const handlePhoto = (e) => {
    const photo = e.target.files[0];
    setBirra({ ...birra, photo: photo });
  };

  // const notifyMissingField = () => {
  //   toast.warning("Asegurate de haber seleccionado una foto", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 2000,
  //   });
  // };

  // const notifySuccess = () => {
  //   toast.success("Birra editada correctamente", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 6000,
  //   });
  // };

  const notifyDelete = () => {
    toast.success("Birra eliminada correctamente", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 6000,
    });
  };

  /* eslint-disable */
  useEffect(() => {
    const getBirra = async () => {
      const response = await axios({
        method: "get",
        url: url,
      });

      setBirra(response.data);
    };
    getBirra();
  }, []);
  /* eslint-disable */

  const handleDelete = async (event) => {
    event.preventDefault();
    notifyDelete();
    try {
      const response = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/beers/${birra.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch(deleteUserBeer(response.data));
      // dispatch(deleteBeer(response.data))
      navigate("/birras");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById("form-editBeer");
    if (form.reportValidity()) {
      try {
        const formData = new FormData();
        formData.append("_id", birra._id);
        formData.append("style", birra.style);
        formData.append("description", birra.description);
        formData.append("location", birra.location);
        formData.append("abv", birra.abv);
        formData.append("photo", birra.photo);
        formData.append("brewDate", birra.brewDate);

        const response = await axios({
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
          method: "patch",
          url: `${process.env.REACT_APP_API_URL}/beers/${birra.id}`,
          data: formData,
        });
        navigate("/birras", { replace: true });
        dispatch(editAllBeers(response.data));
      } catch (error) {
        console.log(error);
      }

      // dispatch(newUserBeer(response.data));
    }
  };

  return !birra ? (
    <div className="h-[100vh]">
      {" "}
      <Spinner />
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-32 h-[80vh]">
        <div className="md:mt-28">
          <ToastContainer />
          <form id="form-editBeer" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="style"
                  className=" font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Estilo
                </label>
              </div>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                name="style"
                defaultValue={birra.style}
                onChange={handleStyle}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="abv"
                  className=" font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Abv
                </label>
              </div>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                defaultValue={birra.abv}
                onChange={handleAbv}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="location"
                  className="font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Ubicación
                </label>
              </div>
              <select
                name="cars"
                className="border-2 mx-8 md:mx-2 roundeed"
                htmlFor="location"
                onChange={handleLocation}
                required
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="photo"
                  className="font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Foto
                </label>
              </div>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="file"
                onChange={handlePhoto}
                required
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="brewDate"
                  className="font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Fecha elaboración
                </label>
              </div>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="date"
                defaultValue={birra.brewDate}
                onChange={handleBrewDate}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className="flex items-start md:w-[40%] mx-auto">
                <label
                  htmlFor="description"
                  className="font-semibold md:font-semibold font-roboto text-lg my-1 md:my-0"
                >
                  Descripción
                </label>
              </div>
              <textarea
                className="border-2 mx-8 md:mx-2 roundeed h-32 resize-none"
                type="text"
                defaultValue={birra.description}
                onChange={handleDescription}
                required
              />
              <div></div>

              <div className="">
                <button className="px-4 py-2 mt-6 bg-black text-white font-semibold rounded text-end">
                  Guardar
                </button>
                <button
                  className="ms-2 px-4 py-2 mt-6 bg-red-500 text-white font-semibold rounded text-end"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="invisible md:visible mt-20">
          <h3 className=" text-xl font-bold  mb-3">PREVIEW</h3>
          <BeerCardPreview
            key={birra.id}
            style={birra.style}
            abv={birra.abv}
            description={birra.description}
            date={birra.brewDate}
            location={birra.location}
          />
        </div>
      </div>
    </>
  );
}

export default EditBeer;

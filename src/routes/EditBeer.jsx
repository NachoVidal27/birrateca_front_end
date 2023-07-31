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
import { useSelector } from "react-redux/es/hooks/useSelector";

function EditBeer() {
  const user = useSelector((state) => state.user);
  const [birra, setBirra] = useState(null);
  const [formError, setFormError] = useState("");
  // const [birraLoaded, setBirraLoaded] = useState(false);
  // const [style, setStyle] = useState();
  // const [abv, setAbv] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [brewDate, setBrewDate] = useState(null);
  // const [description, setDescription] = useState(null);
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

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/beers/${birra.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      navigate("/birras");
    } catch (error) {
      console.log(error);
      setFormError("An error occurred while submitting the form.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    // dispatch(newUserBeer(response.data));
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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="style"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Estilo BJCP
              </label>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                name="style"
                defaultValue={birra.style}
                onChange={handleStyle}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="abv"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Abv
              </label>
              <input
                className="border-2  mx-8 md:mx-2 roundeed"
                type="text"
                defaultValue={birra.abv}
                onChange={handleAbv}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="location"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Ubicación
              </label>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="text"
                defaultValue={birra.location}
                onChange={handleLocation}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="photo"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Foto
              </label>
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="brewDate"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Fecha de elaboración
              </label>
              <input
                className="border-2 mx-8 md:mx-2 roundeed"
                type="text"
                defaultValue={birra.brewDate}
                onChange={handleBrewDate}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <label
                htmlFor="description"
                className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
              >
                Descripción
              </label>
              <textarea
                className="border-2 mx-8 md:mx-2 roundeed h-16 resize-none"
                type="text"
                defaultValue={birra.description}
                onChange={handleDescription}
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

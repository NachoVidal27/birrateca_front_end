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

function EditBeer() {
  /* eslint-disable */
  const [birra, setBirra] = useState(null);
  // const [birraLoaded, setBirraLoaded] = useState(false);
  // const [style, setStyle] = useState();
  // const [abv, setAbv] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [brewDate, setBrewDate] = useState(null);
  // const [description, setDescription] = useState(null);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* eslint-disable */
  const url = `${process.env.REACT_APP_API_URL}/beers/${id}`;

  const handleStyle = (e) => {
    setBirra({ ...birra, style: e.target.value });
  };
  const handleAbv = (e) => {
    setBirra({ ...birra, abv: e.target.abv });
  };
  const handleLocation = (e) => {
    setBirra({ ...birra, location: e.target.location });
  };
  const handleBrewDate = (e) => {
    setBirra({ ...birra, brewDate: e.target.brewDate });
  };
  const handleDescription = (e) => {
    setBirra({ ...birra, description: e.target.description });
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

    console.log(birra);
  }, [id]);

  return !birra ? (
    <div className="h-[100vh]">
      {" "}
      <Spinner />
    </div>
  ) : (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-32 h-[80vh]">
        <div className="md:mt-28">
          <form>
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
              <input className="border-2 mx-8 md:mx-2 roundeed" type="file" />
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
            </div>

            <div></div>
            <div className="">
              <button className="px-4 py-2 mt-6 bg-black text-white font-semibold rounded text-end">
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div className="invisible md:visible mt-20">
          <h3 className=" text-xl font-bold  mb-3">PREVIEW</h3>
          <BeerCardPreview
            // key={newBeer.id}
            // photo={newBeer.photo}
            style={birra.style}
            // abv={newBeer.abv}
            // description={newBeer.description}
            // date={newBeer.brewDate}
            // location={newBeer.location}
          />
        </div>
      </div>
    </>
  );
}

export default EditBeer;

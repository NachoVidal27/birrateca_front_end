import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BeerCardPreview from "../components/BeerCardPreview";
import axios from "axios";
import { create } from "../redux/beerReducer";
// import { getAllBeers } from "../services/getAllBeers";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function AddBeer() {
  const user = useSelector((state) => state.user);
  const [newBeer, setNewBeer] = useState({
    beerId: "",
    style: "",
    description: "",
    location: "",
    abv: "",
    photo: "",
    brewDate: "",
    memberId: "",
  });

  const navigate = useNavigate();

  const handleIngredients = (e) => {
    const location = e.target.value;

    setNewBeer({ ...newBeer, location: location });
  };

  const handleBrewDate = (e) => {
    const brewDate = e.target.value;

    setNewBeer({ ...newBeer, brewDate: brewDate });
  };

  const handleMemberId = (e) => {
    const memberId = e.target.value;

    setNewBeer({ ...newBeer, memberId: memberId });
  };

  const handleStyle = (e) => {
    const style = e.target.value;

    setNewBeer({ ...newBeer, style: style });
  };

  const handleDescription = (e) => {
    const description = e.target.value;

    setNewBeer({ ...newBeer, description: description });
  };

  const handleAbv = (e) => {
    const abv = e.target.value;

    setNewBeer({ ...newBeer, abv: abv });
  };

  const handlePhoto = (e) => {
    const photo = e.target.files[0];
    console.log(photo);
    setNewBeer({ ...newBeer, photo: photo });
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   getAllBeers().then((data) => {
  //     setBeers(data);
  //   });
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("style", newBeer.style);
    formData.append("description", newBeer.description);
    formData.append("abv", newBeer.abv);
    formData.append("photo", newBeer.photo);
    formData.append("brewDate", newBeer.brewDate);
    formData.append("location", newBeer.location);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/beers`,
      data: formData,
    });
    dispatch(create(response.data));
    navigate("/birras", { replace: true });
  };

  // const beerToAdd = {
  //   beerId: beer.length + 1,
  //   style: newBeer.style,
  //   description: newBeer.description,
  //   abv: newBeer.abv,
  //   photo: newBeer.photo,
  //   brewDate: newBeer.brewDate,
  //   memberId: newBeer.memberId,
  //   location: newBeer.location,
  // };
  /* LA LINEA CORRECTA DEBE SER 
        setBeer([...beer, beerToAdd]);

        eliminamos el ...beer para que no renderice el objeto vacio
    */
  // setBeer([beerToAdd]);
  // setNewBeer("");
  // console.log(newBeer);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-8 mb-32 h-[80vh]">
      {" "}
      <div className="mt-14 md:mt-28">
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
              onChange={handleStyle}
              value={newBeer.style}
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
              onChange={handleAbv}
              value={newBeer.abv}
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
              onChange={handleIngredients}
              value={newBeer.location}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
            <label
              htmlFor="memeberId"
              className="font-semibold md:font-normal font-roboto text-lg my-1 md:my-0"
            >
              Número de socio
            </label>
            <input
              className="border-2  mx-8 md:mx-2 roundeed"
              type="text"
              onChange={handleMemberId}
              value={newBeer.memberId}
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
          <div className="grid grid-cols-2">
            <div></div>
            <Link to="/tips">
              <div className="border border-black rounded bg-black mx-2 roundeed my-1 py-1 hover:bg-cream-dark">
                <h2 className="text-white text-sm  hover:text-black ">
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
              onChange={handleBrewDate}
              value={newBeer.brewDate}
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
              onChange={handleDescription}
              value={newBeer.description}
              maxLength={160}
            />
          </div>
          <div></div>
          <div className="">
            {" "}
            <button className="px-4 py-2 mt-6 bg-black text-white font-semibold rounded text-end">
              Guardar
            </button>
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
  );
}

export default AddBeer;

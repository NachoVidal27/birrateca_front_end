import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BeerCardPreview from "../components/BeerCardPreview";
import axios from "axios";
import { create } from "../redux/beerReducer";
import { getAllBeers } from "../services/getAllBeers";
import { useNavigate } from "react-router-dom";

function AddBeer() {
  const [beers, setBeers] = useState([]);
  const [newBeer, setNewBeer] = useState({
    beerId: "",
    style: "",
    description: "",
    ingredients: "",
    abv: "",
    photo: "",
    brewDate: "",
    memberId: "",
  });

  const navigate = useNavigate();

  const handleIngredients = (e) => {
    const ingredients = e.target.value;

    setNewBeer({ ...newBeer, ingredients: ingredients });
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

  useEffect(() => {
    getAllBeers().then((data) => {
      setBeers(data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("style", newBeer.style);
    formData.append("description", newBeer.description);
    formData.append("abv", newBeer.abv);
    formData.append("photo", newBeer.photo);
    formData.append("brewDate", newBeer.brewDate);
    formData.append("ingredients", newBeer.ingredients);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "post",
      url: "http://localhost:8000/beers",
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
  //   ingredients: newBeer.ingredients,
  // };
  /* LA LINEA CORRECTA DEBE SER 
        setBeer([...beer, beerToAdd]);

        eliminamos el ...beer para que no renderice el objeto vacio
    */
  // setBeer([beerToAdd]);
  // setNewBeer("");
  // console.log(newBeer);

  return (
    <div className="grid grid-cols-2 mt-8">
      {" "}
      <div className="mt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2">
            <label htmlFor="style">Style</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleStyle}
              value={newBeer.style}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="abv">Abv</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleAbv}
              value={newBeer.abv}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="description">Description</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleDescription}
              value={newBeer.description}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="ingredients">Ingredients</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleIngredients}
              value={newBeer.ingredients}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="memeberId">MemberId</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleMemberId}
              value={newBeer.memberId}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="photo">Photo</label>
            <input
              className="border-2 mt-2 mx-2"
              type="file"
              onChange={handlePhoto}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="brewDate">BrewDate</label>
            <input
              className="border-2 mt-2 mx-2"
              type="text"
              onChange={handleBrewDate}
              value={newBeer.brewDate}
            />
          </div>

          <button className="px-4 py-2 mt-6 bg-black text-white font-semibold rounded text-end">
            Guardar
          </button>
        </form>
      </div>
      <div className="mt-20">
        <h3 className="text-xl font-bold  mb-4">PREVIEW</h3>
        <BeerCardPreview
          key={newBeer.id}
          photo={newBeer.photo}
          style={newBeer.style}
          abv={newBeer.abv}
          description={newBeer.description}
          date={newBeer.brewDate}
        />
      </div>
    </div>
  );
}

export default AddBeer;
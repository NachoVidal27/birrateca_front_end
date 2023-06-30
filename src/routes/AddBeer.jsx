import React from "react";
import { useState } from "react";
import birras from "../db";
import BeerCard from "../components/BeerCard";

function AddBeer() {
  const [beer, setBeer] = useState([birras]);
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

  const handleIngredients = (e) => {
    const ingredients = e.target.value;
    console.log(ingredients);
    setNewBeer({ ...newBeer, ingredients: ingredients });
  };

  const handleBrewDate = (e) => {
    const brewDate = e.target.value;
    console.log(brewDate);
    setNewBeer({ ...newBeer, brewDate: brewDate });
  };

  const handleMemberId = (e) => {
    const memberId = e.target.value;
    console.log(memberId);
    setNewBeer({ ...newBeer, memberId: memberId });
  };

  const handleStyle = (e) => {
    const style = e.target.value;
    console.log(style);
    setNewBeer({ ...newBeer, style: style });
  };

  const handleDescription = (e) => {
    const description = e.target.value;
    console.log(description);
    setNewBeer({ ...newBeer, description: description });
  };

  const handleAbv = (e) => {
    const abv = e.target.value;
    console.log(abv);
    setNewBeer({ ...newBeer, abv: abv });
  };

  const handlePhoto = (e) => {
    const photo = e.target.value;
    console.log(photo);
    setNewBeer({ ...newBeer, photo: photo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const beerToAdd = {
      beerId: beer.length + 1,
      style: newBeer.style,
      description: newBeer.description,
      abv: newBeer.abv,
      photo: newBeer.photo,
      brewDate: newBeer.brewDate,
      memberId: newBeer.memberId,
      ingredients: newBeer.ingredients,
    };
    /* LA LINEA CORRECTA DEBE SER 
        setBeer([...beer, beerToAdd]);

        eliminamos el ...beer para que no renderice el objeto vacio
    */
    setBeer([beerToAdd]);
    setNewBeer("");
    console.log(newBeer);
  };

  return (
    <div className="mt-20">
      {beer.map((birra) =>
        newBeer.beerId !== "" ? (
          <BeerCard
            key={birra.beerId}
            name={birra.style}
            abv={birra.abv}
            description={birra.description}
            date={birra.brewDate}
          />
        ) : (
          console.log("cagaste guachin")
        )
      )}
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
            value={newBeer.photo}
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

        <button className="px-2 py-1 bg-blue-400 text-white font-semibold rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default AddBeer;

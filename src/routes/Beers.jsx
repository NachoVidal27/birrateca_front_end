import React from "react";
import BeerCard from "../components/BeerCard";
import birras from "../db";

console.log(birras);

function Beers() {
  return (
    <div className="mt-12">
      <h2 className="text-start ps-6 pt-8 font-semibold mb-6">Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
        {birras.map((birra) => (
          <BeerCard
            key={birra.id}
            photo={birra.photo}
            name={birra.name}
            abv={birra.abv}
            description={birra.description}
            date={birra.date}
          />
        ))}
      </div>{" "}
    </div>
  );
}

export default Beers;

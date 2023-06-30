import React from "react";
import BeerCard from "../components/BeerCard";
import birras from "../db";
import { useState, useEffect } from "react";
import { getAllBeers } from "../services/getAllBeers";

console.log(birras);

function Beers() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllBeers().then((data) => {
      setBeers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-12">
      <h2 className=" ps-6 pt-8 text-[1.5rem] font-bold  mb-6 text-center">
        Disponibles
      </h2>
      {loading ? (
        <h2 className="bg-red-500 text-white font-bold">"Cargando..."</h2>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-2 ">
        {beers.map((birra) => (
          <BeerCard
            key={birra.id}
            photo={birra.photo}
            style={birra.style}
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

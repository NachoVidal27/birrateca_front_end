import React from "react";
import BeerCard from "../components/BeerCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers } from "../services/getAllBeers";
import { getAll } from "../redux/beerReducer";

function Beers() {
  const beers = useSelector((state) => state.beer);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getAllBeers().then((data) => {
      dispatch(getAll(data));
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-8">
      <h2 className=" ps-6 pt-8 text-[2rem] font-bold text-center">
        Nuestras birras
      </h2>
      <div className="w-[40%] border border-b-1 mx-auto mt-2 border-cream-dark opacity-40 mb-10"></div>
      {loading ? (
        <h2 className="bg-red-500 text-white font-bold">"Cargando..."</h2>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-4 lg:gap-4 ">
        {beers?.map((birra) => (
          <BeerCard
            key={birra.id}
            photo={birra.photo}
            style={birra.style}
            abv={birra.abv}
            description={birra.description}
            date={birra.brewDate}
          />
        ))}
      </div>{" "}
    </div>
  );
}

export default Beers;

import React from "react";
import BeerCard from "../components/BeerCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeers } from "../services/getAllBeers";
import { getAll } from "../redux/beerReducer";

function Beers() {
  const beers = useSelector((state) => state.beer);

  const dispatch = useDispatch();

  /* eslint-disable */
  useEffect(() => {
    getAllBeers().then((data) => {
      dispatch(getAll(data));
    });
  }, []);
  /* eslint-disable */
  return (
    beers &&
    (beers.length === 0 ? (
      <div className="h-[60vH]">
        <h2 className="text-xl text-red-600">hola</h2>
      </div>
    ) : (
      <div className="mt-20 mb-12 h-fit">
        <h2 className=" px-auto pt-8 text-[2rem] font-bold text-center font-roboto">
          Nuestras birras
        </h2>
        <div className="w-[40%] border border-b-1 mx-auto mt-2 border-cream-dark opacity-40 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 lg:gap-2 w-[80%] xl:w-[70%] mx-auto">
          {beers?.map((birra) => (
            <BeerCard
              key={birra.id}
              photo={birra.photo}
              style={birra.style}
              abv={birra.abv}
              description={birra.description}
              date={birra.brewDate}
              location={birra.location}
              user_id={birra.user_id}
            />
          ))}
        </div>{" "}
      </div>
    ))
  );
}

export default Beers;

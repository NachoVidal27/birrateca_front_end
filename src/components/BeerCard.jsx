import React from "react";

function BeerCard({ photo, name, abv, date, description }) {
  return (
    <div className="w-[275px] sm:w-[250px] bg-[#f2f2f2] h-[550px] mx-auto rounded">
      <img
        src={photo}
        alt="hola"
        className="h-[300px] w-full mx-auto rounded-t"
      />
      <div className="h-[195px]">
        <h4 className="text-xl font-semibold mt-2">
          {name} - {abv}
        </h4>
        <h6 className="text-xs font-">Fecha de elaboración {date}</h6>
        <h5 className="text-xs text-start mx-6 mt-2">{description}</h5>
      </div>

      <button className="px-2 py-1 bg-black text-white rounded-md hover:bg-green-800 hover:scale-105  ">
        Solicitar intercambio
      </button>
    </div>
  );
}

export default BeerCard;

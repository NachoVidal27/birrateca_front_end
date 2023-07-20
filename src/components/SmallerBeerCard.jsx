import React from "react";

function SmallerBeerCard({ style, abv, date, description }) {
  return (
    description && (
      <div className="w-[70%] mx-auto bg-black h-fit rounded mb-4 px-6 py-4">
        <div className="flex justify-evenly">
          <h2 className="text-white font-semibold ">
            {style} {abv}%
          </h2>

          <h3 className="text-white ">{date}</h3>
        </div>
        <div className="h-[1px] mt-1 bg-white"></div>
        <div className="flex justify-evenly mt-2">
          <h2 className="text-white text-sm ">{description}</h2>
        </div>
        <button className="mx-auto border border-white px-2 py-1 mt-6 text-white rounded hover:bg-white  hover:text-black">
          Editar
        </button>
      </div>
    )
  );
}

export default SmallerBeerCard;

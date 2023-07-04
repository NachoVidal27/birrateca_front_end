import React from "react";

function BeerCard({ photo, style, abv, date, description }) {
  console.log(photo);

  return (
    <div className="w-[275px] sm:w-[250px] bg-cream-light h-[550px] mx-auto rounded mb-8 ">
      <img
        src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
        alt=""
        className="h-[300px] w-full mx-auto rounded-t"
      />
      <div className="h-[195px]">
        <h4 className="text-xl font-semibold mt-2">
          {style} - {abv}
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

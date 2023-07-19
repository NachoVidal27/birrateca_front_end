import React from "react";

function SmallerBeerCard({ photo, style, abv, date, description, location }) {
  return (
    description && (
      <div className="h-[280px] bg-cream-light w-[200px]  rounded mx-auto mb-8">
        <div className="w-[200px] bg-cream-light h-[200px] mx-auto rounded mb-8  ">
          <img
            src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
            alt=""
            className="h-[180px] w-full mx-auto rounded-t "
          />
          <div className="h-[150px]">
            <h4 className="text-lg font-semibold mt-2 mb-1">
              {style} - {abv}%
            </h4>
          </div>
        </div>
        <button className="bg-black px-2 py-1 text-white font-semibold rounded">
          Editar
        </button>
      </div>
    )
  );
}

export default SmallerBeerCard;

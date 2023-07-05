import React from "react";
import glass from "../assets/glassLoading.gif";

function BeerCardPreview({ photo, style, abv, date, description }) {
  console.log(process.env.SUPABASE_URL);
  const url = `${process.env.SUPABASE_URL}/birra_fotos/${photo}`;
  console.log(url);

  return (
    <div className="w-[275px] sm:w-[250px] bg-cream-light h-[350px] mx-auto rounded mb-8 ">
      <img src={glass} alt="" className="h-[200px] w-full mx-auto rounded-t" />
      <div className="h-[195px]">
        <h4 className="text-xl font-semibold mt-2">
          {style} - {abv}%
        </h4>
        <h6 className="text-xs font-">Fecha de elaboración {date}</h6>
        <h5 className="text-xs text-start mx-6 mt-2 truncate">{description}</h5>
      </div>
    </div>
  );
}

export default BeerCardPreview;

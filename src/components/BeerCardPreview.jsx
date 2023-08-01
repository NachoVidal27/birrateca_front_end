import React from "react";
import glass from "../assets/glassLoading.gif";

function BeerCardPreview({  style, abv, date, description, location }) {
  return (
    <div className="w-[275px] sm:w-[250px] bg-cream-light h-[350px] mx-auto rounded mb-8 ">
      <img src={glass} alt="" className="h-[200px] w-full mx-auto rounded-t" />
      <div className="h-[195px]">
        <h4 className="text-xl font-semibold mt-2">
          {style} - {abv}%
        </h4>
        <h6 className="text-xs mt-1 ">Fecha de elaboración {date}</h6>
        <h4 className="text-xs mt-1">{location}</h4>
        <h5 className="text-xs text-start mx-6 mt-2 truncate">{description}</h5>
      </div>
    </div>
  );
}

export default BeerCardPreview;

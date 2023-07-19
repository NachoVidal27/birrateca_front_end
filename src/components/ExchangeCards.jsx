import React from "react";

function ExchangeCards({ photo, style, abv, date, description, location }) {
  return (
    description && (
      <div className="w-[80%] mx-auto bg-white border-2 h-fit rounded mb-4 px-6 py-2 mt-6  hover:bg-cream-light">
        <h2 className="text-black font-semibold hover:font-bold">{style}</h2>
      </div>
    )
  );
}

export default ExchangeCards;

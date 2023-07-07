import React from "react";
import { useState } from "react";
import smoked from "../assets/smoked.jpg";

function BeerCard({ photo, style, abv, date, description }) {
  const [exchangeModal, setExchangeModal] = useState(false);
  console.log(exchangeModal);
  const handleOpenModal = () => {
    setExchangeModal(true);
  };
  const handleCloseModal = () => {
    setExchangeModal(false);
  };

  const words = description.split(" ");
  const truncatedWords = words.slice(0, 20);
  const truncateText = truncatedWords.join(" ");
  const adjustedDescription = truncateText + "...";
  console.log(truncateText);

  return (
    <div>
      <div className="w-[275px] sm:w-[250px] bg-cream-light h-[550px] mx-auto rounded mb-8 hover:scale-105 ">
        <img
          src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
          alt=""
          className="h-[300px] w-full mx-auto rounded-t "
        />
        <div className="h-[195px]">
          <h4 className="text-xl font-semibold mt-2 mb-1">
            {style} - {abv}%
          </h4>
          <h6 className="text-sm font-">Embotellada {date}</h6>

          <h5 className="text-xs text-start mx-6 mt-2 h-2">
            {truncateText.length > 20 ? adjustedDescription : truncateText}
          </h5>
        </div>
        <button
          className="px-2 py-1 bg-black text-white rounded-md hover:bg-cream-dark hover:scale-105  "
          onClick={handleOpenModal}
        >
          Solicitar intercambio
        </button>
      </div>
      {exchangeModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-3xl mx-auto">
            {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
            <div className="border-0 rounded-lg shadow-lg relative grid grid-cols-1 w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center text-center justify-between p-5 border-b border-solid border-slate-200 rounded-t mb-2">
                <h3 className="text-3xl font-semibold text-center">
                  Solicitar intercambio
                </h3>
                <button
                  className=" ml-auto bg-white rounded-xl text-black opacity-100 float-right text-md px-2 py-1 hover:bg-cream-light hover:text-black"
                  onClick={handleCloseModal}
                >
                  x
                </button>
              </div>
              <div className="grid grid-cols-2 ">
                <div className="relative p-6 flex-auto border-r q">
                  <img
                    src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
                    alt=""
                    className="h-[300px] w-[250px] mx-auto rounded-t"
                  />
                  <h2 className="mt-2 text-lg font-semibold">
                    {style} - {abv}%
                  </h2>
                  <p className="mt-2 text-slate-500 text-md leading-relaxed h-[100px]">
                    {description}
                  </p>
                  <p className="mt-1">Elaborado en: Maldonado el {date}</p>
                </div>
                <div className="relative p-6 flex-auto ">
                  <img
                    src={smoked}
                    alt=""
                    className="h-[300px] w-[250px] mx-auto rounded-t"
                  />
                  <h2 className="mt-2 text-lg font-semibold">
                    Smoked Wheat Beer - 4.2%
                  </h2>

                  <p className="mt-2 text-slate-500 text-md leading-relaxed h-[100px]">
                    Low-alcohol beer with a clear, pale yellow to golden color,
                    low to moderate levels of hop bitterness, and a moderate to
                    medium-high smoky aroma and flavor
                  </p>
                  <p className="mt-1">Elaborado en: Montevideo el 10/10/2022</p>
                </div>
              </div>
              <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-6 rounded text-md text-white">
                Intercambiar
              </button>
            </div>
            {/* </div> */}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default BeerCard;

import React from "react";
import { useState } from "react";

function BeerCard({ photo, style, abv, date, description }) {
  const [exchangeModal, setExchangeModal] = useState(false);
  console.log(exchangeModal);
  const handleModal = () => {
    if (exchangeModal === false) {
      setExchangeModal(true);
    } else {
      setExchangeModal(false);
    }
  };
  return (
    <div
      className="w-[275px] sm:w-[250px] bg-cream-light h-[550px] mx-auto rounded mb-8 "
      onClick={handleModal}
    >
      <img
        src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
        alt=""
        className="h-[300px] w-full mx-auto rounded-t"
      />
      <div className="h-[195px]">
        <h4 className="text-xl font-semibold mt-2">
          {style} - {abv}%
        </h4>
        <h6 className="text-xs font-">Fecha de elaboración {date}</h6>
        <h5 className="text-xs text-start mx-6 mt-2 truncate">{description}</h5>
      </div>

      <button className="px-2 py-1 bg-black text-white rounded-md hover:bg-green-800 hover:scale-105  ">
        Solicitar intercambio
      </button>
      {exchangeModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center text-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    {style}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setExchangeModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <img
                    src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
                    alt=""
                    className="h-[350px] w-[250px] mx-auto rounded-t"
                  />

                  <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                    {description} - {abv}%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default BeerCard;

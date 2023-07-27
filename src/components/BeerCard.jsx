import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ExchangeCards from "./ExchangeCards";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

function BeerCard({ photo, style, abv, date, description, location }) {
  const user = useSelector((state) => state.user);
  const [exchangeModal, setExchangeModal] = useState(false);
  const [myBeerCard, setMyBeerCard] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState({});

  const handleOpenModal = () => {
    setExchangeModal(true);
  };
  const handleCloseModal = () => {
    setExchangeModal(false);
  };

  // const handleOpenBeerCard = (birra) => {
  //   setMyBeerCard(true);
  // };

  const handleSelectedBeer = (birra) => {
    setSelectedBeer(birra);
    setMyBeerCard(true);
    console.log(selectedBeer);
  };

  const handleCloseBeerCard = () => {
    setMyBeerCard(false);
  };

  const words = description?.split(" ");
  const truncatedWords = words?.slice(0, 20);
  const truncateText = truncatedWords?.join(" ");
  const adjustedDescription = truncateText + "...";

  return (
    description && (
      <div>
        <div className="w-[275px] sm:w-[250px] bg-cream-light h-[500px] mx-auto rounded mb-8 md:hover:scale-105 ">
          <img
            src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
            alt=""
            className="h-[300px] w-full mx-auto rounded-t object-cover"
          />
          <div className="h-[150px]">
            <h4 className="text-lg font-semibold mt-2 mb-1">
              {style} - {abv}%
            </h4>
            <h6 className="text-xs font-roboto">
              Elaborada en {location} el {date}
            </h6>

            <h5 className="text-xs text-start mx-6 mt-2 h-2 font-roboto">
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
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-3xl mx-auto ">
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
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="relative p-6 flex-auto border-r grid grid-cols-2 md:grid-cols-1 ">
                    <div>
                      <img
                        src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${photo}`}
                        alt=""
                        className="h-[200px] md:h-[300px] w-[170px]  md:w-[250px] mx-auto rounded-t object-cover"
                      />
                    </div>
                    <div className="ms-2 mt-3">
                      <h2 className="text-md lg:text-lg font-semibold">
                        {style} - {abv}%
                      </h2>{" "}
                      <p className="ms-2 md:mx-auto mt-2 text-black opacity-90 text-sm md:text-md md:invisible md:h-0 h-[100px] leading-5">
                        {adjustedDescription}
                      </p>
                      <p className="ms-2 md:mx-auto mt-2 text-black opacity-90 text-sm md:text-md invisible md:visible h-0 md:h-[100px] leading-5">
                        {description}
                      </p>
                      <p className="mt-2 md:mt-6 text-sm md:text-md invisible md:visible font-semibold">
                        Elaborado en: {location} el {date}
                      </p>
                    </div>
                  </div>
                  {!myBeerCard ? (
                    <div className="mt-6">
                      {user.beers.length > 0 ? (
                        <div>
                          <h2 className="text-lg font-semibold mb-4">
                            Seleccionar birra para intercambio
                          </h2>
                          {user.beers.map((birra) => (
                            <div
                              key={birra.id}
                              onClick={() => handleSelectedBeer(birra)}
                            >
                              <ExchangeCards
                                key={birra.id}
                                photo={birra.photo}
                                style={birra.style}
                                abv={birra.abv}
                                description={birra.description}
                                date={birra.brewDate}
                                location={birra.location}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-36">
                          <h2 className="mb-2  text-md font-semibold text-red-600  mx-auto">
                            No tienes birras disponibles para intercambio
                          </h2>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative p-6 flex-auto border-r grid grid-cols-2 md:grid-cols-1 h-[300px] ">
                      <div className="relative">
                        <p className="absolute top-0 left-11 p-2 bg-black text-white font-semibold rounded border-1 bg-opacity-70">
                          <WestIcon onClick={handleCloseBeerCard} />
                        </p>
                        <img
                          src={`https://jppbjldmchkberncwcoz.supabase.co/storage/v1/object/public/birrateca_fotos/birra_fotos/${selectedBeer.photo}`}
                          alt=""
                          className="h-[200px] md:h-[300px] w-[170px] md:w-[250px] mx-auto rounded-t static object-cover"
                        />
                      </div>
                      <div className="ms-2 mt-3">
                        <h2 className=" text-md lg:text-lg font-semibold">
                          {selectedBeer.style} - {selectedBeer.abv}%
                        </h2>{" "}
                        <p className="ms-2 md:mx-auto mt-2 text-black opacity-90 text-sm md:text-md md:invisible md:h-0 h-[100px] leading-5">
                          {selectedBeer.description}
                        </p>
                        <p className="ms-2 md:mx-auto mt-2 text-black opacity-90 text-sm md:text-md invisible md:visible h-0 md:h-[100px] leading-5">
                          {selectedBeer.description}
                        </p>
                        <p className="mt-2 md:mt-6 text-sm md:text-md font-semibold invisible md:visible">
                          Elaborado en: {selectedBeer.location} el{" "}
                          {selectedBeer.brewDate}
                        </p>
                        {/* <button
                          onClick={handleCloseBeerCard}
                          className="px-2 py-1 bg-black text-white  rounded"
                        >
                          volver
                        </button> */}
                      </div>
                    </div>
                  )}
                </div>
                {user.beers.length > 0 ? (
                  <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-6 rounded text-md text-white">
                    Intercambiar
                  </button>
                ) : (
                  <Link to="/birra-form">
                    <button className="bg-black px-3 py-2 w-fit mx-auto my-3 mt-6 rounded text-md text-white">
                      Subir nueva birra
                    </button>
                  </Link>
                )}
              </div>
              {/* </div> */}
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    )
  );
}

export default BeerCard;

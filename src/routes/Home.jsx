import React from "react";
import barril from "../assets/barrilHero.jpeg";
import cheer from "../assets/cheer.jpg";
import cheers from "../assets/cheers.jpg";
import beerFromTop from "../assets/beer_transparent.png";

function Home() {
  return (
    <div class="">
      <div class="relative">
        <img src={barril} alt="" />
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="invisible md:visible text-5xl font-bold text-white text-center">
            Bienvenido a la Birrateca del CCCUY
          </h2>
        </div>
      </div>

      <div className="mt-10 mx-10  mb-16 2xl:mx-20">
        <h3 className="text-2xl md:text-3xl font-bold font-roboto">
          Proyecto Birrateca
        </h3>
        <p
          className=" text-md md:text-xl w-[55%] mx-auto mt-4 font-roboto 
        "
        >
          Bienvenido a nuestra emocionante comunidad de amantes de la cerveza
          artesanal y el intercambio de sabores únicos. En nuestra página de
          socios de cerveza artesanal, te invitamos a sumergirte en un mundo de
          aromas y sabores, donde la pasión por la cerveza se combina con la
          emoción del intercambio.
        </p>
        <div className="w-[80%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-60"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14  md:mx-10">
          <div>
            <img
              src={beerFromTop}
              className="h-[250px] md:h-[300px] lg:h-[450px] mx-auto ps-3 "
              alt=""
            />
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold  text-center md:text-start  mx-auto font-roboto">
              Nuestro Objetivo
            </h3>
            <p className="text-md  md:text-xl md:text-start mt-2 md:w-[80%] font-roboto ">
              Nuestra plataforma fue creada para conectar a cerveceros caseros,
              aficionados y apasionados por la cerveza artesanal de todo el
              mundo. Creemos en la diversidad de estilos y en la creatividad de
              cada productor individual. Aquí, podrás descubrir nuevas cervezas
              artesanales y compartir las tuyas con otros miembros de la
              comunidad.
            </p>
          </div>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-30 "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14  md:mx-10">
          <div className=" mt-20">
            <div>
              <img
                src={cheers}
                className="h-[250px]  border rounded-full mx-auto  shadow-xl md:hidden "
                alt=""
              />
            </div>
            <div className="md:ms-16 2xl:ms-36">
              <h3 className="text-2xl font-semibold text-center md:text-start  mx-auto  2xl:ms-10 font-roboto mt-10">
                Como funciona?
              </h3>
              <p className="text-md md:text-xl text-center md:text-start mt-2 md:w-[85%] 2xl:ms-10 font-roboto">
                Es simple. Una vez que te unes a nuestra página de socios de
                cerveza artesanal, tendrás acceso a un catálogo en constante
                expansión de cervezas únicas y auténticas, elaboradas por
                personas apasionadas que comparten su amor por la cerveza.
                Explora nuestra selección, lee las descripciones detalladas y
                descubre qué cervezas te intrigarían probar.
              </p>
            </div>
          </div>

          <div>
            <img
              src={cheers}
              className=" h-0 md:h-[450px]  border rounded-full md:ms-8 2xl:ms-48 shadow-xl invisible md:visible"
              alt=""
            />
          </div>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-30 "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 md:mx-12">
          <div>
            <img
              src={cheer}
              className="h-[250px] md:h-[300px] lg:h-[450px]  rounded-full  mx-auto "
              alt=""
            />
          </div>
          <div className="mt-20 ">
            <h3 className="text-2xl font-semibold md:text-start  mx-auto font-roboto">
              El intercambio
            </h3>
            <p className="text-md md:text-xl text-center md:text-start mt-2 md:w-[80%] font-roboto">
              Cuando encuentres una cerveza que despierte tu curiosidad,
              simplemente solicita un intercambio con el socio elaborador.
              Podrás ofrecer una de tus propias creaciones para intercambiar con
              otro socio. El objetivo de esta comunidad es unir socios y mejorar
              la calidad de cada cerveza con las devoluciones de los mismos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

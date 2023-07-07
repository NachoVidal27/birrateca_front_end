import React from "react";
import barril from "../assets/barrilHero.jpeg";
import servingBeer from "../assets/hero_inner_blog.jpg";
import tap from "../assets/taptap.jpg";
import cheers from "../assets/cheers.jpg";
import beerFromTop from "../assets/beer_transparent.png";

function Home() {
  return (
    <div class="mt-12">
      <div class="relative">
        <img src={barril} alt="" />
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-5xl font-bold text-white text-center">
            Bienvenido a la Birrateca del CCCUY
          </h2>
        </div>
      </div>

      <div className="mt-10 mx-10  2xl:mx-20">
        <h3 className="text-3xl font-bold">Proyecto Birrateca</h3>
        <p className="text-xl w-[80%] mx-auto mt-4">
          Bienvenido a nuestra emocionante comunidad de amantes de la cerveza
          artesanal y el intercambio de sabores únicos. En nuestra página de
          socios de cerveza artesanal, te invitamos a sumergirte en un mundo de
          aromas y sabores, donde la pasión por la cerveza se combina con la
          emoción del intercambio.
        </p>
        <div className="w-[80%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-60"></div>
        <div className="grid grid-cols-2 mt-14 mx-12">
          <div>
            <img src={beerFromTop} className="h-[450px]  ms-16" alt="" />
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-start  mx-auto">
              Nuestro Objetivo
            </h3>
            <p className="text-xl   text-start mt-2 w-[85%]">
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
        <div className="grid grid-cols-2 mt-14 mx-12">
          <div className="ms-16 mt-20">
            <h3 className="text-2xl font-semibold text-start  mx-auto">
              Como funciona?
            </h3>
            <p className="text-xl   text-start mt-2 w-[85%]">
              Es simple. Una vez que te unes a nuestra página de socios de
              cerveza artesanal, tendrás acceso a un catálogo en constante
              expansión de cervezas únicas y auténticas, elaboradas por personas
              apasionadas que comparten su amor por la cerveza. Explora nuestra
              selección, lee las descripciones detalladas y descubre qué
              cervezas te intrigarían probar.
            </p>
          </div>

          <div>
            <img
              src={cheers}
              className="h-[450px] border rounded-full ms-40 shadow-xl"
              alt=""
            />
          </div>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-30 "></div>
        <div className="grid grid-cols-2 mt-14 mx-12">
          <div>
            <img
              src={tap}
              className="h-[450px] border rounded-full ms-16 shadow-xl"
              alt=""
            />
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-start  mx-auto">
              La verdadera magia esta en el intercambio
            </h3>
            <p className="text-xl   text-start mt-2 w-[85%]">
              Cuando encuentres una cerveza que despierte tu curiosidad,
              simplemente solicita un intercambio con el socio elaborador.
              Podrás ofrecer una de tus propias creaciones para intercambiar con
              otro socio. El objetivo de esta comunidad es unir socios y mejorar
              la calidad de cada cerveza con las devoluciones de los mismos.
            </p>
          </div>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto mt-8 border-cream-dark opacity-30 "></div>
      </div>
      <div className="h-80 bg-black">
        <h4 className="text-white pt-8 text-2xl">footer</h4>
      </div>
    </div>
  );
}

export default Home;

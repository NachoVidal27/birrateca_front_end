import React from "react";
import { useState, useEffect } from "react";
import hero from "../assets/hero-cccuy.jpg";
import cheer from "../assets/individual.jpg";
import cheers from "../assets/grupo-chico-2.jpg";
import beerFromTop from "../assets/botella-porter.jpg";

function Home() {
  const [mobile, setMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return mobile ? (
    <>
      <div className="relative mt-16">
        <img src={hero} className="w-full  " alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="invisible md:visible text-5xl font-bold font text-white text-center">
            Bienvenido a la Birrateca del CCCUY
          </h2>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <div>
          <h2 className="font-roboto text-3xl font-semibold mt-4">
            Proyecto Birrateca
          </h2>
          <p className="font-roboto mt-2">
            Bienvenido a nuestra emocionante comunidad de amantes de la cerveza
            artesanal y el intercambio de sabores únicos. En nuestra página de
            socios del Club de Cerveceros Caseros del Uruguay, te invitamos a
            sumergirte en un mundo de aromas y sabores, donde la pasión por la
            cerveza se combina con la emoción del intercambio y conexión entre
            socios
          </p>
        </div>
        <div className="w-[80%] border border-b-1 mx-auto my-2 border-cream-dark opacity-60"></div>
        <div>
          <img
            src={cheers}
            alt="cervecita espumosa"
            className="h-[250px] w-[250px] rounded-full mx-auto mt-10 shadow-[-12px_13px_35px_5px_#00000024]"
          />
          <h3 className="font-roboto text-2xl font-semibold mt-6">
            Nuestro objetivo
          </h3>
          <p className="font-roboto mt-2">
            Nuestra plataforma fue creada para conectar a cerveceros caseros,
            aficionados y apasionados por la cerveza artesanal de todas partes
            del Uruguay. Creemos en la diversidad de estilos y en la creatividad
            de cada cervecero casero. Aquí, podrás descubrir nuevas cervezas
            artesanales y compartir las tuyas con otros miembros del club.
          </p>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto my-6 border-cream-dark opacity-30 "></div>
        <div>
          <img
            src={beerFromTop}
            alt="cervecita espumosa"
            className="h-[250px] mt-10 border rounded-full mx-auto shadow-[-12px_13px_35px_5px_#00000024]"
          />
          <h3 className="font-roboto text-2xl font-semibold mt-6">
            Como funciona?
          </h3>
          <p className="font-roboto mt-2 ">
            Es simple. Una vez que te unes a nuestra página de socios de cerveza
            artesanal, tendrás acceso a un catálogo en constante expansión de
            cervezas únicas y auténticas, elaboradas por colegas cerveceros
            apasionadas que comparten su amor por la cerveza. Explora nuestra
            selección, lee las descripciones detalladas y descubre qué cervezas
            te intrigarían probar.
          </p>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto my-6 border-cream-dark opacity-30 "></div>
        <div className="mb-20">
          <img
            src={cheer}
            alt="cervecita espumosa"
            className="h-[250px] mt-10 border rounded-full mx-auto shadow-[-12px_13px_35px_5px_#00000024]"
          />
          <h3 className="font-roboto text-2xl font-semibold mt-6">
            El intercambio
          </h3>
          <p className="font-roboto mt-2">
            Cuando encuentres una cerveza que despierte tu curiosidad,
            simplemente solicita un intercambio con el socio elaborador. Deberás
            ofrecer una de tus propias creaciones para intercambiar con otro
            socio. Una vez hayas recibido la cerveza, asegurate de disfrutarla y
            enviarle una devolución honesta y respetuosa al socio elaborador. El
            objetivo de esta comunidad es unir socios y mejorar la calidad de
            cada cerveza con las devoluciones de los mismos. Y por supuesto, si
            te gustó no te olvides de compartirlo con los demás socios!
          </p>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="relative">
        <img
          src={hero}
          className="w-full mt-6 shadow-[-12px_13px_35px_5px_#00000024]"
          alt=""
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="invisible md:visible text-5xl font-bold font text-white text-center">
            Bienvenido a la Birrateca del CCCUY
          </h2>
        </div> */}
      </div>
      <div className="w-[70%] 2xl:w-[65%] mx-auto">
        <div className="mt-6">
          <h2 className="font-roboto text-3xl 2xl:text-4xl font-semibold mt-4 2xl:mt-6">
            Proyecto Birrateca
          </h2>
          <p className="font-roboto mt-2 text-xl">
            Bienvenido a nuestra emocionante comunidad de amantes de la cerveza
            artesanal y el intercambio de sabores únicos. En nuestra página de
            socios de cerveza artesanal, te invitamos a sumergirte en un mundo
            de aromas y sabores, donde la pasión por la cerveza se combina con
            la emoción del intercambio.
          </p>
        </div>
        <div className="w-[80%] border border-b-1 mx-auto my-4 border-cream-dark opacity-60"></div>
        <div className="flex space-evenly">
          <img
            src={cheers}
            alt="cervecita espumosa"
            className="h-[400px] w-[400px] rounded-full mt-10 shadow-[-12px_13px_35px_5px_#00000024]"
          />
          <div className="my-auto ms-20 2xl:ms-40">
            <h3 className="font-roboto text-2xl 2xl:text-3xl font-semibold text-start">
              Nuestro objetivo
            </h3>
            <p className="font-roboto text-lg mt-2 text-start pe-10">
              Nuestra plataforma fue creada para conectar a cerveceros caseros,
              aficionados y apasionados por la cerveza artesanal de todas partes
              del Uruguay. Creemos en la diversidad de estilos y en la
              creatividad de cada cervecero casero. Aquí, podrás descubrir
              nuevas cervezas artesanales y compartir las tuyas con otros
              miembros del club.
            </p>
          </div>
        </div>
        <div className="w-[40%] border border-b-1 mx-auto my-6 border-cream-dark opacity-20 "></div>
        <div className="flex space-evenly">
          <div className="my-auto me-20 2xl:me-40">
            <h3 className="font-roboto text-2xl 2xl:text-3xl font-semibold text-start">
              Como funciona?
            </h3>
            <p className="font-roboto text-lg mt-2 text-start pe-10">
              Es simple. Una vez que te unes a nuestra página de socios de
              cerveza artesanal, tendrás acceso a un catálogo en constante
              expansión de cervezas únicas y auténticas, elaboradas por colegas
              cerveceros apasionadas que comparten su amor por la cerveza.
              Explora nuestra selección, lee las descripciones detalladas y
              descubre qué cervezas te intrigarían probar.
            </p>
          </div>
          <img
            src={beerFromTop}
            alt="cervecita espumosa"
            className="h-[400px] mt-10 border rounded-full mx-auto shadow-[-12px_13px_35px_5px_#00000024]"
          />
        </div>
        <div className="w-[40%] border border-b-1 mx-auto my-6 border-cream-dark opacity-20 "></div>
        <div className="flex space-evenly mb-20 2xl:mb-24">
          <img
            src={cheer}
            alt="cervecita espumosa"
            className="h-[400px] mt-10 border rounded-full mx-auto shadow-[12px_13px_35px_5px_#00000024]"
          />
          <div className="my-auto ms-20 2xl:ms-40">
            <h3 className="font-roboto text-2xl 2xl:text-3xl font-semibold text-start">
              El intercambio
            </h3>
            <p className="font-roboto text-lg mt-2 text-start pe-10">
              Cuando encuentres una cerveza que despierte tu curiosidad,
              simplemente solicita un intercambio con el socio elaborador.
              Deberás ofrecer una de tus propias creaciones para intercambiar
              con otro socio. Una vez hayas recibido la cerveza, asegurate de
              disfrutarla y enviarle una devolución honesta y respetuosa al
              socio elaborador. El objetivo de esta comunidad es unir socios y
              mejorar la calidad de cada cerveza con las devoluciones de los
              mismos. Y por supuesto, si te gustó no te olvides de compartirlo
              con los demás socios!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="bg-black w-full ">
      <div className="h-fit md:h-56 w-[80%] bg-black bottom-0 mx-auto pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="my-4 md:my-0">
            <Link
              to="https://www.cerveceroscaseros.com.uy/hagase-socio-del-club/"
              target="_blank"
            >
              <h3 className="text-white font-roboto text-xl  md:w-[40%] mx-auto pb-2 mb-2">
                Asociate al club!
              </h3>

              <button className="text-white px-2 py-1 border border-white rounded md:mt-2 hover:bg-cream-light hover:text-black">
                Visitar sitio
              </button>
            </Link>
          </div>
          <div className="my-4 md:my-0 mx-auto">
            <h3 className="text-white font-roboto text-xl w-[80%] mx-auto pb-2 md:mb-2">
              Redes
            </h3>
            <div className="flex flex-col items-start mx-auto">
              <Link
                to="https://www.instagram.com/cccuy.oficial/?hl=es"
                target="_blank"
              >
                <div className=" text-white text-sm my-1 ">
                  <InstagramIcon className="mr-1 " />
                  Instagram CCCUY
                </div>
              </Link>

              <Link to="https://www.cerveceroscaseros.com.uy/" target="_blank">
                <div className=" text-white text-sm mt-1">
                  <LanguageIcon className="mr-1 " />
                  Web CCCUY
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="my-4 md:my-0">
            <h3 className="text-white font-roboto text-xl md:border-b-2 md:w-[40%] mx-auto pb-2 mb-2">
              Equipo desarrollo
            </h3>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/ignacio-vidal-dev/"
            >
              <h4 className="text-white text-sm my-1">Ignacio Vidal</h4>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/cristina-racedo-0a00551a4/"
            >
              <h4 className="text-white text-sm my-1">Cristina Racedo</h4>
            </Link>

            <Link
              target="_blank"
              to="https://www.linkedin.com/in/sebastian-segura-piriz/"
            >
              <h4 className="text-white text-sm my-1">Sebastián Segura</h4>
            </Link>
          </div> */}
          <div className="my-4 md:my-0">
            <h3 className="text-white font-roboto text-xl  md:w-[70%] mx-auto pb-2 mb-2">
              ¿Errores de funcionamiento?
            </h3>
            <Link to="/reportar-error" target="_blank">
              <button className="text-white px-2 py-1 border border-white rounded md:mt-2 hover:bg-cream-light hover:text-black">
                Reportar error
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

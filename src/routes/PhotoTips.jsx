import React from "react";
import hero from "../assets/heroPhotoTips.jpg";

function PhotoTips() {
  return (
    <div className="h-fit">
      <img src={hero} alt="munich helles pint" className="w-full mt-20" />
      <h1 className="font-roboto text-[1.6rem] md:text-[3rem] mt-6 font-semibold ">
        Guía de 5 pasos para tomar fotos de tu cerveza artesanal
      </h1>
      <div className="w-[80%] md:w-[55%] mx-auto">
        <h2 className=" text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          1. Prepara el escenario
        </h2>
        <div className=" mx-auto mb-2 ">
          <ul className="ms-6">
            <li className="text-justify mb-2 list-disc md:text-lg md:font-semibold">
              Busca un lugar con luz natural abundante, como cerca de una
              ventana o al aire libre en un día soleado pero sin luz directa y
              fuerte que genere sombras muy marcadas.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Coloca un fondo liso o armónico para que la cerveza y el vaso sean
              los protagonistas de la fotografía. Puedes utilizar una pared, o
              cualquier fondo uniforme que destaque la cerveza
            </li>
          </ul>
        </div>

        <h2 className="text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          2. Escoge el vaso adecuado
        </h2>
        <div className="  mx-auto mb-2 ">
          <ul className="ms-6">
            <li className="text-justify mb-2 list-disc md:text-lg md:font-semibold">
              Utiliza un vaso de cerveza limpio y transparente que permita
              apreciar los colores y la espuma de la cerveza. Los vasos tipo
              tulipa o copa son ideales para realzar las características de la
              bebida.
            </li>
          </ul>
        </div>

        <h2 className="text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          3. Prepara la cerveza
        </h2>
        <div className=" mx-auto mb-2 ">
          <ul className="ms-6">
            <li className="text-justify mb-2 list-disc md:text-lg md:font-semibold">
              Asegúrate de que la botella de cerveza esté limpia y sin etiquetas
              desgastadas o arrugadas.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Sirve la cerveza en el vaso de forma cuidadosa para evitar
              derrames y obtener una espuma adecuada. Procura que la espuma
              quede en un nivel adecuado, aproximadamente dos dedos de espuma.
            </li>
          </ul>
        </div>

        <h2 className="text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          4. Posiciona los elementos
        </h2>
        <div className=" mx-auto mb-2 ">
          <ul className="ms-6">
            <li className="text-justify mb-2 list-disc md:text-lg md:font-semibold">
              Coloca la botella de cerveza y el vaso servido sobre el fondo liso
              que hayas elegido.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Juega con la disposición de los elementos para crear una
              composición interesante. Por ejemplo, puedes colocar la botella
              inclinada ligeramente hacia el vaso para darle dinamismo a la
              imagen.
            </li>
          </ul>
        </div>

        <h2 className="text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          5. Ajusta la iluminación
        </h2>
        <div className="  mx-auto mb-2 ">
          <ul className="ms-6">
            <li className="text-justify mb-2 list-disc md:text-lg md:font-semibold">
              Aprovecha la luz natural para obtener una iluminación suave y bien
              distribuida. Evita el uso de flash, ya que puede generar sombras y
              reflejos no deseados.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Asegúrate de que la cerveza y el vaso estén enfocados
              correctamente. Puedes utilizar la función de enfoque automático de
              la cámara o ajustar manualmente si tienes experiencia en
              fotografía.
            </li>
          </ul>
        </div>

        <h2 className="text-start mt-10 md:mt-16 text-xl md:text-[1.7rem] font-roboto font-semibold mb-2 md:mb-6">
          Consejos adicionales:
        </h2>
        <div className="  mx-auto mb-20 ">
          <ul className="ms-6">
            <li className="text-justify  list-disc md:text-lg md:font-semibold">
              Puedes utilizar accesorios como servilletas, posavasos o elementos
              relacionados con la cerveza para darle un toque más auténtico a la
              imagen.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Experimenta con diferentes ángulos y perspectivas para obtener
              resultados interesantes.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Si deseas resaltar detalles como el color de la cerveza o la
              textura de la espuma, acerca la cámara al vaso.
            </li>
            <li className="text-justify list-disc md:font-semibold md:text-lg">
              Diviértete y disfruta del proceso de capturar la esencia de tu
              cerveza artesanal en fotografías impresionantes!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PhotoTips;

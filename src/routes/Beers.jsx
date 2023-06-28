import React from "react";
import BeerCard from "../components/BeerCard";
import dubble from "../assets/WhatsApp_Image_2023-06-28_at_15.21.36.jpeg";
import ipa from "../assets/ipa.png";
import guiness from "../assets/guiness.jpeg";
import pilsen from "../assets/pilsen.png";

function Beers() {
  return (
    <div>
      <h1 className="text-start text-xl ps-4 pb-1 font-semibold bg-black text-white  fixed w-full">
        Birras
      </h1>
      <h2 className="text-start ps-6 pt-8 font-semibold mb-6">Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
        <BeerCard
          photo={dubble}
          name="Dubble"
          abv="8.3%"
          description="  A deep reddish-copper, moderately strong, malty, complex Trappist ale
        with rich malty flavors, dark or dried fruit esters, and light alcohol
        blended together in a malty presentation that still finishes fairly dry."
          date="10/10/2023"
        />
        <BeerCard
          photo={ipa}
          name="India Pale Ale"
          abv="5.3%"
          description="A decidedly hoppy and bitter, moderately strong American pale ale, showcasing modern American or New World hop varieties. The balance is hop-forward, with a clean fermentation profile."
          date="10/10/2023"
        />
        <BeerCard
          photo={pilsen}
          name="German Pils"
          abv="4.3%"
          description="A light-bodied, highly-attenuated, gold-colored, bottom-fermented bitter German beer showing excellent head retention and an elegant, floral hop aroma."
          date="10/10/2023"
        />
        <BeerCard
          photo={guiness}
          name="Irish Stout"
          abv="8.3%"
          description="A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry."
          date="10/10/2023"
        />
        <BeerCard
          photo={dubble}
          name="dubble"
          abv="8.3%"
          description="  A deep reddish-copper, moderately strong, malty, complex Trappist ale
        with rich malty flavors, dark or dried fruit esters, and light alcohol
        blended together in a malty presentation that still finishes fairly dry."
          date="10/10/2023"
        />
        <BeerCard
          photo={ipa}
          name="India Pale Ale"
          abv="5.3%"
          description="A decidedly hoppy and bitter, moderately strong American pale ale, showcasing modern American or New World hop varieties. The balance is hop-forward, with a clean fermentation profile."
          date="10/10/2023"
        />
        <BeerCard
          photo={pilsen}
          name="German Pils"
          abv="4.3%"
          description="A light-bodied, highly-attenuated, gold-colored, bottom-fermented bitter German beer showing excellent head retention and an elegant, floral hop aroma."
          date="10/10/2023"
        />
        <BeerCard
          photo={guiness}
          name="Irish Stout"
          abv="8.3%"
          description="A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry."
          date="10/10/2023"
        />
      </div>
    </div>
  );
}

export default Beers;

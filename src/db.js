import dubble from "./assets/dubble.jpeg";
import ipa from "./assets/ipa.png";
import guiness from "./assets/guiness.jpeg";
import pilsen from "./assets/pilsen.png";

const birras = [
  {
    id: 1,
    photo: dubble,
    name: "Dubble",
    abv: "8.3%",
    description:
      "A deep reddish-copper, moderately strong, malty, complex Trappist ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry.",
    date: "10/4/2023",
  },
  {
    id: 2,
    photo: ipa,
    name: "IPA",
    abv: "5.3%",
    description:
      "A decidedly hoppy and bitter, moderately strong American pale ale. The balance is hop-forward, with a clean fermentation profile, dryish finish, and clean, supporting malt allowing a creative range of hop character to shine through.",
    date: "10/4/2023",
  },
  {
    id: 3,
    photo: guiness,
    name: "Guinness",
    abv: "6.3%",
    description:
      "A moderate-strength brown beer with a restrained roasty character and bitterness. May have a range of roasted flavors, generally without burnt qualities, and often has a chocolate-caramel-malty profile.",
    date: "10/3/2023",
  },
  {
    id: 4,
    photo: pilsen,
    name: "German Pilsen",
    abv: "4.3%",
    description:
      "A light-bodied, bottom-fermented bitter German beer showing excellent head retention and an elegant, floral hop aroma. Crisp, clean, and refreshing, a German Pils showcases the finest quality German malt and hops.",
    date: "10/2/2023",
  },
];

export default birras;

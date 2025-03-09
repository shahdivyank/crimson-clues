import Sachin from "@/public/sachin.jpeg";
import Amanda from "@/public/amanda.webp";
import Amir from "@/public/amir.png";
import Austin from "@/public/austin.webp";
import Emily from "@/public/emily.png";
import Evi from "@/public/evi.webp";
import Hailee from "@/public/hailee.jpg";
import Pranoy from "@/public/pranoy.webp";
import Raidah from "@/public/raidah.webp";
import Samarth from "@/public/samarth.jpeg";
import Yogitha from "@/public/yogitha.webp";

import { StaticImageData } from "next/image";

export const contents: Record<
  string,
  Record<string, string | number | StaticImageData>
> = {
  "372": {
    name: "Sachin Chopra",
    title: "The Rizzler",
    cases: 18,
    kills: 7,
    years: 4,
    description:
      "A charismatic rogue with a silver tongue, Sachin can charm his way out of any sticky situation. Legends say his words can bend reality, and his mischievous grin hides secrets only he knows.",
    image: Sachin,
    color: "crimson",
    offset: 0,
  },
  "815": {
    name: "Hailee Silva",
    title: "The Counselor",
    cases: 22,
    kills: 3,
    years: 6,
    description:
      "A sage of ancient wisdom, Hailee possesses the ability to calm even the fiercest of tempers. Her voice is said to mend broken spirits, and her guidance has saved many from the brink of darkness.",
    image: Hailee,
    color: "crimson",
    offset: 0,
  },
  "463": {
    name: "Evelyn Aguirre",
    title: "The Artist",
    cases: 14,
    kills: 5,
    years: 3,
    description:
      "A mystical illusionist who can bring her imagination to life, Evi paints worlds with a mere flick of her wrist. Her creations are both beautiful and deadly, capable of entrancing enemies or protecting her allies.",
    image: Evi,
    color: "crimson",
    offset: 1,
  },
  "921": {
    name: "Amanda Ly",
    title: "The Scientist",
    cases: 19,
    kills: 6,
    years: 5,
    description:
      "A brilliant alchemist who bends the laws of nature, Amanda seeks the ultimate truth of the universe. With her potions and inventions, she can turn the tide of any battle — or unravel the mysteries of the cosmos.",
    image: Amanda,
    color: "crimson",
    offset: 0,
  },
  "107": {
    name: "Samarth Srinivasa",
    title: "The Analyst",
    cases: 25,
    kills: 2,
    years: 7,
    description:
      "A tactician with an eye for patterns, Samarth can foresee his opponent's every move. Armed with a mind sharper than any blade, he orchestrates victories with precision and cunning.",
    image: Samarth,
    color: "gray",
    offset: 0,
  },
  "689": {
    name: "Amir Golshani",
    title: "The Athlete",
    cases: 20,
    kills: 8,
    years: 5,
    description:
      "Blessed with superhuman strength and agility, Amir is a warrior who never backs down from a challenge. His unbreakable will and relentless spirit make him a force of nature on the battlefield.",
    image: Amir,
    color: "gray",
    offset: 0,
  },
  "254": {
    name: "Raidah Fairooz",
    title: "The Pescatarian",
    cases: 17,
    kills: 3,
    years: 4,
    description:
      "A druid in tune with the sea, Raidah draws power from ocean tides and marine creatures. Fish and sea life flock to her command, and her serene presence can bring peace to even the stormiest waters.",
    image: Raidah,
    color: "gray",
    offset: 1,
  },
  "193": {
    name: "Austin Yang",
    title: "The Businessman",
    cases: 26,
    kills: 1,
    years: 7,
    description:
      "A cunning merchant-lord who thrives in the shadows of power, Austin strikes deals with kings and monsters alike. He can turn any loss into a profit — and any enemy into an ally if the price is right.",
    image: Austin,
    color: "gray",
    offset: 0,
  },
  "348": {
    name: "Pranoy Giri",
    title: "The Engineer",
    cases: 23,
    kills: 5,
    years: 6,
    description:
      "A master of machines and constructs, Pranoy builds weapons, armor, and mechanical companions to aid him in his journey. His mind buzzes with endless invention, and his creations are often smarter than his foes.",
    image: Pranoy,
    color: "blue",
    offset: 0,
  },
  "576": {
    name: "Yogitha Shastri",
    title: "The Yapper",
    cases: 21,
    kills: 4,
    years: 5,
    description:
      "A bard whose voice can either uplift armies or drive enemies into madness, Yogitha's words carry a supernatural force. Few can resist the power of her unrelenting chatter, and her humor alone has turned tides of war.",
    image: Yogitha,
    color: "blue",
    offset: 2,
  },
  "412": {
    name: "Emily Tsaturian",
    title: "The Scooterist",
    cases: 16,
    kills: 2,
    years: 3,
    description:
      "A swift courier with a knack for navigating impossible terrains, Emily's enchanted scooter can traverse mountains, rivers, and realms. Her speed and resourcefulness make her a vital asset in any adventure.",
    image: Emily,
    color: "blue",
    offset: 0,
  },
};

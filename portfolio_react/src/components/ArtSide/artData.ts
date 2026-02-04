import placeholder from "../../assets/img/hobby/tiktok.gif";
import sushi_animation from "../../assets/img/hobby/sushi_gif.gif";
import jewerly from "../../assets/img/hobby/jewerly.jpg";
import travel from "../../assets/img/hobby/travel.jpg";
import game_book from "../../assets/img/hobby/game_book.png";


export interface ArtData {
  title: string;
  topic: string[];
  description: string;
  color?: string;
  picture1?: string;
  picture2?: string;
  picture3?: string;
}

export interface ArtDataProps {
  project: ArtData;
}

export const artData: ArtData[] = [
  {
    title: "MY ART SIDE",
    topic: [  ],
    description: "From video postproduction through animation to photography, I love creating stuff for fun. I use Photoshop, Procreate, Vegas Pro, DaVinciResolve, Blender, Spine. Ocasionally I create custom projects for friends or small comissions, but mainly film-postcards from travel ❤️ Below an animation I made for local sushi restaurant website",
    color: "#874C68",
    picture1: placeholder,
    picture2: placeholder,
    picture3: sushi_animation,
  },
  {
    title: "MORE HOBBIES",
    topic: [  ],
    description: "reading 📚, travel ✈️, games 🎮, jewerly making 💍, painting 🎨, DIY & art in general 🛠️",
    color: "#C274A3",
    picture1: travel,
    picture2: jewerly,
    picture3: game_book,
  },
  {
    title: "SPORT",
    topic: [ ],
    description: "pole dance 💃, aerial silks 🤸, ice skating ⛸️, roller skating 🛼, yoga 🧘, swimming 🏊",
    color: "#EAB6DF",
    picture1: placeholder,
    picture2: placeholder,
    picture3: undefined,
  },
];
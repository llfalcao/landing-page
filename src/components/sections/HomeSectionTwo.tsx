import Sidebar from "../sidebar/Sidebar";

import Footer from "../footer/Footer";
import ProductCard from "../ProductCard";

const games = [
  {
    title: "Elden Ring",
    imageUrl: "/images/covers/eldenring.jpg",
  },
  {
    title: "Assassin's Creed Valhalla",
    imageUrl: "/images/covers/ac-valhalla.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    imageUrl: "/images/covers/red-dead-redemption.jpg",
  },
  {
    title: "Resident Evil: Village",
    imageUrl: "/images/covers/resident-evil.jpg",
  },
  {
    title: "Gran Turismo 7",
    imageUrl: "/images/covers/gran-turismo.jpg",
  },
  {
    title: "Battlefield 2042",
    imageUrl: "/images/covers/battlefield.jpg",
  },
  {
    title: "Doom Eternal",
    imageUrl: "/images/covers/doom.jpg",
  },
  {
    title: "Black Myth: Wukong",
    imageUrl: "/images/covers/bmwukong.jpg",
  },
  {
    title: "Destiny 2: Beyond Light",
    imageUrl: "/images/covers/destiny.jpg",
  },
  {
    title: "Cyberpunk 2077",
    imageUrl: "/images/covers/cyberpunk.jpg",
  },
  {
    title: "Just Dance 2022",
    imageUrl: "/images/covers/just-dance.jpg",
  },
  {
    title: "Mass Effect: Legendary Edition",
    imageUrl: "/images/covers/mass-effect.jpg",
  },
];

let HomeSectionTwo = (
  <>
    <section className="section-two" id="deals">
      {Sidebar}
      <div className="container" id="section-two-deals">
        {games.map((game) => (
          <ProductCard
            key={game.title}
            title={game.title}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>
    </section>
    <a href="#home">
      <button id="scroll-top">
        <i className="fa fa-arrow-circle-up fa-3x" aria-hidden="true" />
      </button>
    </a>
    {Footer}
  </>
);

export default HomeSectionTwo;

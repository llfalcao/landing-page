import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { games } from "../../assets/data/games";

export default function SectionTwo() {
  return (
    <>
      <section className="section-two" id="deals">
        <Sidebar />
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
      <Footer />
    </>
  );
}

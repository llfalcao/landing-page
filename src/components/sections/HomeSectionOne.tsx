import Navbar from "../header/Navbar";
import ProductCard from "../ProductCard";

let HomeSectionOne = (
  <section className="section-one" id="home">
    {Navbar}
    <div id="section-one-content">
      <div id="banner">
        <img
          id="banner-black-friday"
          src="/images/banner/black-friday.png"
          alt="Black Friday banner"
        />
      </div>

      <div className="container" id="main-deals">
        <div id="headline">
          <h1>
            The latest games
            <br />
            for the best prices
          </h1>
        </div>
        <div className="container main-sales">
          <ProductCard
            title="Battlefield 2042"
            imageUrl="/images/covers/battlefield.jpg"
          />
          <ProductCard
            title="Assassin's Creed Valhalla"
            imageUrl="/images/covers/ac-valhalla.jpg"
          />
          <ProductCard
            title="Cyberpunk 2077"
            imageUrl="/images/covers/cyberpunk.jpg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HomeSectionOne;

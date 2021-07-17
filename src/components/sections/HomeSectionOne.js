import Navbar from "../header/Navbar";
import bgSectionOne from "../../assets/images/background/bg-1.jpg";
import bgGradient from "../../assets/images/background/bg-gradient.png";
import banner from "../../assets/images/banner/black-friday.png";
import ProductCard from "../card/ProductCard";
import battlefield from "../../assets/images/game-cover/battlefield.jpg";
import cyberpunk from "../../assets/images/game-cover/cyberpunk.jpg";
import acvalhalla from "../../assets/images/game-cover/ac-valhalla.jpg";

let HomeSectionOne = (
    <section className="section-one" id="home">
        {Navbar}
        <div id="section-one-content">
            <div id="banner">
                <img
                    id="banner-black-friday"
                    src={banner}
                    alt="Black Friday banner"
                    width="600px"
                    height="auto"
                />
            </div>

            <div className="container" id="main-offers">
                <div id="headline">
                    <h1>
                        The latest games for
                        <br />
                        the best prices
                    </h1>
                </div>
                <div className="container main-sales">
                    {ProductCard("Battlefield 2042", battlefield)}
                    {ProductCard("Assassin's Creed Valhalla", acvalhalla)}
                    {ProductCard("Cyberpunk 2077", cyberpunk)}
                </div>
            </div>
        </div>
    </section>
);

export default HomeSectionOne;

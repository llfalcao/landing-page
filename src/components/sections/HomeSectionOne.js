import Navbar from "../header/Navbar";
import bgSectionOne from "../../assets/images/background/bg-2.jpg";
import banner from "../../assets/images/banner/black-friday.png";
import ProductCard from "../card/ProductCard";

let HomeSectionOne = (
    <section
        className="section-one"
        id="home"
        style={{
            backgroundImage: `url('${bgSectionOne}')`,
            backgroundRepeat: "repeat",
        }}
    >
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

            <div lass ontainid="main-offers">
                <div id="headline">
                    <h1>The latest games with the best prices</h1>
                </div>
                <div className="container main-sales">
                    {ProductCard("Game Card 1")}
                    {ProductCard("Game Card 2")}
                    {ProductCard("Game Card 3")}
                </div>
            </div>
        </div>
    </section>
);

export default HomeSectionOne;

import Sidebar from "../sidebar/Sidebar";
import ProductCard from "../card/ProductCard";
import Footer from "../footer/Footer";

let HomeSectionTwo = (
    <>
        <section className="section-two" id="offers">
            {Sidebar}
            <div className="container section-two-offers">
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
                {ProductCard("Game Card")}
            </div>
        </section>
        <button id="goto-top">
            <i class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i>
        </button>
        {Footer}
    </>
);

export default HomeSectionTwo;

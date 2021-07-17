import Sidebar from "../sidebar/Sidebar";
import ProductCard from "../card/ProductCard";

let HomeSectionTwo = (
    <section className="section-two">
        {Sidebar}
        <div className="container" id="offers">
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
);

export default HomeSectionTwo;

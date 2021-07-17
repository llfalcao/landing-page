import Sidebar from "../sidebar/Sidebar";
import ProductCard from "../card/ProductCard";
import Footer from "../footer/Footer";
import acvalhalla from "../../assets/images/game-cover/ac-valhalla.jpg";
import battlefield from "../../assets/images/game-cover/battlefield.jpg";
import cyberpunk from "../../assets/images/game-cover/cyberpunk.jpg";
import destiny from "../../assets/images/game-cover/destiny.jpg";
import doom from "../../assets/images/game-cover/doom.jpg";
import eldenring from "../../assets/images/game-cover/eldenring.jpg";
import farcry from "../../assets/images/game-cover/farcry.jpg";
import granturismo from "../../assets/images/game-cover/gran-turismo.jpg";
import justdance from "../../assets/images/game-cover/just-dance.jpg";
import masseffect from "../../assets/images/game-cover/mass-effect.jpg";
import reddead from "../../assets/images/game-cover/red-dead-redemption.jpg";
import residentevil from "../../assets/images/game-cover/resident-evil.jpg";

let HomeSectionTwo = (
    <>
        <section className="section-two" id="deals">
            {Sidebar}
            <div className="container section-two-deals">
                {ProductCard("Elden Ring", eldenring)}
                {ProductCard("Assassin's Creed Valhalla", acvalhalla)}
                {ProductCard("Red Dead Redemption 2", reddead)}
                {ProductCard("Resident Evil: Village", residentevil)}
                {ProductCard("Gran Turismo 7", granturismo)}
                {ProductCard("Battlefield 2042", battlefield)}
                {ProductCard("Doom Eternal", doom)}
                {ProductCard("Far Cry 6", farcry)}
                {ProductCard("Destiny 2: Beyond Light", destiny)}
                {ProductCard("Cyberpunk 2077", cyberpunk)}
                {ProductCard("Just Dance 2022", justdance)}
                {ProductCard("Mass Effect: Legendary Edition", masseffect)}
            </div>
        </section>
        <a href="#home">
            <button id="scroll-top">
                <i
                    className="fa fa-arrow-circle-up fa-3x"
                    aria-hidden="true"
                ></i>
            </button>
        </a>
        {Footer}
    </>
);

export default HomeSectionTwo;

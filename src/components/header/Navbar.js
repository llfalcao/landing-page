import Logo from "../../assets/images/logo/logo.png";
import "../../assets/scss/styles.scss";

let Navbar = (
    <nav id="navbar">
        <div className="company">
            <img src={Logo} alt="Store Logo" width="150px" height="auto" />
            <p div="company-name">DigiStore</p>
        </div>
        <ul>
            <li>
                <a className="nav-btn active" href="#home">
                    Home
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#offers">
                    Offers
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#about">
                    About
                </a>
            </li>
            <li>
                <a className="nav-btn" href="#contact">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
);

export default Navbar;

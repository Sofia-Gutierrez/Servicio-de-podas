import "../assets/scss/Navbar.scss"
import useAos from "../hooks/useAos";
import { Link } from "react-scroll";

const Navbar = () => {

    useAos();

        return(
            <nav className="nav" data-aos="fade-down">  
                <input type="checkbox" id="toggler" />
                <label for="toggler"><i className="fa-solid fa-bars"></i></label>
                <div className="nav-content">
                    <div className="nav-logo">LOGO</div>
                    <ul className="nav-links">
                        <li className="nav-li active"><Link className="link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Inicio</Link></li>
                        <li className="nav-li"><Link className="link" to="services" spy={true} smooth={true} offset={-50} duration={500}>Servicios</Link></li>
                        <li className="nav-li"><Link className="link" to="about" spy={true} smooth={true} offset={-80} duration={500}>Sobre nosotros</Link></li>
                        <li className="nav-li"><Link className="link" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;

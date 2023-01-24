import "../assets/scss/Navbar.scss"
import { Link } from "react-scroll";
import logo from "../assets/img/png/logo.jpg"
import useObserver from "../hooks/useObserver";


const Navbar = () => {

    const [containerRef, isVisible] = useObserver();

    const handleClickBtn = () => {
        const btn = document.getElementById("nav-btn");
        const navContent = document.getElementById("nav-content");

        btn.classList.toggle("open");
        navContent.classList.toggle("open");
    }

        return(
            <nav className="nav" id={isVisible ? "show-down" : "hidden-down"} ref={containerRef}> 
                <div id="nav-btn" onClick={handleClickBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav-content" id="nav-content">
                <div className="nav-container-logo"><img src={logo} alt="" className="nav-logo" /></div>
                    <ul className="nav-links">
                        <li className="nav-li active"><Link className="link" to="home" spy={true} smooth={true} offset={-50} duration={500}>Inicio</Link></li>
                        <li className="nav-li"><Link className="link" to="services" spy={true} smooth={true} offset={-50} duration={500}>Servicios</Link></li>
                        <li className="nav-li"><Link className="link" to="about" spy={true} smooth={true} offset={-80} duration={500}>Sobre nosotros</Link></li>
                        <li className="nav-li"><Link className="link" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contacto</Link></li>
                        <li className="nav-li"><Link className="link" to="works" spy={true} smooth={true} offset={-120} duration={500}>Trabajos</Link></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;

import "../assets/scss/Footer.scss";
import wsp from "../assets/img/wsp.png";
import gmail from "../assets/img/gmail.png";
import { Link } from "react-scroll";


const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer-section">
                <h4 id="contact" className="footer-title">Contacto:</h4>
                <span className="footer-text">Whatsapp:+54 1151839909 <img src={wsp} alt="..." className="contact-png" /></span>
                <span className="footer-text">Correo: silviogutierrez1845@gmail <img src={gmail} alt="..." className="contact-png" /></span>
            </section>
            <section className="footer-section">
                <h4 className="footer-title">Secciones:</h4>
                <ul className="footer-list">
                    <li><Link className="footer-link" to="services" spy={true} smooth={true} offset={-50} duration={500}>-Servicios</Link></li>
                    <li><Link className="footer-link" to="about" spy={true} smooth={true} offset={-80} duration={500}>-Sobre nosotros</Link></li>
                    <li><Link className="footer-link" to="location" spy={true} smooth={true} offset={50} duration={500}>-Donde trabajamos</Link></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;
import "../assets/scss/Services.scss";
import batea from "../assets/img/services/batea.jpg";
import hydroCrane from "../assets/img/services/hydroCrane.jpg";
import chipper from "../assets/img/services/chipper.jpg";
import crane from "../assets/img/services/crane.jpg";
import roots from "../assets/img/services/roots.jpg";
import branches from "../assets/img/services/branches.jpg";
import letters from "../assets/img/services/letters.jpg";
import celling from "../assets/img/services/celling.jpg";
import Service from "./Service";

const contentService = [
    {
        img: crane,
        title: "Poda de Altura",
        detail: "Se realizan podas de arboles en altura con grúa"
    },
    {
        img: branches,
        title: "Retiro de ramas",
        detail: "Se retiran ramas"
    },
    {
        img: hydroCrane,
        title: "Movimiento con hidrogrua",
        detail: "Se realizan transportes de maquinarias, bateas, carrocerias, etc..."
    },
    {
        img: roots,
        title: "Extracción de raíz",
        detail: "Se realiza extrancción de raíz del arbol"
    },
    {
        img: chipper,
        title: "Chipeo de ramas",
        detail: "Se realiza chipeo de ramas"
    },
    {
        img: batea,
        title: "Servicio de batea",
        detail: "Alquiler de batea"
    }, 
    {
        img: letters,
        title: "Colocación de carteleria",
        detail: "Se realiza la colocación de carteles"
    },
    {
        img: celling,
        title: "Armado de tinglado",
        detail: "Se presta el servicio para armar un tinglado"
    }
]

const Services = () => {
    return (
        <div className="services-display" id="services">
            <h2 className="h2-services">Servicios</h2>
            <div className="services-container">
            {contentService.map((element, index) => {
                    return (
                        <Service
                            img={element.img}
                            title={element.title}
                            detail={element.detail}
                            key={index + element.title}
                        />)
                })
                }
            </div>
        </div>
    )
}

export default Services;
import "../assets/scss/Services.scss";
import img1 from "../assets/img/img1.jpeg";
import img6 from "../assets/img/img6.jpeg";
import img3 from "../assets/img/img3.jpeg";
import img8 from "../assets/img/img8.jpg";
import Service from "./Service";

const contentService = [
    {
        img: img3,
        title: "Poda de Altura",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        img: img8,
        title: "Retiro de ramas",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        img: img1,
        title: "Movimiento con hidrogrua",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        img: img6,
        title: "Extracción de raíz",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        img: img6,
        title: "Chipeo de ramas",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        img: img6,
        title: "Servicio de batea",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
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
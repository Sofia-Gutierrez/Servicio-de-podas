import "../assets/scss/Home.scss"
import postcard from "../assets/img/services/postcard.jpg";
import wsp from "../assets/img/png/wsp.png";


const Home = () => {
    return (
        <div id="home" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators" >
                <button type="button" data-bs-target="#home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#home" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#home" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={postcard} className="d-block w-100 carousel-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Podas en altura</h5>
                    <p>Se realizan podas de altura, con grúa, herramientas y seguridad.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="wsp">
                <a href="https://wa.me/5491151839909" target="_blank" rel="noreferrer"><img src={wsp} alt="..." className="wsp-img" /></a>
            </div>
        </div>
    )
}

export default Home;
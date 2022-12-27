import "../assets/scss/AboutUs.scss"

const AboutUs = () => {
    return(
        <div className="content-container bg-landscape">
            <div className="content" id="about">
                <div className="about-text">
                    <h2 className="about-title">Quienes somos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                </div>
            </div>
            <div className="content">
                <div className="about-text" id="location">
                    <h2 className="about-title">Donde trabajamos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                </div>
                <iframe  className="frame-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210335.67492747682!2d-58.66668692997641!3d-34.541022356894544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1672107425007!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default AboutUs;
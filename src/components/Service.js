const Service = ({img, title, detail}) => {
    return(
        <div className="service" id="service">
            <img src={img} alt="" className="service-img"/>
            <div className="service-detail">
                <h4 className="sv-title">{title}</h4>
                <p className="sv-detail">{detail}</p>
            </div>
        </div>
    )
}

export default Service;
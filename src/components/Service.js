import useObserver from "../hooks/useObserver";

const Service = ({img, title, detail}) => {

    const [containerRef, isVisible] = useObserver();

    return(
        <div className="service" id={isVisible ? "show-right" : "hidden-right"} ref={containerRef}>
            <img src={img} alt="" className="service-img"/>
            <div className="service-detail">
                <h4 className="sv-title">{title}</h4>
                <p className="sv-detail">{detail}</p>
            </div>
        </div>
    )
}

export default Service;
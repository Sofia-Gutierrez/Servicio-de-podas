import React from "react";
import "../assets/scss/Works.scss";
import batea from "../assets/img/services/batea.jpg";
import hydroCrane from "../assets/img/services/hydroCrane.jpg";
import hydroCrane2 from "../assets/img/services/hydroCrane2.jpg";
import branches from "../assets/img/services/branches.jpg";
import letters from "../assets/img/services/letters.jpg";
import celling from "../assets/img/services/celling.jpg";
import craneWork from "../assets/img/services/craneWork.jpg";
import Work from "./Work";

const Works = () => {

    const contentWork = [
        {
            img: batea
        },
        {
            img: hydroCrane
        },
        {
            img: hydroCrane2
        },
        {
            img: branches
        },
        {
            img: letters
        },
        {
            img: craneWork
        },
        {
            img: celling
        }


    ]

    return(
        <div id="works" className="works-display">
            <h2 className="h2-works">Trabajos Realizados</h2>
            <div className="works-container">
            {contentWork.map((element, index) => {
                    return (
                        <Work
                            img={element.img}
                            detail={element.detail}
                            key={index + element.img}
                        />)
                })
                }
            </div>
        </div>
    )
}

export default Works;
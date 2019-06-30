import React from "react";
import "./style.css";

//cards that contain the images
function Card(props) {
    return (
        <div className="card imgCard" onClick={() => props.CardPlus(props)}>
            <div>
                <img alt={props.name} src={props.image} className="img-fluid"/>
            </div>
        </div>
    )
}
export default Card;
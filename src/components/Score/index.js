import React from "react";
import "./style.css";

function score(props) {
    return (
        <div class="card scoreBar">
            <div>
                <h4 className="fontStyle">Top Score : {props.topScore}</h4>
            </div>
            <div>
                <h4 className="fontStyle">Current Score : {props.currentScore}</h4>
            </div>
        </div>

    );
}
export default score;
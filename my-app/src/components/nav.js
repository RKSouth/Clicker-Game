import React from "react";
import HighScore from "./highscoremessage"

function Nav(props) {
    return (
        <div className="nav nav-tabs">
            <ul>
                <li className="title" className="nav-item">
                    <a href = "/">
                      Clicker Game  
                    </a>
                </li >
                <HighScore score={props.score} topScore ={props.topScore}/>
                <li className="nav-item">
                    score: {props.score} || topScore: {props.topScore}
                </li>
            </ul>
        </div>
    )
} 

export default Nav
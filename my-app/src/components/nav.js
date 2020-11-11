import React from "react";
import HighScore from "./highscoremessage"

function Nav(props) {
    return (
        <div className="navbar">
            <ul>
                <li className="title">
                    <a href = "/">
                      Clicker Game  
                    </a>
                </li>
                <HighScore score={props.score} topScore ={props.topScore}/>
                <li>
                    score: {props.score} || topScore: {props.topScore}
                </li>
            </ul>
        </div>
    )
} 

export default Nav
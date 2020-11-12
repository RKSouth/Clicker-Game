import React from "react";
import HighScore from "./highscoremessage"

import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Clicker Game</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">

          <HighScore score={props.score} topScore={props.topScore} />
   

        </ul>
        <span className="navbar-text">
          score: {props.score} || topScore: {props.topScore + 0}
        </span>
      </div>
    </nav>

  )
} 

export default Nav
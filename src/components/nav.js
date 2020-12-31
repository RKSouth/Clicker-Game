import React from "react";
import HighScore from "./highscoremessage"
import "./style.css"

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg ">    
     
  <a className="navbar-brand" href="/">Restart Game</a>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">    
      <HighScore score={props.score} topScore ={props.topScore} message ={props.message}/>
      </li>
    </ul>
    <span className="navbar-text">
    score: {props.score} || topScore: {props.topScore}
    </span>
  </div>
</nav>



    )
} 

export default Nav
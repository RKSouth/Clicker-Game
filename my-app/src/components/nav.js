import React from "react";
import HighScore from "./highscoremessage"

import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Clicker Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
   
            
      <HighScore score={props.score} topScore ={props.topScore}/>

      </li>

    </ul>
    <span classNameName="navbar-text">
    score: {props.score} || topScore: {props.topScore}
    </span>
  </div>
</nav>



        // <nav className="navbar sticky-top navbar-light bg-light">
        //     <div classNameName="nav nav-tabs">
        //     <ul>
        //         <li classNameName="title" classNameName="nav-item">
        //             <a href = "/">
        //               Clicker Game  
        //             </a>
        //         </li >
        //         <HighScore score={props.score} topScore ={props.topScore}/>
        //         <li classNameName="nav-item">
        //             score: {props.score} || topScore: {props.topScore}
        //         </li>
        //     </ul>
        // </div>
        // </nav>


        
    )
} 

export default Nav
import React, { Component } from "react";

class HighScore extends Component {
    state = {
        message: "",
        moving: false
    }
    //not built in
renderMessage =() => {
    switch (this.state.message) {
        case "correct":
        return "you got it right!"
   
        case "incorrect":
        return "you got it wrong!"
        
        default: return "Click an image to get started"

    }
}
//built in
componentDidUpdate ({ score, topScore }) {
    const newState = {
        moving: true
    }
    if (score ===0 && topScore === 0) {
        newState.message = ""
    } else if (score === 0 && topScore > 0) {
        newState.message = "incorrect"
    } else {
        newState.message = "correct"
    }
//if statement for shaking the screen here -optional

}

render(){
    return(
        //JSX WITH JAVASCRIPT {INSIDE}
        <li className={this.state.moving ? this.state.message : ""}>
            {
                this.renderMessage()
            }
        </li>
    )
}

}

export default HighScore
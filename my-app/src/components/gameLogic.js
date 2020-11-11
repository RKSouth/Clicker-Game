const { Component } = require("react")

import React, {Component} from "react"
import Nav from "./nav"
import ClickItem from "./clickitem"
import data from "./data.json";

class Game extends Component{
    state = {
        //put data into state
        score: 0,
        topScore: 0
    }
    //will only work when data is set up
componentDidMount (){
    this.setState(
        {
            data: this.shuffleData(this.state.data)
        }
    )
}

shuffleData = (data) => {
    let index = data.length -1
    while (index > 0) {
        const random = Math.floor(Math.random()*(index+1))
        const temp = data[index]
        data[index] = data[random]
        data[random]= temp
        index--
    }
    return data
}

}

incorrectGuess () {

}

correctGuess () {

}

resettingData () {

}
//still need a function for handling correct guess, incorrect guess and resetting data

handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

 

// how to click an item function needed too
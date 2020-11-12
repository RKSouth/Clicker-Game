// const { Component } = require("react")

import React, {Component} from "react"
import Nav from "./nav"
import ClickItem from "./clickitem"
import data from "../data.json";


class Game extends Component{
    state = {
        //put data into state
        score: 0,
        topScore: 0,
        maxScore: 12,
        message: "Click an image to begin!",
        messageClass: "",
        ClickItem: ClickItem
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

  handleCorrect = () => {
    
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score+1})
    }else{
      this.setState({score: this.state.score+1})
    }
  }

  handleReset = (currentClickedItem) => {
    //if current score is at max reset score to 0 and topscore to 0
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      //reset clicked state for ClickedItem
      const updatedClickedItem = currentClickedItem.map(ch => (true) ? { ...ch, isClicked: false } : ch)
      return updatedClickedItem
    }else{
      return currentClickedItem
    }
  }

  handleIncorrect = () => {
    //incorrect selection made, reset score to 0
    this.setState({score: 0})
    //reset clicked state for ClickedItem
    const updatedClickedItem = this.state.ClickedItem.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
    return updatedClickedItem
  };

  render(){
    return (
      <div className="container col sm-2 m-6 l-12">
      
        {this.state.data.map(data => (
          <ClickItem
            
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            onClick={this.handleClick}
          />
        ))}
       
      </div>)
  };
}

export default Game;
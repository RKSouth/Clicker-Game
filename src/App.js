import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import ClickItem from "./components/clickitem";
import Header from "./components/highscoremessage"
import Nav from "./components/nav"
import HighScore from './components/highscoremessage'
import data from "./data.json";

class App extends Component {
  // Setting this.state.data to the data json array
  state = {
    data: data,
    score: 0,
    topScore: 0,
    maxScore: 12,
    array: []

  }

  componentDidMount() {
    this.setState(
      {
        data: this.shuffleData(this.state.data)
      }
    )
  }
  // shuffleData = () => {
  //   let index = this.state.data;
  //   for (let i = 0; i < index.length; i++) {
  //     var random = Math.floor(Math.random() * i);
  //     var temp = index[i];
  //     index[i] = index[random];
  //     index[random] = temp;
  //   }
  //   this.setState({ data: index })
  // }


  // shuffleData= () => {
  //   let i = this.state.data;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = this.state.data[i];
  //     this.state.data[i] = this.state.data[j];
  //     this.state.data[j] = temp;
  //   }
  //   console.log("shuffle")
  //   return this.state.data;
  // }

  shuffleData = (data) => {
    let index = 11;
    let temp;
    let random;
    while (index > 0) {
      random = Math.floor(Math.random() * (index + 1))
      temp = data[index]
      data[index] = data[random]
      data[random] = temp
      index--
    }
    return data
  }
  handleCorrect = () => {

    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: this.state.score + 1 })
    } else {
      this.setState({ score: this.state.score + 1 })
    }
  }

  // handleReset = (currentClickedItem) => {
  //   //if current score is at max reset score to 0 and topscore to 0
  //   if (this.state.score+1 === this.state.maxScore) {
  //     this.setState({score: 0, topScore: 0})
  //     //reset clicked state for ClickedItem
  //     const updatedClickedItem = currentClickedItem.map(ch => (true) ? { ...ch, isClicked: false } : ch)
  //     return updatedClickedItem
  //   }else{
  //     return currentClickedItem
  //   }
  // }

  handleIncorrect = () => {
    //incorrect selection made, reset score to 0
    this.setState({ score: 0 })
    //reset clicked state for ClickedItem
    this.state.data.forEach(element => {
      element.clicked = "false";
    });
  };



  handleClick = id => {
    let currentClickedItem = this.state.data.filter(x => x.name === id.target.alt);



    let currentClickedIndex = this.state.data.map(function (e) { return e.name; }).indexOf(currentClickedItem[0].name);;
    const score = 0;
    const topScore = 0;


    console.log("click");
    console.log(currentClickedItem);
    console.log(currentClickedIndex);
    console.log(this.state.data)
    console.log(this.state.data[currentClickedIndex].clicked)



    if (this.state.data[currentClickedIndex].clicked === "false") {
      console.log("I've been clicked for the very first time (like a virgin)")
      this.state.data[currentClickedIndex].clicked = "true";
      this.handleCorrect();
    }
    else {
      this.handleIncorrect();
    }

    this.setState(
      {
        data: this.shuffleData(this.state.data)
      }
    )
  };




  // Map over this.state.data and render a dataCard component for each data object
  render() {

    return (
      <Wrapper>

        <Nav score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="container">
          <div className="text-center row" >


            {this.state.data.map(data => (
              <ClickItem
                id={data.id}
                key={data.id}
                name={data.name}
                image={data.image}
                clicked={data.clicked}
                onClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import ClickItem from "./components/clickitem";
import Nav from "./components/nav"
import Footer from './components/footer'
import data from "./data.json";

class App extends Component {
  // Setting this.state.data to the data json array
  state = {
    data: data,
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "",
    

  }

  componentDidMount() {
    this.setState(
      {
        data: this.shuffleData(this.state.data)
      }
    )
  }

//mix it up
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


  handleIncorrect = () => {
    //incorrect selection made, reset score to 0
    this.setState({ score: 0 })
    //reset clicked state for ClickedItem
    this.state.data.forEach(element => {
      element.clicked = "false";
    });
  };



  handleClick = id => {
    //how do we find out what item was clicked?
    //filtering the current items alt tag (name) and setting it to currentitem then comparing the index of the name 
    // to the clicked items names of id numbers ...weird
    let currentClickedItem = this.state.data.filter(x => x.name === id.target.alt);
    let currentClickedIndex = this.state.data.map(function (e) { return e.name; }).indexOf(currentClickedItem[0].name);;
    const score = 0;
    const topScore = 0;


    // console.log("click");
    // console.log(currentClickedItem);
    // console.log(currentClickedIndex);
    // console.log(this.state.data)
    // console.log(this.state.data[currentClickedIndex].clicked)

//if the data clicked in the current index # had not been clicked then....
    if (this.state.data[currentClickedIndex].clicked === "false") {
      console.log("I've been clicked for the very first time (like a virgin)")
      ///set it to true and call the handlecorrect page
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
      <div>
      <div>
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
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;

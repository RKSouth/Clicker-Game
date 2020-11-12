import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import ClickItem from "./components/clickitem";
import Header from "./components/header"
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

  componentDidMount (){
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


shuffleData= () => {
  let i = this.state.data;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  }
  return data;
}

// shuffleData = (data) => {
//     let index = data.length -1;
//     let temp;
//     let random;
//     while (index > 0) {
//         const random = Math.floor(Math.random()*(index+1))
//         const temp = data[index]
//         data[index] = data[random]
//         data[random]= temp
//         index--
//     }
//     return data
// }
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



  handleClick = id => {
    let currentClickedItem = this.state.data.filter(x => x.name === id.target.alt);
    const score= 0 ;
    const topScore = 0;

    console.log("click");
    console.log(id);
    console.log(id.target.alt);
    console.log(this.state.data)
    console.log(currentClickedItem)

     if (ClickItem.clicked === "false"){
       console.log("I've been clicked")
     }
    
    if (!this.state) {
      // if score and topScore are the same, then there is a new topScore value
      if (score === topScore) {
        score++;
        topScore++;
        

      } else {
        score++;
       
      }
 
    this.setState({
      data: this.shuffleData(this.state.data),
      img: "",
      name: "",
      id: ""
    });
  };
}

  

  // Map over this.state.data and render a dataCard component for each data object
  render() {
 
    return (
      <Wrapper>
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

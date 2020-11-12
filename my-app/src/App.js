import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import ClickItem from "./components/clickitem";


import data from "./data.json";
let score;
let topScore;

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




  handleClick = data => {
    console.log("click");
   
    
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
      <div className="wrapper">
         <div className="container">
            <div className="text-center row" >
 
      
        {this.state.data.map(data => (
          <ClickItem
            
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            onClick={this.handleClick}
            
          />
        ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;

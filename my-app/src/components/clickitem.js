import React from "react";


import "./style.css";
const ClickItem = props => {
    console.log(props.image);
    console.log(props);
    return (
        <div className="card">

   
        
        <img
                  className="img-fluid"
                  onClick={props.onClick}
                  src={props.image}
                  alt={props.name} />
        
        
      </div>
  
    );
}

export default ClickItem

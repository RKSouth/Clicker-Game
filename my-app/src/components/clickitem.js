import React from "react";


import "./style.css";
const ClickItem = props => {
  
    return (
        <div className="card">

   
        
        <img
                  className="img-fluid"
                  onClick={props.onClick}
                  src={props.image}
                  alt={props.name}
                  clicked={props.clicked} />
        
        
      </div>
  
    );
}

export default ClickItem

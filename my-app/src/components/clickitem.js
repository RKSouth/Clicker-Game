import React from "react";

function ClickItem (props) {
    return (
        <div role="img" className="clickItem">
            <div className="card">
                <div className="img-container">
                     <img alt={props.name} src={props.image} />
                </div>
             </div>
        </div>
    );
}

export default ClickItem
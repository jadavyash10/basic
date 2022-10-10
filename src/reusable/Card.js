import React from "react";

const Card = (props) => {
  return (
    <div className={`card  mb-3 ${props.color}`} style={{maxwidth: '18rem'}}>
      <div className="card-header">{props.Header}</div>
      <div className={`card-body text-${props.color}`}>
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;

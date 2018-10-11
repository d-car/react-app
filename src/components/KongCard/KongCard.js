import React from "react";
import "./KongCard.css";

const KongCard = props => (
  <div className="card">
    <div onClick={() => props.KongCard(props.id)} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong>
        </li>
      </ul>
    </div>

  </div>
);

export default KongCard;
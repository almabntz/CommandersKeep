import React from "react";
import "./displayCard.css";

const DisplayCard = ({ card }) => {
  // const onClick () => {}
  //THIS WILL COME LATER AND WILL PASS DATA TO MYCOLLECTION

  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          {card.imageUrl && (
            <img src={card.imageUrl} alt="image" className="card-img" />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{card.name}</h2>
          <p className="card-text">
            <b>Mana Cost:</b> {JSON.stringify(card.manaCost)}
            <br></br>
            <br></br>
            <b>Flavor Text:</b> {JSON.stringify(card.originalText)}
            <br></br>
            <br></br>
            <b>Converted Mana Cost:</b> ${JSON.stringify(card.cmc)}
          </p>
        </div>
      </div>
      <div className="card-footer w-100 text-muted">
        <p>
          <b>legalities:</b> {JSON.stringify(card.legalities)}
        </p>
      </div>
    </div>
  );
};

export default DisplayCard;

import { useState } from "react";
import "./displayCard.css";

const DisplayCard = ({ card }) => {
 
  console.log(card, "this is one card");

  //console.log(card.imageURL, "This is my test for image")

  console.log(card.rarity, "test for Rarity");

  return (
    <div className="display-card">
     
      <div className="card-name">
      <h2>{card.name}</h2>
      </div>
     
    <div className="card-img">
    {card.imageUrl && <img src={card.imageUrl} alt="image" />}
    </div>
     
    <div className="card-mana">
    <p>
        <b>Mana Cost:</b> {JSON.stringify(card.manaCost)}
      </p>
    </div>
    
    <div className="card-text">
      <p>
        <b>Flavor Text:</b> {JSON.stringify(card.originalText)}
      </p>
    </div>
    
    </div>
  );
};

export default DisplayCard;
/* Need to format how data appears here, 
data is being passed to page ARCHIVE */



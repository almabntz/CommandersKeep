import React, { useEffect, useState } from "react";
import "./displayCard.css";
//import bodyParser from "body-parser";

const DisplayCard = ({ card, addNewCard, updateCollection, setUpdateCollection }) => {
 //const[addToCollection, setAddToCollection] = useState([]);
   const handleAddClick =(e) => {
    e.preventDefault();
    addNewCard(updateCollection)
    setUpdateCollection({
      user_id: "",
      id: "",
      name: "",
      manaCost: "",
      originalText: "",
      cmc: "",
      imageUrl: ""
    });
   }

     //setAddToCollection((prev) => [...prev, e])
     
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
      <button onClick={handleAddClick}>+ My Collection</button>
    </div>
  );
};

export default DisplayCard;

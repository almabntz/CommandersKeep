import React, { useState } from "react";
import "./displayCard.css";

const DisplayCard = ({ card }) => {
  const [updateCollection, setUpdateCollection] = useState([]);
  const addNewCard = async (e) => {
    e.preventDefault();
    console.log(updateCollection);
    //POST request that send card data to user_Collection
    await fetch("/user_collection", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
    console.log(card, "this is card");
  };

  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          <img src={card.imageUrl} alt="image" className="card-img" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{card.name}</h2>
          <p className="card-text">
            <b>Mana Cost:</b> {JSON.stringify(card.manaCost)}
            <br></br>
            <br></br>
            <b>Flavor Text:</b> {JSON.stringify(card.text)}
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
      <button className="button-card" onClick={(e) => addNewCard(e)}>
        + My Collection
      </button>
    </div>
  );
};

export default DisplayCard;

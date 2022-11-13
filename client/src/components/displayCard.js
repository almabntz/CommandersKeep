import React, { useEffect, useState } from "react";
import "./displayCard.css";
//import bodyParser from "body-parser";

const DisplayCard = ({ card }) => {
 const[updateCollection, setUpdateCollection] = useState([]);
   const addNewCard = async (e) => {
    e.preventDefault();
    console.log(updateCollection);
    await fetch ("http://localhost:8080/user_collection",{
    method: "POST",
    headers: {Accept:"application/json", "Content-Type" : "application/json"},
    body: JSON.stringify( card ),
  })
console.log(card, "this is card")
    // setUpdateCollection({
    //   user_id: "",
    //   id: "",
    //   name: "",
    //   manaCost: "",
    //   originalText: "",
    //   cmc: "",
    //   imageUrl: ""
    // });

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
      <button onClick={(e) => addNewCard(e)}>+ My Collection</button>
    </div>
  );
};

export default DisplayCard;

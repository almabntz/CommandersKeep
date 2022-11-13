import React from "react";
import "./displayCard.css";

const DisplayCard = ({ card, addButton, handleAddClick }) => {
const AddButton = addButton; //This is a prop from Archive 

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
            <b>Converted Mana Cost:</b>{JSON.stringify(card.cmc)}
          </p>
        </div>
      </div>
      <div className="card-footer w-100 text-muted">
        <p>
          <b>legalities:</b> {JSON.stringify(card.legalities)}
          <div onClick= {handleAddClick}>
          <AddButton/>
          </div>
        </p>
      </div>
    </div>
  );
};

export default DisplayCard;

/*I know i need to take individual card data and pass if from displatcard to collection
I think i can assign the prop value to each card and have that data post to a table in the back.
im going to start by looking into tutorials on how to save "favorites" because the concepts 
are similar*/

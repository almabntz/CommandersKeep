import React from "react";
import "./displayCard.css";

const SavedDisplayCard = ({ displayCollection, deleteCard }) => {
  const handleDeleteCollection = (e, id) => {
    e.preventDefault();
    deleteCard(id);
  };

  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          {displayCollection.imageurl && (
            <img
              src={displayCollection.imageurl}
              alt="image"
              className="card-img"
            />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{displayCollection.name}</h2>
          <p className="card-text">
            <b>Mana Cost:</b> {JSON.stringify(displayCollection.manacost)}
            <br></br>
            <br></br>
            <b>Flavor Text:</b> {JSON.stringify(displayCollection.originaltext)}
            <br></br>
            <br></br>
            <b>Converted Mana Cost:</b> {JSON.stringify(displayCollection.cmc)}
          </p>
        </div>
        <button
          className="button-card"
          value={displayCollection.id}
          onClick={(e) => handleDeleteCollection(e, displayCollection.id)}
        >Delete</button>
      </div>
      <div className="card-footer w-100 text-muted"></div>
    </div>
  );
};

export default SavedDisplayCard;

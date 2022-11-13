import React from "react";
import "./displayCard.css";

const SavedDisplayCard = ({displayCollection}) => {
  //logic goes here

  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="img-square-wrapper">
          {displayCollection.imageUrl && (
            <img src={displayCollection.imageUrl} alt="image" className="card-img" />
          )}
        </div>
        <div className="card-body">
          <h2 className="card-title">{displayCollection.name}</h2>
          <p className="card-text">
            <b>Mana Cost:</b> {JSON.stringify(displayCollection.manaCost)}
            <br></br>
            <br></br>
            <b>Flavor Text:</b> {JSON.stringify(displayCollection.originalText)}
            <br></br>
            <br></br>
            <b>Converted Mana Cost:</b> {JSON.stringify(displayCollection.cmc)}
          </p>
        </div>
      </div>
      <div className="card-footer w-100 text-muted">
        <p>
          <b>legalities:</b> {JSON.stringify(displayCollection.legalities)}
        </p>
      </div>
    </div>
  );
};

export default SavedDisplayCard;

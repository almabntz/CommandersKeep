import React from "react";

const DeckDisplayCard = ({displayDeck}) => {
//logic here

return(
    <div className="card">
    <div className="card-horizontal">
      <div className="img-square-wrapper">
        {displayDeck.imageurl && (
          <img src={displayDeck.imageurl} alt="image" className="card-img" />
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title">{displayDeck.name}</h2>
        <p className="card-text">
          <b>Mana Cost:</b> {JSON.stringify(displayDeck.manacost)}
          <br></br>
          <br></br>
          <b>Flavor Text:</b> {JSON.stringify(displayDeck.originaltext)}
          <br></br>
          <br></br>
          <b>Converted Mana Cost:</b> {JSON.stringify(displayDeck.cmc)}
        </p>
      </div>
    </div>
    <div className="card-footer w-100 text-muted">
    </div>
  </div>
)
}

export default DeckDisplayCard
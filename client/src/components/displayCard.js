//import { urlencoded } from "express";
import { useState } from "react";

const DisplayCard = ({ card }) => {
  //QUALITY OF LIFE CODE
  // function will make special char appear on page, will pass them through function as string
  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  console.log(card, "this is one card");

  return (
    <div className="display-card">
      <h2>{JSON.stringify(card.name)}</h2>
      <p>
        <b>Mana Cost:</b> {JSON.stringify(card.manaCost)}
      </p>
      <p>
        <b>Flavor Text:</b> {JSON.stringify(card.originalText)}
      </p>
    </div>
  );
};

export default DisplayCard;
/* Need to format how data appears here, 
data is being passed to page ARCHIVE */

//this might work for returning image
//{decodeHtml(<img src={card.png}/>)}

//import { urlencoded } from "express";
import { useState } from "react";

const DisplayCard = ({ card }) => {
  //QUALITY OF LIFE CODE
  //function will make special char appear on page, will pass them through function as string
  // function decodeHtml(html) {
  //   var txt = document.createElement("textarea");
  //   txt.innerHTML = html;
  //   return txt.value;
  // }
console.log(card, "this is one card");

//console.log(card.imageURL, "This is my test for image")

console.log(card.rarity, "test for Rarity")

  return (
    <div className="display-card">
      <h2>{card.name}</h2>

   {card.imageUrl && <img src={card.imageUrl} alt="image"/>}

    
  
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
//<img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=547444&type=card"/>
// <h1>{card.imageUrl}</h1>

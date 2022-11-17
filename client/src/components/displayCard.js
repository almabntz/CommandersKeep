import React, { useState } from "react";
import "./displayCard.css";
import {MessageCard, IMAGE_LAYOUT} from 'baseui/message-card';

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
    <div>
    <MessageCard
      heading={card.name}
      paragraph={
        <div>
          <b>Mana Cost:</b>{JSON.stringify(card.manaCost)}
          <br></br>
          <br></br>
          <b>Flavor Text:</b> {JSON.stringify(card.text)}
          <br></br>
          <br></br>
          <b>Converted Mana Cost:</b> {JSON.stringify(card.cmc)}
          <br></br>
          <b>legalities:</b> {JSON.stringify(card.legalities)}
        </div>
      }
      buttonLabel="+ My Collection"
      onClick={(e) => addNewCard(e) && alert('ADDED TO MY COLLECTION')}
      //onClick={()=>alert('ADDED')}
      image={{
        src:card.imageUrl, 
        layout: IMAGE_LAYOUT.trailing,
        ariaLabel: 'MTG Card image',
      }}
      //overrides={{Root: {style: {marginBottom: '30px'}}}}
      overrides={{
        Image: {
          style: { height: "310px", width: "250px" }
        }}}
    />
  </div>
  );
};

export default DisplayCard;

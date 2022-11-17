import React, { useState } from "react";
import "./displayCard.css";
import { Card, StyledBody, StyledAction} from "baseui/card";
import { Button } from "baseui/button";

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
    <Card
      overrides={{ Root: { style: { width: "900px" } } }}
      headerImage={card.imageUrl}
      title={card.name}
    >
      <StyledBody>
        <p className="card-text">
          <b>Mana Cost:</b> {JSON.stringify(card.manaCost)}
          <br></br>
          <br></br>
          <b>Flavor Text:</b> {JSON.stringify(card.text)}
          <br></br>
          <br></br>
          <b>Converted Mana Cost:</b> {JSON.stringify(card.cmc)}
          <br></br>
        <b>legalities:</b> {JSON.stringify(card.legalities)}
        </p>
        
      </StyledBody>
      <StyledAction>
        <Button
          overrides={{ BaseButton: { style: { width: "100%" } } }}
          onClick={(e) => addNewCard(e)}
        >
          + My Collection
        </Button>
      </StyledAction>
    </Card>
  );
};

export default DisplayCard;

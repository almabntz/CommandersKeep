import React, { useState } from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

const SavedDisplayCard = ({ displayCollection, deleteCard }) => {
  const [updateDeck, setUpdateDeck] = useState([]);
   const addDeckNew = async (e) => {
    e.preventDefault();
    console.log(updateDeck);
      await fetch("/user_deck", {
      method: "POST",
      headers: { 
        Accept: "application/json", "Content-Type": "application/json",},
      body: JSON.stringify(updateDeck),
    });
    
    console.log(updateDeck, "this is saved display card");
  };

  //delete logic
  const handleDeleteCollection = (e, id) => {
    e.preventDefault();
    deleteCard(id);
  };

  return (
    <Card
      overrides={{ Root: { style: { width: "400px" } } }}
      headerImage={displayCollection.imageurl}
      title={displayCollection.name}
    >
      <StyledBody>
        <b>Mana Cost:</b> {JSON.stringify(displayCollection.manacost)}
        <br></br>
        <br></br>
        <b>Flavor Text:</b> {JSON.stringify(displayCollection.originaltext)}
        <br></br>
        <br></br>
        <b>Converted Mana Cost:</b> {JSON.stringify(displayCollection.cmc)}
      </StyledBody>
      <StyledAction>
        <Button
          overrides={{
            BaseButton: { style: { width: "30%" } },
          }}
          onClick={(e) => handleDeleteCollection(e, displayCollection.id)}
        >
          Delete
        </Button>
        <Button
        onClick={(e) => addDeckNew(e)}>+ My Deck</Button>
      </StyledAction>
    </Card>
  );
};

export default SavedDisplayCard;

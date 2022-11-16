import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

const SavedDisplayCard = ({ displayCollection, deleteCard }) => {
  const handleDeleteCollection = (e, id) => {
    e.preventDefault();
    deleteCard(id);
  };
  return (
    <Card
      overrides={{ Root: { style: { width: "328px" } } }}
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
          overrides={{ BaseButton: { style: { width: "100%" } } }}
          onClick={(e) => handleDeleteCollection(e, displayCollection.id)}
        >
          Delete
        </Button>
      </StyledAction>
    </Card>
  );
};

export default SavedDisplayCard;

import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";

const DeckDisplayCard = ({displayDeck}) => {
//logic here

return(
<Card
overrides={{ Root: { style: { width: "400px" } } }}
headerImage={displayDeck.imageurl}
title={displayDeck.name}
>
<StyledBody>
  <b>Mana Cost:</b> {JSON.stringify(displayDeck.manacost)}
  <br></br>
  <br></br>
  <b>Flavor Text:</b> {JSON.stringify(displayDeck.originaltext)}
  <br></br>
  <br></br>
  <b>Converted Mana Cost:</b> {JSON.stringify(displayDeck.cmc)}
</StyledBody>
<StyledAction>
  <Button
    overrides={{
      BaseButton: { style: { width: "30%" } },
    }}
    //onClick={(e) => handleDeleteCollection(e, displayDeck.id)}
     //onClick={(e) => addNewCard(e) && alert('ADDED TO MY COLLECTION')}
  >
    Delete
  </Button>
</StyledAction>
</Card>
)
}

export default DeckDisplayCard

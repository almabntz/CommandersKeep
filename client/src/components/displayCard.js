import { useState } from "react";

const DisplayCard = ({card}) => {
    //logic for deleting cards from collection will go here
    console.log(card, 'this is one card')
    return(
        <div>
           <h1> This is data from displayCard </h1>
           {JSON.stringify(card)}
        </div>
    )
}

export default DisplayCard;
/* Need to format how data appears here, 
data is being passed to page ARCHIVE */
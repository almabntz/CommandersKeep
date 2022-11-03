import { useState } from "react";

const DisplayCard = ({card}) => {
    
    console.log(card, 'this is one card')
    return(
        <div>
           <h1> This is data from displayCard </h1>
           {JSON.stringify(card.name)}
        </div>
    )
}

export default DisplayCard;
/* Need to format how data appears here, 
data is being passed to page ARCHIVE */
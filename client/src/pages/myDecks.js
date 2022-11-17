import React, { useEffect, useState } from 'react';
import DeckDisplayCard from '../components/deckDisplayCard';

const Decks = () => {
const [myDeck, setMyDeck] = useState([]); //this will hold cards within the deck
    //logic goes here
//get request from DB    
const getDeck = async () => {
    const response = await fetch("/user_deck");
    const storedDeck = await response.json();
    setMyDeck(storedDeck);
  };
  useEffect(() => {
    getDeck();
  }, [myDeck]);

  //delete logic to follow later

    return (
        <div>
            <div>
                {myDeck.map((myDeckCards,i) => {
                    return(
                        <DeckDisplayCard 
                        key={i}
                        displayDeck={myDeckCards}
                        />
                    );
                })}
            </div>
            
        </div>
    )
};
export default Decks;
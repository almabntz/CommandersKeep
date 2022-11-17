import React, { useEffect, useState } from 'react';
import DeckDisplayCard from '../components/deckDisplayCard';

const Decks = () => {
const [myDeck, setMyDeck] = useState([]); //this will hold cards within the deck
    //logic goes here
const getDeck = async () => {
    const response = await fetch("/user_deck");
    const storedDeck = await response.json();
    setMyDeck(storedDeck);
  };
  useEffect(() => {
    getDeck();
  }, [myDeck]);

    return (
        <div>
            <div>
            <h1>This is my Decks</h1>
            <DeckDisplayCard />
            </div>
            
        </div>
    )
};
export default Decks;
import React, { useEffect, useState } from 'react';
import Collection from './myCollection';

const Archive = () => {
    //logic goes here
const [archiveCards, setArchiveCards] = useState([]);


//fetch from API 
//GET request from backend, will bring data to front
// const getCardsFromAPI = async () => {
//     const response await fetch ("http://localhost:8080/api/cards")
//}

    return (
        <div>
            <h1>This where full list of cards can be browsed</h1>
        </div>
    )
};
export default Archive;
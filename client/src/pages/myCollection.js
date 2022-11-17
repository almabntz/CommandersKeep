import React, { useEffect, useState } from "react";
import SavedDisplayCard from "../components/savedDisplayCard";
/*
 *   Parent: Collection
 *    props displayCollection and deleteCard is being passed from
 *    collection to savedDisplayCard
 *
 *    Child: savedDisplayCard
 *
 */
const Collection = ({ sendToCollection, currentCollection }) => {
  const [myCollection, setMyCollection] = useState([]); //This will hold users collection of cards
  //fetch from DB, Get request
  const getCollection = async () => {
    const response = await fetch("/user_collection");
    const storedCollection = await response.json();
    setMyCollection(storedCollection);
  };
  useEffect(() => {
    getCollection();
  }, [myCollection]);

  //Delete handle logic
  const deleteCard = (deleteCardId) => {
    return fetch(`user_collection/${deleteCardId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        getCollection();
      }
    });
  };

  return (
    <div>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 1fr 1fr", "gridRowGap": "20px"}} >
        {myCollection.map((myCards, i) => {
          return (
            <SavedDisplayCard
              key={i}
              displayCollection={myCards}
              deleteCard={deleteCard}
            />
          );
        })}
        This is my collection
      </div>
    </div>
  );
};
export default Collection;

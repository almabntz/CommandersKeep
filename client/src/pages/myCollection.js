import React, { useEffect, useState } from "react";
import SavedDisplayCard from "../components/savedDisplayCard";
/*
 *   Parent: Collection
 *    displayCollection is being passed from
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

  return (
    <div>
      <div>
        {myCollection.map((myCards, i) => {
          return <SavedDisplayCard key={i} displayCollection = {myCards} />;
        })}
        This is my collection
      </div>
    </div>
  );
};
export default Collection;

import React, { useEffect, useState } from 'react';

/* 
*   Parent: Collection 
*   
*
*
*
*    Child: DisplayCard
*  
*/

const Collection = () => {
   const [myCollection, setMyCollection] = useState([]); //This will hold cards 
    return (
        <div>
            <h1>This is my Collection</h1>
        </div>
    )
};
export default Collection;
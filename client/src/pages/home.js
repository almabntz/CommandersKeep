import React from "react";


const Home = () => {

    //logic goes here

return (
    <div className="home">

<h1>This is my landing page</h1>

        <label>Email:</label>
        <input
        type= "text"
        placeholder="myEmail@gmail.com"
        required
        />
         <label>Password:</label>
        <input
        type= "text"
        placeholder="Password"
        required
        />
       


    </div>
)

}

export default Home;
import React from "react";
import NavBar from "./navBar";


const Profile = (props) => {
    //logic
let user = props.user;


    return (
        <div>
            
            {JSON.stringify(user, null, 2)}


        </div>
    )
}

export default Profile;
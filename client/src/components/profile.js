import React from "react";

const Profile = (props) => {
  //logic will follow soon
  let user = props.user;

  return <div>{JSON.stringify(user, null, 2)}</div>;
};

export default Profile;

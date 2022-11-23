import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div
      className="nav-links"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <h2>Log Out</h2>
    </div>
  );
};

export default LogoutButton;

//className="btn btn-danger btn-block"

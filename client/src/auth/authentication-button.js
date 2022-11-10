import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useAuth0 } from '@auth0/auth0-react';


const saveUser = (user) => {
return fetch ("postgres://localhost:5432/com_keep",{
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(user),
})
}

const AuthenticationButton = () => {
  


  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
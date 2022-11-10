//import logo from './logo.svg';
import './App.css';

//Nav Bar Code
import {useState} from 'react';
import NavBar from './components/navBar';
// pages
import Collection from './pages/myCollection';
import Decks from './pages/myDecks';
import Archive from './pages/archive';
import Home from './pages/home';
//auth0
import Auth0NavBar from './auth/nav-bar';
import {useAuth0} from '@auth0/auth0-react';
import Loading from "./auth/loading";
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './components/profile';

function App() {
  const [view, setView] = useState("myCollection")
  //auth0
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    //Nav Bar Code
    <div id="app" className="d-flex flex-column h-100">
      {!user ? (<h1>Please sign in, TEST TEXT </h1>) : <NavBar/>}
      <NavBar setView={setView} user={user}/>
      {view === 'myCollection' && <Collection/>}
      {view === 'myDecks' && <Decks/>}
      {view === 'archive' && <Archive/>}
      {view === 'home' && <Home />}
  

<div className="container flex-grow-1">

<Auth0NavBar/>
</div>
{!user ? <span>Greetings, Planeswalker</span> : <span>Welcome back, Planeswalker <Link to ="">{user.name}</Link></span>}
    </div>
  );
}

export default App;


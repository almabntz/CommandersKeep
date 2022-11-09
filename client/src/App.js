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


function App() {
  const [view, setView] = useState("myCollection")
  //auth0
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    //Nav Bar Code
    <div id="app" className="d-flex flex-column h-100">
      <NavBar setView={setView}/>
      {view === 'myCollection' && <Collection/>}
      {view === 'myDecks' && <Decks/>}
      {view === 'archive' && <Archive/>}
      {view === 'home' && <Home />}
      
<div className="container flex-grow-1">
  { !user ? <span>Hello from Techtonica</span> : <Dashboard /> }
<Auth0NavBar/>
</div>

    </div>
  );
}

export default App;

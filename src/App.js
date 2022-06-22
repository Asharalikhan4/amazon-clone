import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home'
import Header from './components/Header';
import Checkout from './screens/Checkout';
import Login from './screens/Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  useEffect(() => {
    // Will only run when the app component load.
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>>",authUser);

      if(authUser){
        // User just logged in.
        dispatchEvent({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // User just logged out.
        dispatchEvent({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);
  // the box upside is just like the if statement in the react.


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} options={{headerShown: false}}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

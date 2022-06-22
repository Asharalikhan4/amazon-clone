import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home'
import Header from './components/Header';
import Checkout from './screens/Checkout';
import Login from './screens/Login'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='login' element={<Login />} options={{headerShown: false}}
        />
      </Routes>
    </Router>
  );
}

export default App;

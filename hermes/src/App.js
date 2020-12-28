import React from 'react';
import Review from './Review';
import {FaChessBoard} from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

<section className="main">
  <container>
    <div className="title">
      <h2>Hermes</h2>
      <div className="underline"></div>
    </div>
    <Review/>
  </container>
</section>

  );
}

export default App;

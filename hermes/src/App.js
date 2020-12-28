import React from 'react';
import ChessPiece from './ChessPiece';
import {FaChessBoard} from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<main>
<section className="container">
    <div className="title">
      <h2>Hermes</h2>
      <div className="underline"></div>
    </div>
    <ChessPiece/>
</section>
</main>);}
export default App;

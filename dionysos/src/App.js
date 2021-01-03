import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [wines, setWines]=useState(data);
  const [index, setIndex]=useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Wines
        </h2>
      </div>
      <div className="section-center">
        {wines.map((wine,wineIndex)=>{
          const {id,image,name,title,quote}=wine;
          return <article key={id}>
            <img src={image} alt={name} className="wine-img"/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
        })}
        <FaChevronLeft className="prev"></FaChevronLeft>
        <FaChevronRight className="next"></FaChevronRight>
      </div>
    </section>
  );
}

export default App;

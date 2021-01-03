import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [wines, setWines] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = wines.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, wines]);

  useEffect(() => {
   let slider= setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return ()=>clearInterval(slider);
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Wines
        </h2>
      </div>
      <div className="section-center">
        {wines.map((wine, wineIndex) => {
          const { id, image, name, title, quote } = wine;
          let position = 'nextSlide';
          if (wineIndex === index) {
            position = 'activeSlide';
          }
          if (
            wineIndex === index - 1 ||
            (index === 0 && wineIndex === wines.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="wine-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <FaChevronLeft
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        ></FaChevronLeft>
        <FaChevronRight
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        ></FaChevronRight>
      </div>
    </section>
  );
}

export default App;

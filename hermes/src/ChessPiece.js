import React, { useState } from 'react';
import chessPieces from './data';
import { FaChevronLeft, FaChevronRight, FaChessBoard } from 'react-icons/fa';

const ChessPiece = () => {
  const [index, setIndex] = useState(0);
  const { id, name, text, job, image } = chessPieces[index];

  const checkNumber = (number) => {
    if (number > chessPieces.length - 1) {
      return 0;
    }
    if (number < 0) {
      return chessPieces.length - 1;
    }
    return number;
  };

  const prevChessPiece = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextChessPiece = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomChessPiece = () => {
    let randomNumber = Math.floor(Math.random() * chessPieces.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="piece-img" />
        <span className="quote-icon">
          <FaChessBoard></FaChessBoard>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevChessPiece}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={nextChessPiece}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={randomChessPiece}>
        Surprise Me
      </button>
    </article>
  );
};

export default ChessPiece;

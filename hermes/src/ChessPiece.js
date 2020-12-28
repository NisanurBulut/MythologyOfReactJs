import React, { useState } from 'react';
import chessPieces from './data';
import { FaChevronLeft, FaChevronRight, FaChessBoard } from 'react-icons/fa';

const ChessPiece = () => {
  const [index, setIndex] = useState(0);
  const { id, name, text, job, image } = chessPieces[index];
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
        <button className="prev-btn">
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn">
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn">Surprise Me</button>
    </article>
  );
};

export default ChessPiece;

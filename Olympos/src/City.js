import React, { useState } from 'react';

const City = ({ id, name, description, image, famous }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-city">
      <img src={image} alt={name}></img>
      <footer>
        <div className="city-info">
          <h4>{name}</h4>
          <h4 className="city-famous">{famous}</h4>
        </div>
        <p>{readMore ? description : `${description.substring(0, 100)}...`}</p>
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? 'Show less' : 'Read more'}
        </button>
        <button className="delete-btn">Not Interesting</button>
      </footer>
    </article>
  );
};

export default City;

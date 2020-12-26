import React from 'react';
import City from './City';
const Cities = ({ cities, notInterested }) => {
  return (
    <section>
      <div className="title">
        <h2>Cities of Turkey</h2>
        <div className="underline"></div>
      </div>
      {
      cities.map((city) => {
        return <City key={city.id} {...city} notInterested={notInterested}></City>
      })}
    </section>
  );
};

export default Cities;

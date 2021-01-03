import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setalert] = useState(false);
  const bcg = rgb.join(',');
  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bcg})`}}>
      {' '}
    </article>
  );
};

export default SingleColor;

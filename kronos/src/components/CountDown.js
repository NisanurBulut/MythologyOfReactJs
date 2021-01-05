import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStayles = makeStyles((theme) => ({
  counterDown: {},
}));
const CountDown = () => {
  const classes = useStayles();
  const [date, setDate] = useState(() => {
    return moment().add(10, 'hours');
  });
  const [hours, setHours] = useState('00');
  const [minutes, setMinute] = useState('00');
  const [seconds, setSecond] = useState('00');

  let interval = useRef();

  useEffect(() => {
    startCountDown();
    return clearInterval(interval.current);
  }, [date]);

  const startCountDown = () => {
    interval = setInterval(() => {
      const now = moment();
      const difference = date - now;

      const hours = moment.duration(difference).hours();
      const minutes = moment.duration(difference).minutes();
      const seconds = moment.duration(difference).seconds();

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setSecond(seconds);
        setMinute(minutes);
      }
    }, 1000);
  };
  return <div className={classes.counterDown}>
      <div className="">
          <p>{hours}</p>
      </div>
      <div className="">
          <p>{minutes}</p>
      </div>
      <div className="">
          <p>{seconds}</p>
      </div>
  </div>;
};

export default CountDown;

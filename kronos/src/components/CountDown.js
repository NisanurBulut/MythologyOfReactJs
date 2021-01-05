import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStayles = makeStyles((theme) => ({
  counterDown: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color:"white",
    fontSize:22,
    border:"1px solid #fff",
    borderRadius:4,
    backgroundColor:"rgba(0,0,0,0.5)"
  },
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
          <h1>{hours} </h1>
      </div>
      <div className="">
          <h1>:</h1>
      </div>
      <div className="">
          <h1>{minutes} </h1>
      </div>
      <div className="">
          <h1>:</h1>
      </div>
      <div className="">
          <h1>{seconds} </h1>
      </div>
  </div>;
};

export default CountDown;

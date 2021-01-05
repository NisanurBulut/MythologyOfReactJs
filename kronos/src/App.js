import react, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CountDown from './components/CountDown';
import countDownImage from './images/countdown.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${countDownImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: false,
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
     <Container fixed>
        <CountDown></CountDown>
      </Container>
    </div>
  );
};

export default App;

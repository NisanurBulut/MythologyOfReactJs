import react from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CountDown from './components/CountDown';
import countDownImage from './images/countDown.jpg';
import './App.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: flex,
    flexDirection: row,
    alignItems: center,
    justifyContent: center,
    height: '100vh',
    backgroundImage:`url(${countdownImage})`,
    backgroundPosition:center,
    backgroundRepeat:false,
    backgroundSize:cover
  },
}));
const App = () => {
  const classes = useStyles();
  return <div className={classes.container}>
    <Container maxWidth="sm">
      <CountDown></CountDown>
    </Container>
  </div>;
};

export default App;

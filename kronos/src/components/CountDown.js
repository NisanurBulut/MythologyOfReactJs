import React, {useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  moment  from "moment";

const useStayles=makeStyles(theme=>({
counterDown:{

}
}));
const CountDown = () => {
    const classes = useStayles();
    const [date, setDate]= useState(()=>{
        return moment().add(10,"hours");
    })
    const [hours, setHours]=useState("00");
    const [minute, setminute]=useState("00");
    const [second, setSecond]=useState("00");
    let interval = useRef();
    const startCountDown = ()=>{
        interval= setInterval(()=>{
            const now = moment();
            const difference = date-now;

            const hours=moment.duration(difference).hours();
            const minutes=moment.duration(difference).minutes();
            const secons=moment.duration(difference).seconds();
        },1000)
    }
    return (<div className={classes.counterDown}
    ></div>);
}

export default CountDown;
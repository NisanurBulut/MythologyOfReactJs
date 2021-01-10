import "./sass/app.scss";
import TopSection from "./components/top/TopSection";
import BottomSection from "./components/bottom/BottomSection";
import { Component } from "react";
import axios from "axios";

const WEATHER_KEY = "9ffc61c586af6055741b0b43ef59ea69";

class App extends Component  {
  constructor(props){
    super(props)
    this.state = {
      cityName:"London",
      forCastdayas:5
    }
  }
  updateWeather() {
    const { cityName, numForcastDays } = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityName}forecast_days=${numForcastDays}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        console.log(data);
        // this.setState({
        //   isLoading: false,
        //   temp_c: data.current.temp_c,
        //   isDay: data.current.is_day,
        //   text: data.current.condition.text,
        //   iconURL: data.current.condition.icon,
        //   forecastdays: data.forecast.forecastday
        // });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API, ", err);
      });
  }
  componentDidMount() {
    this.updateWeather();
  }

  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection/>
          </div>
          <div className="bottom-section">
            <BottomSection/>
          </div>
        </div>
        </div>
    );
  }
}

export default App;

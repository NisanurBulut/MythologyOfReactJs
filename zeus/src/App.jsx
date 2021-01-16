import './sass/app.scss';
import TopSection from './components/top/TopSection';
import BottomSection from './components/bottom/BottomSection';
import { Component } from 'react';
import axios from 'axios';

const WEATHER_KEY = '9ffc61c586af6055741b0b43ef59ea69';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Osmaniye',
      forCastdayas: 5,
      isLoading: true,
    };
  }
  updateWeather() {
    const { cityName, numForcastDays } = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityName}forecast_days=${numForcastDays}`;
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({
          isLoading: false,
          cityName: `${data.location.name} ${data.location.region} ${data.location.country}`,
          temp_c: data.current.temperature,
          isDay: data.current.is_day,
          text: data.current.weather_descriptions[0],
          iconURL: data.current.weather_icons[0],
          bottomImage:`${data.current.weather_descriptions[0].replace(/ /g, '')}.gif`
        });
      })
      .catch((err) => {
        if (err) console.error('Cannot fetch Weather Data from API, ', err);
      });
  }
  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", data => {
      console.log(data);
      this.setState({ cityName: data }, () => this.updateWeather());
    });
  }

  render() {
    const { isLoading, cityName, location, temp_c, isDay, text, iconURL, bottomImage } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            { isLoading && <h3>Weather is loading</h3>}
            { !isLoading &&
              <TopSection
                location={cityName}
                temp_c={temp_c}
                isDay={isDay}
                text={text}
                iconURL={iconURL}
                eventEmitter={this.props.eventEmitter}
              />
            }
          </div>
          <div className="bottom-section">
            <BottomSection bottomImage={bottomImage}
                eventEmitter={this.props.eventEmitter} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

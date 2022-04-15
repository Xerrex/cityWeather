import React from 'react';
import axios from 'axios';
import './app.scss';
import TopSection from '../top/TopSection';
import BottomSection from '../bottom/BottomSection';

const api_ID = process.env.REACT_APP_API_ID;
const city= process.env.REACT_APP_CITYNAME;
const units = process.env.REACT_APP_UNITS;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        cityName: city,
        units: units,
        isLoading:true
    }
  }

  componentDidMount() {
    const {eventEmitter} = this.props;

    this.getLocationWeather();
    eventEmitter.on("cityChanged", (data)=>{
      this.setState({cityName: data}, ()=>this.getLocationWeather());
    });
  }

  getLocationWeather(){
    const { cityName, units} = this.state;
    const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
    const params = `q=${cityName}&appid=${api_ID}&units=${units}`
    const URL = `${base_api_url}${params}`;

    axios.get(URL)
    .then((res)=>{
      return res.data;
    })
    .then((data)=> {
      const todays_date = data.dt;
      this.getLocationWeatherForecast(data.coord)

      this.setState({
        isLoading:false,
        todays_date: todays_date,
        main_data: data.main,
        weather_data: data.weather[0],
        sys_data: data.sys,
        wind_data: data.wind,
      });
    })
    .catch((error)=>{
      if(error) console.error("Cannot fetch weather data from API", error);
    });
  }


  getLocationWeatherForecast(coord){
    const {lat, lon} = coord
    const base_api_url = "https://api.openweathermap.org/data/2.5/onecall?"
    let coords = `lat=${lat}&lon=${lon}`
    let exclude = "&exclude=minutely,hourly,current,alerts"
    let units = "&units=metric"
    let appid = `&appid=${api_ID}`

    let url = `${base_api_url}${coords}${exclude}${units}${appid}`

    axios.get(url)
    .then((res)=>{
      return res.data
    }).then((data)=>{
      //here is where the works happen
      this.setState({
        daysForecast: data.daily
      })
      
    }).catch((error)=>{
      if(error) console.error("There was a problem fetching forecast data", error);
    }); //end axios

  }

  render(){
    const  { isLoading, todays_date, 
      cityName, main_data, weather_data, 
      sys_data, wind_data, daysForecast }= this.state;

    return(
      <div className="app-container">
        <div className="main-container">
          {isLoading && <h3>Loading Weather ...</h3>}
          {!isLoading &&  
            <div className="top-section">
              <TopSection
                todays_date={todays_date}
                location={cityName}
                main={main_data}
                weather={weather_data}
                sys={sys_data}
                wind={wind_data}
                eventEmitter={this.props.eventEmitter}/>

            </div>}
      
          <div className="bottom-section">
            <BottomSection daysForecast={daysForecast}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
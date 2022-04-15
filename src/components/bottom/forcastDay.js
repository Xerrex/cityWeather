function ForecastDay(props){

    const {forecast} = props;

    const today = new Date(forecast.dt*1000);

    const days=["Sun", "Mon", "Tue","Wed", "Thurs","Fri", "Sat"];
    
    const baseIconURL = "http://openweathermap.org/img/wn/";
    const icon_size = "@2x.png";
    const icon_src = `${baseIconURL}${forecast.weather[0].icon}${icon_size}`;

    return <div className="forecastday-container">
        <div className="image">
            <img src={icon_src} alt="weather icon"/>
        </div>
        <div className="text">
            {days[today.getDay()]}
            <br/>
            {forecast.temp.min}&#176; - {forecast.temp.max}&#176;
            <br/>
            Humdity: {forecast.humidity}%
            <br/>
            {forecast.weather[0].description}
        </div>
    </div>
}

export default ForecastDay
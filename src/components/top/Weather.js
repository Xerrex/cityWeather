
function Weather(props){
    
    const { todays_date, location, temp_c, text, iconURL} = props;
    return(
        <div className="weather-container">
            <div className="header">
                {location} at {todays_date}
            </div>
            <div className="inner-container">
                <div className="image">
                    <img src={iconURL} alt=""/>
                </div>
                <div className="current-weather">{temp_c} &#176;</div>
            </div>
            <div className="footer">{text}</div>
        </div>
    );
}

export default Weather;
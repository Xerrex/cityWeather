
function Weather(props){
    
    const { todays_date, location, temp_c, desc, icon} = props;
    
    const baseIconURL = "http://openweathermap.org/img/wn/";
    const icon_size = "@2x.png";
    const icon_src = `${baseIconURL}${icon}${icon_size}`;
    return(
        <div className="weather-container">
            <div className="header">
                {location}
            </div>
            <div className="inner-container">
                <div className="image">
                    <img src={icon_src} alt=""/>
                </div>
                <div className="current-weather">{temp_c} &#8451;</div>
            </div>
            <div className="footer">{desc} <span>{todays_date}</span></div>
        </div>
    );
}

export default Weather;
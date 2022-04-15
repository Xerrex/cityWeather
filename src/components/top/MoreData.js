export default function MoreData(props){
  const sunrise = props.timehandler(props.sysData.sunrise);
  const sunset = props.timehandler(props.sysData.sunset);
  return(
    <div className="data-container">
      <div>country: {props.sysData.country}
      <div>&#9728; {sunrise} - &#9788; {sunset}</div>
      </div>
      <div>{props.mainData.temp_min}&#8451; - {props.mainData.temp_max}&#8451;</div>
      <div>Feels_like {props.mainData.feels_like} &#8451;</div>
      
      <div>Humidity: {props.mainData.humidity}% </div>
      <div>Atm press: {props.mainData.pressure}Hpa</div>
      <div>Wind:  
        <span> {props.windData.speed} m/s,</span>
        <span> {props.windData.deg}&#176;</span>
      </div>
    </div>
  );
}
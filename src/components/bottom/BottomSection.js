import "./style.scss";
import ForecastDay from './forcastDay';


function BottomSection(props) {

    const {daysForecast} = props
    return (
        <div className="bottom-container">
            <div className="inner-container">
                { daysForecast && daysForecast.map(
                    (dayForecast, index)=>{
                        return <ForecastDay key={index} forecast={dayForecast}/>
                    }
                )}
            </div>
        </div>
    );
}

export default BottomSection;
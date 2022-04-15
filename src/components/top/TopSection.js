import React from "react";
import "./style.scss";
import Weather from "./Weather";
import MoreData from "./MoreData";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false
    };
  }

  toggleIsSelectLocationOpen(){
    this.setState((prevState)=>({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }

  onLocationChange(e){
    this.setState({
        cityName: e.target.value.toUpperCase(),
    });
  }

  onSelectCity(){
    this.setState({isSelectLocationOpen:false});
    const { cityName } = this.state;
    const {eventEmitter} = this.props;
    eventEmitter.emit("cityChanged", cityName);
    
  }

  getDateFromTimestamp(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const full_time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
    return full_time;
  }

  getTimefromTimeStamp(UNIX_timestamp){
    const date = new Date(UNIX_timestamp * 1000);
    const hour = date.getHours();
    const min = date.getMinutes();
    return `${hour}:${min}`;
  }

  render() {
    const { isSelectLocationOpen} = this.state;
    const dateToDay = this.getDateFromTimestamp(this.props.todays_date)
    return (
      <div className="top-container">
        <h2 className="title">Weather</h2>
        
        <div className="middle-section">
          <div className='right-section'>
            <Weather todays_date={dateToDay}
              location={this.props.location}
              temp_c={this.props.main.temp}
              desc={this.props.weather.description}
              icon={this.props.weather.icon}/>
          </div>
          <div className='left-section'>
            <MoreData sysData={this.props.sys} 
              timehandler={this.getTimefromTimeStamp}
              mainData={this.props.main} 
              windData={this.props.wind}/>
          </div>
        </div>
        
        <div className="footer">
          <button className="btn btn-select-location"
              onClick={this.toggleIsSelectLocationOpen.bind(this)}>
              Select Location
            </button>
          <Popup open={isSelectLocationOpen} 
            onClose={this.toggleIsSelectLocationOpen.bind(this)}
            closeOnDocumentClick>
              <div className="my-popup-content">
                <label htmlFor="location-name">City Name</label>
                <input id="city-name"
                  type="text" placeholder="City Name" 
                  onChange={this.onLocationChange.bind(this)}/>

                <button className="btn btn-select-location"
                  onClick={this.onSelectCity.bind(this)}>Select</button>
              </div>
          </Popup>
        </div>
      </div>
    );
  }
}

export default TopSection;

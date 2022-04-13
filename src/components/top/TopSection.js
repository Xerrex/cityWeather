import React from "react";
import "./style.scss";
import Weather from "./Weather";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
    };
  }

  
  render() {
    return (
      <div className="top-container">
        <h2 className="title">Weather</h2>
        <Weather {...this.props}/>
        <Popup trigger={
          <button className="btn btn-select-location">
            Select Location
          </button>
        } position="bottom center">
          <div className="my-popup-content">
            <label htmlFor="location-name">Location Name</label>
            <input id="location-name" type="text" placeholder="City Name"/>
            <button className="btn btn-select-location">Select</button>
          </div>
        </Popup>
      </div>
    );
  }
}

export default TopSection;

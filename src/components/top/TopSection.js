import React from "react";
import "./style.scss";
import Weather from "./Weather";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false //TODO: control popup showing
    };
  }

  toggleIsSelectLocationOpen(){
    this.setState((prevState)=>({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }

  onLocationChange(e){
    this.setState({
        cityName: e.target.value,
    });
  }

  onSelectCity(){
    this.setState({isSelectLocationOpen:false});
    const { cityName } = this.state;
    const {eventEmitter} = this.props;
    eventEmitter.emit("cityChanged", cityName);
    
  }


  render() {
    const { isSelectLocationOpen} = this.state;
    return (
      <div className="top-container">
        <h2 className="title">Weather</h2>
        <Weather {...this.props}/>
        <div>
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

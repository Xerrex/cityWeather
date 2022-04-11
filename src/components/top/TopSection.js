import React from "react";
import "./style.scss";
import Weather from "./Weather";

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
        <button 
          className="btn btn-select-location">
            Select Location
        </button>
      </div>
    );
  }
}

export default TopSection;

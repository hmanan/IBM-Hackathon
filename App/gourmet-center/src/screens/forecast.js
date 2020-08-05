import React, { Component } from "react";

/* STYLES */
import "./forecast.scss";

/* COMPONENTS */
import CarbonHeader from "../components/CarbonHeader";
import ForecastGraph from "../components/ForecastGraph";

/* UTILITIES */
// import api from "../utils/api";

class forecast extends Component {
  render() {
    return (
      <>
        <CarbonHeader />
        <h2 className="greeting-title">Good morning Maria, lets take a look at todays customer forecast...</h2>
        <ForecastGraph/>
        
      </>
    );
  }
}

export default forecast;

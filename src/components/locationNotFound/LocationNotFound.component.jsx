import React from "react";
import './LocationNotFound.styles.css';
import { NotFound } from "../../assets/images";

const LocationNotFound = () => {
  return (<div className="app__location_not_found">
    <img src={NotFound} alt="location not found" />
    <p>Location not found</p>
  </div>)
};

export default LocationNotFound;
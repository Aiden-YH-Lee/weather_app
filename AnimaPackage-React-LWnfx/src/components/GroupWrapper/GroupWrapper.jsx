/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupWrapper = ({
  text = "Today, Sep 15, 5:20 PM",
  icOutlineLocation = "/img/ic-outline-location-on-1.png",
}) => {
  return (
    <div className="group-wrapper">
      <div className="div">
        <p className="yeongheon-lee">
          <span className="text-wrapper">
            Philadelphia, PA
            <br />
          </span>
          <span className="span">
            <br />
          </span>
        </p>
        <p className="today-sep-PM">{text}</p>
      </div>
      <img className="ic-outline-location" alt="Ic outline location" src={icOutlineLocation} />
    </div>
  );
};

GroupWrapper.propTypes = {
  text: PropTypes.string,
  icOutlineLocation: PropTypes.string,
};

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Group = ({ className, helloYeongheonLeeClassName, overlapGroupClassName }) => {
  return (
    <div className={`group ${className}`}>
      <div className={`hello-yeongheon-lee ${helloYeongheonLeeClassName}`}>
        Hello,
        <br />
        Yeongheon Lee
      </div>
      <div className={`overlap-group ${overlapGroupClassName}`} />
    </div>
  );
};

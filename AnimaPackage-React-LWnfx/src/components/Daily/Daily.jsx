/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Group } from "../Group";
import { GroupWrapper } from "../GroupWrapper";
import "./style.css";

export const Daily = ({ className, leftSideClassName }) => {
  return (
    <div className={`daily ${className}`}>
      <div className="frame">
        <div className="frame-2">
          <div className="rectangle" />
        </div>
        <div className="frame-2">
          <div className="rectangle-2" />
          <div className="frame-3">
            <div className="div-2">
              <div className="div-2">
                <div className="overlap">
                  <img className="line" alt="Line" src="/img/line-4.svg" />
                  <div className="group-2">
                    <img className="ph-sun-dim-fill" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-2.svg" />
                    <div className="text-wrapper-2">16°</div>
                    <div className="text-wrapper-3">14°</div>
                    <div className="text-wrapper-4">Sunday</div>
                    <div className="text-wrapper-5">Sunny</div>
                  </div>
                </div>
                <div className="overlap-group-2">
                  <img className="line" alt="Line" src="/img/line-4.svg" />
                  <div className="group-2">
                    <div className="text-wrapper-2">10°</div>
                    <div className="text-wrapper-6">8°</div>
                    <div className="text-wrapper-4">Monday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="overlap-2">
                  <img className="line" alt="Line" src="/img/line-5.svg" />
                  <div className="group-3">
                    <div className="text-wrapper-2">12°</div>
                    <div className="text-wrapper-3">10°</div>
                    <div className="text-wrapper-4">Wednesday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="overlap-3">
                  <img className="line" alt="Line" src="/img/line-6.svg" />
                  <div className="group-4">
                    <img className="ph-sun-dim-fill" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-2.svg" />
                    <div className="text-wrapper-2">15°</div>
                    <div className="text-wrapper-3">10°</div>
                    <div className="text-wrapper-4">Thursday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="group-5">
                  <img className="ph-sun-dim-fill" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-2.svg" />
                  <div className="text-wrapper-2">15°</div>
                  <div className="text-wrapper-3">10°</div>
                  <div className="text-wrapper-4">Today</div>
                  <div className="text-wrapper-7">Sunny</div>
                </div>
              </div>
              <img
                className="bi-cloud-lightning"
                alt="Bi cloud lightning"
                src="/img/bi-cloud-lightning-rain-fill.svg"
              />
              <img className="img" alt="Bi cloud lightning" src="/img/bi-cloud-lightning-rain-fill-1.svg" />
            </div>
            <div className="overlap-4">
              <div className="div-2">
                <div className="overlap-5">
                  <img className="line" alt="Line" src="/img/line-6-1.png" />
                  <div className="group-6">
                    <div className="text-wrapper-8">9°</div>
                    <div className="text-wrapper-6">6°</div>
                    <div className="text-wrapper-4">Saturday</div>
                    <div className="text-wrapper-5">Sunny</div>
                  </div>
                </div>
                <div className="overlap-6">
                  <img className="line-2" alt="Line" src="/img/line-6-1.png" />
                  <div className="group-7">
                    <img className="ph-sun-dim-fill" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-4.png" />
                    <div className="text-wrapper-2">17°</div>
                    <div className="text-wrapper-3">14°</div>
                    <div className="text-wrapper-4">Friday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="overlap-7">
                  <img className="line" alt="Line" src="/img/line-6-1.png" />
                  <div className="group-8">
                    <img className="ph-sun-dim-fill" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-4.png" />
                    <div className="text-wrapper-2">18°</div>
                    <div className="text-wrapper-3">15°</div>
                    <div className="text-wrapper-4">Sunday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="overlap-2">
                  <img className="line" alt="Line" src="/img/line-6-1.png" />
                  <div className="group-3">
                    <div className="text-wrapper-2">12°</div>
                    <div className="text-wrapper-3">10°</div>
                    <div className="text-wrapper-4">Monday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
                <div className="overlap-3">
                  <img className="line" alt="Line" src="/img/line-6-1.png" />
                  <div className="group-4">
                    <div className="text-wrapper-2">15°</div>
                    <div className="text-wrapper-3">10°</div>
                    <div className="text-wrapper-4">Tuesday</div>
                    <div className="text-wrapper-7">Sunny</div>
                  </div>
                </div>
              </div>
              <img
                className="bi-cloud-lightning-2"
                alt="Bi cloud lightning"
                src="/img/bi-cloud-lightning-rain-fill-2.png"
              />
              <img
                className="bi-cloud-lightning-3"
                alt="Bi cloud lightning"
                src="/img/bi-cloud-lightning-rain-fill-3.png"
              />
              <img className="ph-sun-dim-fill-2" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-5.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-2">
          <div className="rectangle-3" />
        </div>
      </div>
      <div className="statusbar-iphone-wrapper">
        <div className="statusbar-iphone">
          <div className={`left-side ${leftSideClassName}`} />
          <div className="right-side">
            <img className="battery" alt="Battery" src="/img/battery.png" />
            <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
            <img className="icon-mobile-signal" alt="Icon mobile signal" src="/img/icon-mobile-signal.svg" />
          </div>
        </div>
      </div>
      <div className="group-2-wrapper">
        <Group
          className="group-instance"
          helloYeongheonLeeClassName="group-2-instance"
          overlapGroupClassName="design-component-instance-node"
        />
      </div>
      <img className="frame-4" alt="Frame" src="/img/frame-4.svg" />
      <div className="group-1-wrapper">
        <GroupWrapper icOutlineLocation="/img/ic-outline-location-on.svg" text="Today, Sep 16, 5:20 PM" />
      </div>
      <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-7.png" />
      <div className="group-9">
        <img className="image" alt="Image" src="/img/image-6.png" />
        <img className="image-2" alt="Image" src="/img/image-4.png" />
        <img className="image-3" alt="Image" src="/img/image-2.png" />
        <div className="text-wrapper-9">Average Temp.</div>
        <div className="overlap-8">
          <div className="text-wrapper-10">Average Rain</div>
          <div className="text-wrapper-11">Wind</div>
          <div className="text-wrapper-12">20%</div>
          <p className="element">
            <span className="text-wrapper-13">4</span>
            <span className="text-wrapper-14">mph</span>
          </p>
        </div>
        <div className="text-wrapper-15">20°</div>
      </div>
      <div className="frame-5">
        <div className="group-10">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-16">9 am</div>
          <div className="text-wrapper-17">18°</div>
        </div>
        <div className="group-11">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-18">10 am</div>
          <div className="text-wrapper-17">20°</div>
        </div>
        <div className="group-11">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-18">11 am</div>
          <div className="text-wrapper-17">21°</div>
        </div>
        <div className="group-11">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-18">12 pm</div>
          <div className="text-wrapper-17">23°</div>
        </div>
        <div className="group-10">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-16">1 pm</div>
          <div className="text-wrapper-17">23°</div>
        </div>
        <div className="group-10">
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-16">2 pm</div>
          <div className="text-wrapper-17">22°</div>
        </div>
        <div className="group-10">
          <div className="text-wrapper-16">3 pm</div>
          <img className="ph-sun-dim-fill-3" alt="Ph sun dim fill" src="/img/ph-sun-dim-fill-12.svg" />
          <div className="text-wrapper-17">21°</div>
        </div>
      </div>
    </div>
  );
};

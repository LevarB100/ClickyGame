import React from "react";
import show from "./images/show.jpg";
import B2F from "./images/B2F.jpg";
import baby1 from "./images/baby1.jpg";
import baby2 from "./images/baby2.jpg";
import badbaby from "./images/badbaby.jpg";
import daydream from "./images/daydream.jpg";
import dosec from "./images/dosec.jpg";
import fuhouse from "./images/fuhouse.jpg";
import intman1 from "./images/intman1.jpg";
import keauna from "./images/keauna.jpg";
import oldppl from "./images/oldppl.jpg";
import swift from "./images/swift.jpg";
import "./Pic.css";

const style = {
  sizing: {
    //width: "100%"
  }
};

function Pics() {
  return (
    <>
      <div
        itemID="1"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={show} alt="show" />
      </div>
      <div
        itemID="2"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={B2F} alt="B2F" />
      </div>
      <div
        itemID="3"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={baby1} alt="baby1" />
      </div>
      <div
        itemID="4"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={baby2} alt="baby2" />
      </div>
      <div
        itemID="5"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={badbaby} alt="badbaby" />
      </div>
      <div
        itemID="6"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={daydream} alt="daydream" />
      </div>
      <div
        itemID="7"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={dosec} alt="dosec" />
      </div>
      <div
        itemID="8"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={fuhouse} alt="fuhouse" />
      </div>
      <div
        itemID="9"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={intman1} alt="intman1" />
      </div>
      <div
        itemID="10"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={keauna} style={style.sizing} alt="keauna" />
      </div>
      <div
        itemID="11"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={oldppl} alt="oldppl" />
      </div>
      <div
        itemID="12"
        className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
      >
        <img src={swift} alt="swift" />
      </div>
    </>
  );
}

export default Pics;

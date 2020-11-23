import React, { Component } from "react";
 import "./Card.css";
class Card extends Component {
  render() {
    return (
      <div>
        <div className="flex-container center">
    <div className="item-1">
        <div className="icon">
            <i className="fa fa-cog"></i>
        </div>
        <p className="subtitle-flex">Configure</p>
        <div className="middle-text">           
            Reliable Data
        </div>
        <div className="footer-text">
            <p>Set up and deploy devices in bulk</p>
        </div>
        <div className="base-wrap">
          <div className="base"></div>
        </div>
    </div>
    <div className="item-2">
        <div className="icon">
            <i className="fa fa-cloud"></i>
        </div>
        <p className="subtitle-flex">Automate</p>
        <div className="middle-text">
            Scitific Analysis           
        </div>
        <div className="footer-text">
            <p>Automatic enrollment of unlimited amount of devices</p>
        </div>
        <div className="base-wrap">
          <div className="base"></div>
        </div>
    </div>
    <div className="item-3">
        <div className="icon">
            <i className="fa fa-shield"></i>
        </div>
        <p className="subtitle-flex">Empower</p>
        <div className="middle-text">
            Tailor made Solutions
        </div>
        <div className="footer-text">
            <p>Access data everywhere, without compromising with mobile security</p>
        </div>
    </div>
</div>

       
    </div>
    );

  }
}
export default Card;

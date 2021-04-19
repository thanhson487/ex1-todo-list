import React, { Component } from "react";
import imgLogo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.scss";
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="containerImage">
          <img src={imgLogo} alt="logo"></img>
        </div>

        <div className="menu__nav">
          <Link className="styleLink" to="/" exact="true">
            Trang chủ
          </Link>
          <Link className="styleLink" to="/todolists">
            Todo List
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;

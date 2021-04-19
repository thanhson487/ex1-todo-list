import React, { Component } from "react";
import loading from "../../assets/loading.gif";
import "./style.scss";
class Loading extends Component {
  render() {
    return <img src={loading} alt="loading"></img>;
  }
}

export default Loading;

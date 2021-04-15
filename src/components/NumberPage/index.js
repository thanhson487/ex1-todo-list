import React, { Component } from "react";
import "./styles.scss";

class NumberPage extends Component {
  directional(numPage) {
    const { loadDataPage } = this.props;
    loadDataPage(numPage);
  }

  renderNumberPage = (numberPage) => {
    let render = [];

    if (numberPage) {
      render = numberPage.map((num) => {
        return (
          <span onClick={() => this.directional(num)} key={num}>
            {num}
          </span>
        );
      });
    }

    return render;
  };
  render() {
    const { numberPage } = this.props;
    return (
      <div className="NumberPageContainer">
        {this.renderNumberPage(numberPage)}
      </div>
    );
  }
}

export default NumberPage;

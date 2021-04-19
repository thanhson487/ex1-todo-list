import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsPage } from "../../actions/taskTodo";

import "./styles.scss";

class NumberPage extends Component {
  handleClickPage = (page) => {
    this.props.actionsPage(page);
  };

  renderPage = () => {
    let render = [];
    let { pageNumber } = this.props.page;
    for (let i = 1; i <= pageNumber; i++) {
      render.push(
        <div
          className="iconPage"
          onClick={() => this.handleClickPage(i)}
          key={i}
        >
          {i}
        </div>
      );
    }
    return render;
  };
  render() {
    return <div className="NumberPageContainer">{this.renderPage()}</div>;
  }
}
const mapDispatchToProps = {
  actionsPage,
};
const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NumberPage);

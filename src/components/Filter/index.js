import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actionFillter } from "../../actions/taskTodo";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: "",
    };
  }

  render() {
    const handleChangeSearch = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    };
    const onSubmitSearch = (e) => {
      e.preventDefault();
      this.props.actionFillter(this.state.keySearch.trim());
    };
    return (
      <div className="container-filter">
        <form onSubmit={(e) => onSubmitSearch(e)}>
          <input
            name="keySearch"
            id="seach"
            className="search"
            value={this.state.keySearch}
            onChange={(e) => handleChangeSearch(e)}
            placeholder="Tìm kiếm"
          ></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  actionFillter,
};

export default connect(null, mapDispatchToProps)(Filter);

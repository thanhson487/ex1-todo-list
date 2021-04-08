import React, { Component } from "react";
import "./style.scss";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFilter: "-1",
    };
  }

  render() {
    const { onChangeFilter } = this.props;
    const onChange = (data) => {
      this.setState({
        valueFilter: data,
      });
      onChangeFilter(data);
    };
    return (
      <div className="container-filter">
        <select
          className="filter"
          name="filter"
          id="filter"
          value={this.state.valueFilter}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="-1">All</option>
          <option value="1">Đã hoàn thành</option>
          <option value="0">Chưa hoàn thành</option>
        </select>
      </div>
    );
  }
}

export default Filter;

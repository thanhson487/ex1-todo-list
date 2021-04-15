import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { deleteItemTodo, onClickItemEdit } from "./../../actions/taskTodo";

class ListTodo extends Component {
  handleDelete = (id) => {
    this.props.deleteItemTodo(id);
  };

  handleEdit = (data) => {
    this.props.onClickItemEdit(data);
  };

  render() {
    const { listItem } = this.props;
    return (
      <ul className="listTodo">
        <li> {listItem.titleTodo}</li>
        <li>
          <i
            className="far fa-trash-alt delete"
            onClick={() => this.handleDelete(listItem.id)}
          />
          <i
            className="fas fa-edit edit"
            onClick={() => this.handleEdit(listItem)}
          />
        </li>
      </ul>
    );
  }
}
const mapDispatchToProps = {
  deleteItemTodo,
  onClickItemEdit,
};

export default connect(null, mapDispatchToProps)(ListTodo);

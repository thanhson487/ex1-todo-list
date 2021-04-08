import React, { Component } from "react";
import "./style.scss";
var classNames = require("classnames");

class ListTodo extends Component {
  render() {
    const { listItem } = this.props;

    const { statusTodo, id } = listItem;
    const { onDeleteItem, onEditItem } = this.props;
    var liClass = classNames({
      status: true,
      "status--success": statusTodo === "1",
      "status--prosser": statusTodo === "0",
    });

    return (
      <ul className="listTodo">
        <li>{listItem.titleTodo}</li>
        <li className={liClass}>
          {statusTodo === "1" ? "Đã hoàn thành" : "Chưa hoàn thành"}
        </li>
        <li>
          <i
            className="far fa-trash-alt delete"
            onClick={() => onDeleteItem(id)}
          />
          <i
            className="fas fa-edit edit"
            onClick={() => onEditItem(listItem)}
          />
        </li>
      </ul>
    );
  }
}

export default ListTodo;

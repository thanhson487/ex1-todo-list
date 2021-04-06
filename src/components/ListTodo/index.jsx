import React from "react";
import "./style.scss";

function ListTodo(props) {
  var classNames = require("classnames");

  const { listItem } = props;
  const { statusTodo } = listItem;
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
        <i className="far fa-trash-alt delete" />
        <i className="fas fa-edit edit" />
      </li>
    </ul>
  );
}

export default ListTodo;

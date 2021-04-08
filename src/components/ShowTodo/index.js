import React, { Component } from "react";
import ListTodo from "./../ListTodo";
import "./style.scss";

class ShowTodo extends Component {
  render() {
    const { arrList, onDeleteItem, onEditItem } = this.props;

    return (
      <div className="showTodo">
        {arrList
          ? arrList.map((listItem, key) => {
              const { id } = listItem;
              return (
                <ListTodo
                  listItem={listItem}
                  onDeleteItem={onDeleteItem}
                  onEditItem={onEditItem}
                  key={id}
                ></ListTodo>
              );
            })
          : ""}
      </div>
    );
  }
}

export default ShowTodo;

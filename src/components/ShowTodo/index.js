import React, { Component } from "react";
import ListTodo from "./../ListTodo";
import { connect } from "react-redux";
import { fetchListTask } from "../../actions/taskTodo";
import "./style.scss";

class ShowTodo extends Component {
  constructor(props) {
    super(props);
    this.props.fetchListTask();
  }

  renderTodoList = (data) => {
    let arr = [];

    const { listTodo } = this.props;

    const arrListNew = listTodo.filter(
      (item) => item.statusTodo === JSON.stringify(data)
    );

    let arrData = arrListNew.map((listItem) => {
      const { id } = listItem;
      return (
        <div key={id} className="aaa">
          <ListTodo listItem={listItem}></ListTodo>
        </div>
      );
    });

    arr.push(arrData);

    return arr;
  };
  render() {
    const { listTodo } = this.props;

    return (
      <>
        <div className="titleTodo">
          <p>Chưa hoàn thành</p>
          <p>Đã hoàn thành</p>
        </div>
        <div className="showTodo">
          {listTodo.length !== 0 ? (
            <>
              <div className="showTodo__left">{this.renderTodoList(0)}</div>
              <div className="showTodo__right">{this.renderTodoList(1)}</div>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchListTask,
};
const mapStateToProps = (state) => {
  return {
    listTodo: state.listTodo,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);

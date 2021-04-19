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

    const { listTodoRender } = this.props;

    const arrListNew = listTodoRender.filter(
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
    return (
      <>
        <div className="titleTodo">
          <p>Chưa hoàn thành</p>
          <p>Đã hoàn thành</p>
        </div>
        <div className="showTodo">
          {this.props.listTodoRender !== null ? (
            this.props.listTodoRender.length !== 0 &&
            this.props.listTodo !== null ? (
              <>
                <div className="showTodo__left">{this.renderTodoList(0)}</div>
                <div className="showTodo__right">{this.renderTodoList(1)}</div>
              </>
            ) : (
              ""
            )
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
    listTodoRender: state.Todo.listTodoRender,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);

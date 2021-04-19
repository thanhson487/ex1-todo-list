import React, { Component } from "react";
import NotFound from "./../../components/NotFound";
import FormTodo from "../../components/FormTodo";
import Filter from "../../components/Filter";
import ShowTodo from "../../components/ShowTodo";
import NumberPage from "../../components/NumberPage";
import AddTodo from "../../components/Add";
import { connect } from "react-redux";
import "./style.scss";
class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrList: [],
      countEdit: 0,
      checkIdEdit: null,
      openForm: false,
    };
  }

  render() {
    const { setForm } = this.props;
    return (
      <div className="container">
        <NotFound />
        {setForm ? <FormTodo /> : null}

        <Filter onSearch={(data) => this.onSearch(data)}></Filter>
        <ShowTodo
          arrList={this.state.arrList}
          onDeleteItem={(id) => this.onDeleteItem(id)}
          onEditItem={(data) => this.onEditItem(data)}
        />
        <NumberPage
          numberPage={this.state.pageNumbers}
          loadDataPage={this.loadDataPage}
        ></NumberPage>

        <AddTodo
          onAddTodo={this.onAddTodo}
          openForm={this.state.openForm}
        ></AddTodo>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    setForm: state.setForm,
  };
};
export default connect(mapStateToProps, null)(TodoLists);

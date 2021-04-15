import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import AddTodo from "./components/Add";
import Filter from "./components/Filter";
import FormTodo from "./components/FormTodo";
import NotFound from "./components/NotFound";
import NumberPage from "./components/NumberPage";
import ShowTodo from "./components/ShowTodo";

class App extends Component {
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
      <div className="App">
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    setForm: state.setForm,
  };
};
export default connect(mapStateToProps, null)(App);

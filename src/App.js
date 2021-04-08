import "./App.scss";
import FormTodo from "./components/FormTodo";
import ShowTodo from "./components/ShowTodo";
import Filter from "./components/Filter";
import React, { Component } from "react";
import guidGenerator from "./common";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrList: [],
      itemEdit: {
        id: "",
        titleTodo: "",
        statusTodo: "1",
      },
      filter: "-1",
    };
  }

  componentDidMount() {
    const getLocal = JSON.parse(localStorage.getItem("arrayListTodo"));
    if (getLocal) {
      this.setState({
        arrList: getLocal,
      });
    } else {
      this.setState({
        arrList: [],
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("arrayListTodo", JSON.stringify(this.state.arrList));
  }

  dataShare = (dataForm) => {
    const id = guidGenerator();
    const arrListNew = [...this.state.arrList];
    arrListNew.push({
      ...dataForm,
      id,
    });
    this.setState({
      arrList: [...arrListNew],
    });
  };

  onDeleteItem = (id) => {
    let arrListNew = [...this.state.arrList];
    const index = arrListNew.findIndex((arr) => arr.id === id);

    if (index !== -1) {
      arrListNew.splice(index, 1);
      this.setState({
        arrList: arrListNew,
      });
    }
  };

  onEditItem = (data) => {
    this.setState({ itemEdit: data });
  };

  actionEditItem = (data) => {
    let arrListNew = [...this.state.arrList];
    const index = arrListNew.findIndex((arr) => arr.id === data.id);
    if (index !== -1) {
      arrListNew[index] = {
        id: data.id,
        titleTodo: data.titleTodo,
        statusTodo: data.statusTodo,
      };
      this.setState({
        arrList: arrListNew,
        itemEdit: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
    }
  };
  setFormDefault = () => {
    this.setState({
      itemEdit: {
        id: "",
        titleTodo: "",
        statusTodo: "0",
      },
    });
  };
  onChangeFilter = (data) => {
    this.setState({
      filter: data,
    });
  };

  render() {
    let { arrList } = this.state;
    console.log(this.state.filter);

    if (this.state.filter === "-1") {
      arrList = arrList.filter((value) => {
        return value;
      });
    }
    if (this.state.filter === "1") {
      arrList = arrList.filter((value) => {
        return value.statusTodo === "1";
      });
    }
    if (this.state.filter === "0") {
      arrList = arrList.filter((value) => {
        return value.statusTodo === "0";
      });
    }
    return (
      <div className="App">
        <div className="container">
          <FormTodo
            dataShare={(data) => this.dataShare(data)}
            itemEdit={this.state.itemEdit}
            actionEditItem={(data) => this.actionEditItem(data)}
            setFormDefault={() => this.setFormDefault()}
          />
          <Filter onChangeFilter={(data) => this.onChangeFilter(data)}>
            {" "}
          </Filter>
          <ShowTodo
            arrList={arrList}
            onDeleteItem={(id) => this.onDeleteItem(id)}
            onEditItem={(data) => this.onEditItem(data)}
          />
        </div>
      </div>
    );
  }
}

export default App;

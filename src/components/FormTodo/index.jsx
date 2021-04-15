import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { onCloseForm, actionEditItem, addData } from "./../../actions/taskTodo";

class FormTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataForm: {
        id: "",
        titleTodo: "",
        statusTodo: "0",
      },
    };
  }

  componentDidMount() {
    const { dataForm } = this.props;

    if (dataForm.id !== "") {
      this.setState({
        dataForm: {
          id: dataForm.id,
          statusTodo: dataForm.statusTodo,
          titleTodo: dataForm.titleTodo,
        },
      });
    } else {
      this.setState({
        dataForm: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
    }
  }

  render() {
    const { dataForm } = this.props;

    const handleChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        dataForm: {
          ...this.state.dataForm,
          [name]: value,
        },
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dataForm.id !== ""
        ? this.props.actionEditItem(this.state.dataForm)
        : this.props.addData(this.state.dataForm);

      this.setState({
        dataForm: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
      this.props.onCloseForm();
    };

    const onClose = (e) => {
      e.preventDefault();
      this.setState({
        dataForm: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
      this.props.onCloseForm();
    };

    return (
      <div className="formTodo">
        <form className="formTodo__form" onSubmit={(e) => handleSubmit(e)}>
          <p className="formTodo__title">
            {this.state.dataForm.id ? "Cập nhật" : "Thêm mới"}
          </p>
          <div className="form-group">
            <label htmlFor="titleTodo" className="form-group__title">
              Tên công việc
            </label>
            <input
              name="titleTodo"
              type="text"
              id="titleTodo"
              value={this.state.dataForm.titleTodo}
              className="form-group__value"
              onChange={(e) => handleChange(e)}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="statusTodo" className="form-group__title">
              Trạng thái
            </label>
            <select
              name="statusTodo"
              id="statusTodo"
              className="form-group__value"
              onChange={(e) => handleChange(e)}
              value={this.state.dataForm.statusTodo}
            >
              <option value="0">Chưa hoàn thành</option>
              <option value="1">Đã hoàn thành</option>
            </select>
          </div>
          <div className="btn-group">
            <button type="submit" className="btn">
              {this.state.dataForm.id ? "Cập nhật" : "Thêm mới"}
            </button>

            <button type="buton" className="btn" onClick={(e) => onClose(e)}>
              Huỷ
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataForm: state.dataForm,
  };
};
const mapDispatchToProps = {
  onCloseForm,
  addData,
  actionEditItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormTodo);

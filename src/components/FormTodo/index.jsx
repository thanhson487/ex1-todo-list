import React, { Component } from "react";
import "./style.scss";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.itemEdit) {
      if (nextProps.itemEdit.id !== "") {
        this.setState({
          dataForm: {
            id: nextProps.itemEdit.id,
            statusTodo: nextProps.itemEdit.statusTodo,
            titleTodo: nextProps.itemEdit.titleTodo,
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
  }

  render() {
    const { dataShare, itemEdit, actionEditItem, setFormDefault } = this.props;
    console.log(itemEdit);
    const { id } = itemEdit;

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
      id !== ""
        ? actionEditItem(this.state.dataForm)
        : dataShare(this.state.dataForm);

      this.setState({
        dataForm: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
    };

    const onClose = (e) => {
      e.preventDefault();
      setFormDefault();
      this.setState({
        dataForm: {
          id: "",
          titleTodo: "",
          statusTodo: "0",
        },
      });
    };

    return (
      <div className="formTodo">
        <p className="formTodo__title">
          {this.state.dataForm.id === "" ? "Thêm mới" : "Cập nhật"}
        </p>
        <form className="formTodo__form" onSubmit={(e) => handleSubmit(e)}>
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

export default FormTodo;

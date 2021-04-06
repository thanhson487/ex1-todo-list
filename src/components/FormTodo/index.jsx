import React, { useState } from "react";
import "./style.scss";

function FormTodo(props) {
  const { dataShare } = props;
  const [dataForm, setDataForm] = useState({
    titleTodo: "",
    statusTodo: "1",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataShare(dataForm);
    setDataForm({
      titleTodo: "",
      statusTodo: "0",
    });
  };
  return (
    <div className="formTodo">
      <p className="formTodo__title">Thêm công việc</p>
      <form className="formTodo__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titleTodo" className="form-group__title">
            Tên công việc
          </label>
          <input
            name="titleTodo"
            type="text"
            id="titleTodo"
            value={dataForm.titleTodo}
            className="form-group__value"
            onChange={handleChange}
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
            onChange={handleChange}
            value={dataForm.statusTodo}
          >
            <option value="0">Chưa hoàn thành</option>
            <option value="1">Đã hoàn thành</option>
          </select>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn">
            Thêm mới
          </button>
          <button className="btn">Huỷ</button>
        </div>
      </form>
    </div>
  );
}

export default FormTodo;

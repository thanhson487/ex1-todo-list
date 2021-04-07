import React, { useState, useEffect } from "react";
import "./style.scss";

function FormTodo(props) {
  const { dataShare, itemEdit, actionEditItem, setFormDefault } = props;
  const { titleTodo, statusTodo, id } = itemEdit;

  const [dataForm, setDataForm] = useState({
    id: "",
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

  useEffect(() => {
    if (id !== "") {
      const setData = () => {
        setDataForm({
          id,
          statusTodo,
          titleTodo,
        });
      };
      setData();
    } else {
      setDataForm({
        id: "",
        titleTodo: "",
        statusTodo: "0",
      });
    }
  }, [itemEdit, id, statusTodo, titleTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id !== "" ? actionEditItem(dataForm) : dataShare(dataForm);

    setDataForm({
      id: "",
      titleTodo: "",
      statusTodo: "0",
    });
  };

  const onClose = (e) => {
    e.preventDefault();
    setFormDefault();
    setDataForm({
      id: "",
      titleTodo: "",
      statusTodo: "0",
    });
  };

  return (
    <div className="formTodo">
      <p className="formTodo__title">
        {" "}
        {dataForm.id === "" ? "Thêm mới" : "Cập nhập"}
      </p>
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
            onChange={handleChange}
            value={dataForm.statusTodo}
          >
            <option value="0">Chưa hoàn thành</option>
            <option value="1">Đã hoàn thành</option>
          </select>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn">
            {dataForm.id === "" ? "Thêm mới" : "Cập nhập"}
          </button>

          <button type="buton" className="btn" onClick={onClose}>
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormTodo;

import "./App.scss";
import FormTodo from "./components/FormTodo";
import ShowTodo from "./components/ShowTodo";
import React, { useEffect, useState } from "react";
import guidGenerator from "./common";
function App() {
  const getLocal = JSON.parse(localStorage.getItem("arrayListTodo"));
  const [arrList, setArrList] = useState(getLocal || []);

  const [itemEdit, setItemEdit] = useState({
    id: "",
    titleTodo: "",
    statusTodo: "1",
  });

  useEffect(() => {
    localStorage.setItem("arrayListTodo", JSON.stringify(arrList));
  }, [arrList]);

  const dataShare = (dataForm) => {
    const id = guidGenerator();
    const arrListNew = [...arrList];
    arrListNew.push({
      ...dataForm,
      id,
    });

    setArrList([...arrListNew]);
  };

  const onDeleteItem = (id) => {
    let arrListNew = [...arrList];
    const index = arrListNew.findIndex((arr) => arr.id === id);

    if (index !== -1) {
      arrListNew.splice(index, 1);
      setArrList(arrListNew);
    }
  };

  const onEditItem = (data) => {
    setItemEdit(data);
  };

  const actionEditItem = (data) => {
    let arrListNew = [...arrList];
    const index = arrListNew.findIndex((arr) => arr.id === data.id);
    if (index !== -1) {
      arrListNew[index] = {
        id: data.id,
        titleTodo: data.titleTodo,
        statusTodo: data.statusTodo,
      };
      setArrList(arrListNew);
      setItemEdit({
        id: "",
        titleTodo: "",
        statusTodo: "1",
      });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <FormTodo
          dataShare={dataShare}
          itemEdit={itemEdit}
          actionEditItem={actionEditItem}
        />
        <ShowTodo
          arrList={arrList}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      </div>
    </div>
  );
}

export default App;

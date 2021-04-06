import nextId from "react-id-generator";
import "./App.scss";
import FormTodo from "./components/FormTodo";
import ShowTodo from "./components/ShowTodo";
import React, { useState } from "react";
function App() {
  const getLocal = JSON.parse(localStorage.getItem("arrayListTodo"));
  console.log(getLocal);

  const [arrList, setArrList] = useState(getLocal || []);

  const dataShare = (dataForm) => {
    const id = nextId();
    const arrListNew = [...arrList];
    arrListNew.push({
      ...dataForm,
      id,
    });

    localStorage.setItem("arrayListTodo", JSON.stringify(arrListNew));

    setArrList([...arrListNew]);
  };

  return (
    <div className="App">
      <div className="container">
        <FormTodo dataShare={dataShare} />
        <ShowTodo arrList={arrList} />
      </div>
    </div>
  );
}

export default App;

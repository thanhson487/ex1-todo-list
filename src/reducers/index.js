import { combineReducers } from "redux";
import listTodo from "./listTodo";
import setForm from "./setForm";
import dataForm from "./dataGetForm";
import errorServer from "./errorServer";
const rootReducer = combineReducers({
  listTodo,
  setForm,
  dataForm,
  errorServer,
});
export default rootReducer;

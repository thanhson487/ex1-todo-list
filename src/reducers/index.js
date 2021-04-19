import { combineReducers } from "redux";
import Todo from "./Todo";
import setForm from "./setForm";
import dataForm from "./dataGetForm";
import errorServer from "./errorServer";
import page from "./page";
const rootReducer = combineReducers({
  Todo,
  setForm,
  dataForm,
  errorServer,
  page,
});
export default rootReducer;

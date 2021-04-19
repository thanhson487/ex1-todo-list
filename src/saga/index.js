import { call, put, takeLatest, select } from "redux-saga/effects";
import * as actionTodos from "./../constants/listTodo";
import {
  getList,
  getDeleteTodoItem,
  addDataTodos,
  updateTodoItem,
  getFillterTodo,
} from "./../api/todos";
import {
  fetchListTaskSuccess,
  fetchListTaskFalse,
  addDataSuccess,
  addDataFalse,
  statusEditDataSuccess,
  statusEditDataFalse,
  actionFillterSuccess,
  actionFillterFalse,
  fetchListRenderSuccess,
} from "./../actions/taskTodo";

function* fetchTodo() {
  try {
    const data = yield call(getList);
    yield put(fetchListTaskSuccess(data));

    const dataPage = yield select((state) => state.page);

    yield put(fetchListRenderSuccess(dataPage));
  } catch {
    yield put(fetchListTaskFalse());
  }
}
function* deleteTodoItem({ payload }) {
  const id = payload;
  yield call(getDeleteTodoItem, id);

  const data = yield call(getList);
  yield put(fetchListTaskSuccess(data));

  const dataPage = yield select((state) => state.page);

  yield put(fetchListRenderSuccess(dataPage));
}

function* actionAddData({ payload }) {
  const data = payload;
  try {
    const res = yield call(addDataTodos, data);
    yield put(addDataSuccess(res));

    const data1 = yield call(getList);
    yield put(fetchListTaskSuccess(data1));

    const dataPage = yield select((state) => state.page);

    yield put(fetchListRenderSuccess(dataPage));
  } catch {
    yield put(addDataFalse());
  }
}
function* actionEditItem({ payload }) {
  const data = payload;
  try {
    const res = yield call(updateTodoItem, data);
    yield put(statusEditDataSuccess(res));
  } catch {
    // yield put(statusEditDataFalse());

    yield put(statusEditDataFalse());
  }
}
function* actionFillterData({ payload }) {
  const keyFillter = payload;
  try {
    const res = yield call(getFillterTodo, keyFillter);
    yield put(actionFillterSuccess(res));
  } catch {
    yield put(actionFillterFalse());
  }
}
function* actionPage() {
  const dataPage = yield select((state) => state.page);

  yield put(fetchListRenderSuccess(dataPage));
}
function* rootSaga() {
  yield takeLatest(actionTodos.FETCH_TODO, fetchTodo);
  yield takeLatest(actionTodos.DELETE_TODO_ITEMS, deleteTodoItem);
  yield takeLatest(actionTodos.ADD_DATA, actionAddData);
  yield takeLatest(actionTodos.EDIT_DATA, actionEditItem);
  yield takeLatest(actionTodos.ACTION_FILLTER, actionFillterData);
  yield takeLatest(actionTodos.ACTION_PAGE, actionPage);
}
export default rootSaga;

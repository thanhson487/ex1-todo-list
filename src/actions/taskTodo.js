import * as actionTodos from "./../constants/listTodo";

export const fetchListTask = () => {
  return {
    type: actionTodos.FETCH_TODO,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: actionTodos.FETCH_TODO_SUCCESS,
    payload: data,
  };
};
export const fetchListTaskFalse = () => {
  return {
    type: actionTodos.FETCH_TODO_FALSE,
  };
};
export const fetchListRender = (data) => {
  return {
    type: actionTodos.FETCH_LIST_RENDER,
  };
};

export const fetchListRenderSuccess = (data) => {
  return {
    type: actionTodos.FETCH_LIST_RENDER_SUCCESS,
    payload: data,
  };
};

export const addData = (data) => {
  return {
    type: actionTodos.ADD_DATA,
    payload: data,
  };
};
export const addDataSuccess = (data) => {
  return {
    type: actionTodos.ADD_DATA_SUCCESS,
    payload: data,
  };
};
export const addDataFalse = () => {
  return { type: actionTodos.ADD_DATA_FALSE };
};
export const onClickItemEdit = (data) => {
  return {
    type: actionTodos.ON_CLICK_EDIT_ITEM,
    payload: data,
  };
};
export const actionEditItem = (data) => {
  return {
    type: actionTodos.EDIT_DATA,
    payload: data,
  };
};
export const statusEditDataSuccess = (data) => {
  return {
    type: actionTodos.STATUS_EDIT_DATA_SUCCESS,
    payload: data,
  };
};
export const statusEditDataFalse = (data) => {
  return {
    type: actionTodos.STATUS_EDIT_DATA_FALSE,
    payload: data,
  };
};

export const deleteItemTodo = (data) => {
  return {
    type: actionTodos.DELETE_TODO_ITEMS,
    payload: data,
  };
};
export const actionFillter = (data) => {
  return {
    type: actionTodos.ACTION_FILLTER,
    payload: data,
  };
};
export const actionFillterSuccess = (data) => {
  return {
    type: actionTodos.ACTION_FILLTER_SUCCESS,
    payload: data,
  };
};
export const actionFillterFalse = () => {
  return {
    type: actionTodos.ACTION_FILLTER_FALSE,
  };
};
export const onOpenForm = () => {
  return {
    type: actionTodos.ON_OPEN_FORM,
  };
};
export const onCloseForm = () => {
  return {
    type: actionTodos.ON_CLOSE_FORM,
  };
};
export const actionsPage = (data) => {
  return {
    type: actionTodos.ACTION_PAGE,
    payload: data,
  };
};
export const renderPage = () => {
  return {
    type: actionTodos.RENDER_PAGE,
  };
};

export const getPageSuccess = (data) => {
  return {
    type: actionTodos.GET_PAGE_SUCCESS,
    payload: data,
  };
};

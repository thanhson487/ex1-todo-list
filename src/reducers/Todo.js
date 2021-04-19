import * as types from "../constants/listTodo";
const initialState = {
  listTodo: null,
  listTodoRender: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODO_SUCCESS: {
      const listTodo = action.payload;
      return { ...state, listTodo: listTodo };
    }

    case types.FETCH_LIST_RENDER_SUCCESS: {
      const data = action.payload;
      const { currentPage, newsPerPage } = data;
      const indexOfLastNews = currentPage * newsPerPage;
      const indexOfFirstNews = indexOfLastNews - newsPerPage;
      const listRender = state.listTodo.slice(
        indexOfFirstNews,
        indexOfLastNews
      );

      return {
        ...state,
        listTodoRender: listRender,
      };
    }
    case types.DELETE_TODO_ITEMS: {
      const id = action.payload;
      let arrListNew = [...state.listTodoRender];
      const index = arrListNew.findIndex((arr) => arr.id === id);
      if (index !== -1) {
        arrListNew.splice(index, 1);
      }
      return {
        ...state,
        listTodoRender: arrListNew,
      };
    }
    case types.ADD_DATA_SUCCESS: {
      const data = action.payload;
      const listTodoNew = [...state.listTodo];
      listTodoNew.push(data);
      return {
        ...state,
        listTodo: listTodoNew,
      };
    }
    case types.STATUS_EDIT_DATA_SUCCESS: {
      const data = action.payload;
      const arrListNew = [...state];
      const index = arrListNew.findIndex((arr) => arr.id === data.id);

      arrListNew[index] = {
        id: data.id,
        titleTodo: data.titleTodo,
        statusTodo: data.statusTodo,
      };
      return [...arrListNew];
    }
    case types.ACTION_FILLTER_SUCCESS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        listTodoRender: data,
      };
    }
    default:
      return state;
  }
};
export default reducer;

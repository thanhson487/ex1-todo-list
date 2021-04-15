import * as types from "./../constants/listTodo";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODO_SUCCESS: {
      const listTodo = action.payload;

      return [...state, ...listTodo];
    }
    case types.DELETE_TODO_ITEMS: {
      const id = action.payload;
      let arrListNew = [...state];
      const index = arrListNew.findIndex((arr) => arr.id === id);
      if (index !== -1) {
        arrListNew.splice(index, 1);
      }
      return [...arrListNew];
    }
    case types.ADD_DATA_SUCCESS: {
      const data = action.payload;

      return [...state, data];
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
      return [...data];
    }
    default:
      return state;
  }
};
export default reducer;

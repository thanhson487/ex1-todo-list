import * as types from "./../constants/listTodo";
const initialState = {
  id: "",
  titleTodo: "",
  statusTodo: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_CLICK_EDIT_ITEM: {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    }
    case types.STATUS_EDIT_DATA_SUCCESS: {
      return {
        ...state,
        id: "",
        titleTodo: "",
        statusTodo: "",
      };
    }
    case types.ON_CLOSE_FORM: {
      return {
        id: "",
        titleTodo: "",
        statusTodo: "",
      };
    }
    default:
      return state;
  }
};
export default reducer;

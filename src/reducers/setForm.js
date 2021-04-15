import * as types from "./../constants/listTodo";
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_OPEN_FORM: {
      return true;
    }
    case types.ON_CLOSE_FORM: {
      return false;
    }
    case types.ON_CLICK_EDIT_ITEM: {
      return true;
    }
    default:
      return state;
  }
};
export default reducer;

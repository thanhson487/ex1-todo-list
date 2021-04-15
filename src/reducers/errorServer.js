import * as types from "./../constants/listTodo";
const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STATUS_EDIT_DATA_FALSE: {
      alert("Lỗi server, không thể sửa");
      return state;
    }
    case types.FETCH_TODO_FALSE: {
      alert("Lỗi server, reload lại trang");
      return state;
    }
    case types.ADD_DATA_FALSE: {
      alert("Lỗi server, không thể thêm");
      return state;
    }
    case types.ACTION_FILLTER_FALSE: {
      alert("Lỗi server, không thể thêm");
      return state;
    }
    default:
      return state;
  }
};
export default reducer;

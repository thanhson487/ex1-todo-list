import * as types from "../constants/listTodo";
const initialState = {
  currentPage: 1,
  newsPerPage: 3,
  pageNumber: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TODO_SUCCESS: {
      const data = action.payload;
      state.pageNumber = Math.ceil(data.length / state.newsPerPage);
      return {
        ...state,
        pageNumber: state.pageNumber,
      };
    }
    case types.ACTION_PAGE: {
      const data = action.payload;

      return {
        ...state,
        currentPage: data,
      };
    }
    default:
      return state;
  }
};
export default reducer;

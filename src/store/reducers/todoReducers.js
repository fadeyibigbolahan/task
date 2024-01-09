const initialState = {
  data: "",
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS_SUCCESS":
      return {
        data: action.data,
      };
    case "CREATE_TODO_SUCCESS":
      return {
        data: [action.data, ...state.data],
      };
    case "DELETE_TODO_SUCCESS":
      const oldState = state.data.filter((item) => item.id !== action.data.id);
      return {
        data: oldState,
      };
    case "UPDATE_TODO_SUCCESS":
      return {
        data: state.data.map((item) =>
          item.id == action.data.id ? action.data : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducers;

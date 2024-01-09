import axios from "axios";

// Creating task function
export const createTodo = (post) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "CREATE_TODO_SUCCESS",
      data: post,
    });
  };
};

// Getting task function
export const getTodo = () => {
  return async (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        dispatch({
          type: "GET_TODOS_SUCCESS",
          data: response.data,
        });
      })
      .catch((error) => {
        console.log("timeline from actionn", error);
        dispatch({
          type: "GET_TODOS_FAILURE",
          data: error,
        });
      });
  };
};

// deleting task function
export const deleteTodo = (post) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "DELETE_TODO_SUCCESS",
      data: post,
    });
  };
};

// updating task function
export const updateTodo = (post) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "UPDATE_TODO_SUCCESS",
      data: post,
    });
  };
};

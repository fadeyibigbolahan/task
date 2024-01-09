import React, { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { getTodo, deleteTodo, updateTodo } from "../store/action/todoActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createTodo } from "../store/action/todoActions";
import { Link } from "react-router-dom";

const Home = () => {
  const todo = useSelector((state) => state.todo);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    completed: "true",
  });
  const [editTask, setEditTask] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [viewModal, setViewModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  useEffect(() => {
    setTasks((prev) => [...todo?.data, ...prev]);
  }, [todo]);

  const addTask = () => {
    if (newTask.title.trim() !== "" && newTask.completed.trim() !== "") {
      dispatch(createTodo(newTask));
      setNewTask({ title: "", description: "", completed: "true" });
    }
  };

  const deleteTask = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const editTaskHandler = (taskId) => {
    const desiredObject = tasks[taskId];
    console.log("desire", desiredObject);
    setEditTask(desiredObject);
    setNewTask({
      id: desiredObject.id,
      title: desiredObject.title,
      description: desiredObject.description,
      completed: desiredObject.completed,
    });
  };

  const updateTask = () => {
    dispatch(updateTodo(newTask));
  };

  const cancelEdit = () => {
    setEditTask(null);
    setNewTask({ id: uuidv4(), title: "", description: "", completed: "true" });
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      <div className="flex h-14 justify-between items-center bg-blue-800 w-full p-2">
        <h2 className="text-white font-bold md:text-xl">
          Task Management System
        </h2>
        <Link to="/" className="flex justify-center items-center">
          <p className="text-white mr-2">Gbolahan</p>
          <div className="h-10 w-10 bg-white rounded-full"></div>
        </Link>
      </div>
      <div className="flex flex-col md:w-2/3 w-full p-4 bg-white">
        <div className="w-full border border-gray-200 rounded-sm p-2">
          <div className="flex flex-row justify-center items-center">
            <p className="text-lg font-semibold">Add Task</p>
          </div>
          <form className="flex flex-col w-full" action="">
            <label for="task-title">Title:</label>
            <div className="w-full border border-gray-200 rounded-sm">
              <input
                type="text"
                id="task-title"
                placeholder="Enter task title"
                required
                className="w-full p-2"
                value={newTask.title}
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />
            </div>
            <label for="task-description">Description:</label>
            <div className="w-full border border-gray-200 rounded-sm">
              <input
                type="text"
                id="task-description"
                placeholder="Enter task description"
                required
                className="w-full p-2"
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
              />
            </div>
            <label className="my-2" for="task-status">
              Completed:
            </label>
            <select
              className="w-full border border-gray-200 rounded-sm p-2"
              id="task-status"
              required
              value={newTask.completed}
              onChange={(e) =>
                setNewTask({ ...newTask, completed: e.target.value })
              }
            >
              {/* <option value="todo">To-Do</option> */}
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </form>
          {editTask ? (
            <div className="flex flex-row justify-center items-center my-4">
              <button
                onClick={updateTask}
                className="bg-blue-500 text-white p-2 rounded mr-2 w-1/2"
              >
                Update
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-500 text-white p-2 rounded w-1/2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="w-full rounded-lg flex justify-center items-center bg-blue-600 h-10 text-white hover:bg-blue-800 my-2"
              type="button"
              id="add-button"
              onClick={addTask}
            >
              Add Task
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full p-4 bg-white">
        {tasks?.length > 0 && (
          <ul className="flex flex-col md:w-2/3 w-full">
            {tasks?.map((task, index) => (
              <li
                className="flex w-full flex-row justify-between items-center bg-gray-50 rounded-lg p-1 my-2"
                key={index}
              >
                <div className="flex flex-col mr-2">
                  <h1 className="text-lg font-bold">{task.title}</h1>
                  <h1 className="font-semibold my-px">
                    {task.description ? task.description : "Random description"}
                  </h1>
                  <div className="w-[150px]">
                    {task.completed ? (
                      <p className="flex justify-center items-center rounded-md bg-green-400">
                        Completed
                      </p>
                    ) : (
                      <p className="flex justify-center items-center rounded-md bg-gray-400">
                        Not completed
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex">
                  <div className="flex justify-between">
                    <button
                      className="flex justify-center items-center p-2 rounded-lg bg-red-700"
                      onClick={() => deleteTask(task)}
                    >
                      <AiFillDelete fontSize={14} color="white" />
                      <p className="hidden md:flex ml-1 text-white text-xs">
                        Delete
                      </p>
                    </button>
                    <button
                      className="flex justify-center items-center p-2 rounded-lg bg-blue-700 mx-1"
                      onClick={() => editTaskHandler(index)}
                    >
                      <AiFillEdit fontSize={14} color="white" />
                      <p className="hidden md:flex ml-1 text-white text-xs">
                        Edit
                      </p>
                    </button>
                    <button
                      className="flex justify-center items-center p-2 rounded-lg bg-green-700 mx-1"
                      onClick={() => {
                        setCurrentTask(task);
                        setViewModal(true);
                      }}
                    >
                      <FiEye fontSize={14} color="white" />
                      <p className="hidden md:flex ml-1 text-white text-xs">
                        View
                      </p>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={`${
          viewModal ? "flex" : "hidden"
        } justify-center items-center fixed bg-[#00000050] w-full h-full p-4`}
      >
        <div className="flex flex-col justify-start md:w-2/5 w-full rounded-lg h-[500px] bg-white p-2">
          <div className="w-full flex justify-end">
            <button
              onClick={() => {
                setViewModal(false);
              }}
              className="p-[2px] border border-gray-300 rounded-full"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center h-1/2 p-4">
            <h1 className="text-lg font-bold">{currentTask?.title}</h1>
            <h1 className="text-lg font-bold">{currentTask?.description}</h1>
            <div className="w-1/2">
              {currentTask?.completed ? (
                <p className="flex justify-center items-center rounded-md bg-green-400 p-1">
                  Completed
                </p>
              ) : (
                <p className="flex justify-center items-center rounded-md bg-gray-400 p-1">
                  Not completed
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

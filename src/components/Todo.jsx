import React from "react";
import "./Todo.css";
import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { useEffect } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2 className="date-time">{dateTime}</h2>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                value={inputValue}
                autoComplete="off"
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <li key={index} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">
                    <MdCheck />
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(curTask)}
                    className="delete-btn"
                  >
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearTodoData}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;

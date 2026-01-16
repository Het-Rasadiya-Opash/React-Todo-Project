import "./Todo.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import TodoClearAll from "./TodoClearAll";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatch = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatch) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrdList">
          <ul>
            {task.map((curTask) => {
              return (
                <TodoList
                  key={curTask.id}
                  data={curTask.content}
                  checked={curTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </section>
        <TodoClearAll onHandleClearAllTodo={handleClearTodoData} />
      </section>
    </>
  );
};

export default Todo;

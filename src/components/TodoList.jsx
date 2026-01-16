import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({
  data,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <>
      <li className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button onClick={() => onHandleDeleteTodo(data)} className="delete-btn">
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};

export default TodoList;

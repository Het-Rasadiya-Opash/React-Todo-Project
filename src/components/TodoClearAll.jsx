import React from "react";

const TodoClearAll = ({ onHandleClearAllTodo }) => {
  return (
    <>
      <section>
        <button className="clear-btn" onClick={onHandleClearAllTodo}>
          Clear All
        </button>
      </section>
    </>
  );
};

export default TodoClearAll;

const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
  const rowTodos = localStorage.getItem(todoKey);
  if (!rowTodos) return [];
  return JSON.parse(rowTodos);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};

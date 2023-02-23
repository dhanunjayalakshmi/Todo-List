import React from "react";

const TodoForm = ({ todo, setTodo, handleSubmit, editId }) => {
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">{editId ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default TodoForm;

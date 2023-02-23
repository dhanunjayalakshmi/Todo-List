import React from "react";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div>
      <ul className="allTodos">
        {todos.map((item) => (
          <li className="singleTodo" key={item.id}>
            <span className="todoText">{item.todo}</span>
            <div className="buttons">
              <button onClick={() => handleEdit(item.id)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

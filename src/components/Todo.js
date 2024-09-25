import React from "react";

const Todo = ({ todo, setTodo, value, setValue }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setTodo([...todo, value]);
        }}
      >
        Add Skill
      </button>
      <ul>
        {todo.length > 0 &&
          todo.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Todo;

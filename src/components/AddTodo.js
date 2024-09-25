import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <h1>My todos</h1>
      <div>
        {todo.map((item, ind) => {
          return <p key={ind}>{item}</p>;
        })}
      </div>
      <button onClick={(e) => setTodo([...todo, "New Todo"])}>Add Todo</button>
      <hr />
    </div>
  );
};

export default AddTodo;

import React, { useState } from "react";
import Todo from "./Todo.js";
import AddTodo from "./AddTodo.js";
import Counter from "./Counter.js";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>React.useMemo</h1>
      <AddTodo />
      <Counter />
      <Todo todo={todo} setTodo={setTodo} value={value} setValue={setValue} />
    </div>
  );
};

export default App;

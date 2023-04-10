import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input";
import { getData, saveData } from "./persistence";
import TodoTable from "./components/todos";
import Todo from "./type/todo";

function App() {
  const [displayInput, setDisplayInput] = useState("none");
  const [isDeletable, setDeletable] = useState(false);
  const [todo, setTodo] = useState(
    new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1)
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, []);

  const writeData = (data) => {
    setData(data);
    saveData(data);
  };

  const modifyTodo = (todo) => {
    setTodo(todo);
    setDisplayInput("block");
  };

  return (
    <div className="flex">
      <button onClick={() => setDisplayInput("block")}>Input</button>
      <Input
        username="sang"
        bgColor={250}
        display={displayInput}
        setDisplay={setDisplayInput}
        data={data}
        setData={writeData}
        todo={todo}
        setTodo={setTodo}
        isDeletable={isDeletable}
        setDeletable={setDeletable}
      />
      <TodoTable
        data={data}
        setData={writeData}
        modifyTodo={modifyTodo}
        setDeletable={setDeletable}
      />
    </div>
  );
}

export default App;

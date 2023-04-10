import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input";
import { getData, saveData } from "./persistence";
import TodoTable from "./components/todos";
import Todo from "./type/todo";
import ControlCenter from "./components/controlcenter";
import DangerousDialog from "./components/confirmdlg";

function App() {
  const [displayInput, setDisplayInput] = useState("none");
  const [displayDlg, setDisplayDlg] = useState("none");
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

  const handleDlgConfirm = () => {
    writeData([...data.filter((e) => e.id !== todo.id)]);
    setTodo(new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1));
    setDisplayDlg("none");
  };

  const handleDlgCancel = () => {
    setDisplayDlg("none");
    setTodo(new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1));
  };

  return (
    <div className="flex flex-col pt-4 pl-48 pr-48 w-11/12">
      <ControlCenter
        setDisplayInput={setDisplayInput}
        setData={setData}
        data={data}
      />
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
        setDisplayDlg={setDisplayDlg}
      />
      <DangerousDialog
        bgColor={250}
        display={displayDlg}
        handleConfirm={handleDlgConfirm}
        handleCancel={handleDlgCancel}
      >
        Do you want to delete this todo item {todo.title} ?
      </DangerousDialog>
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

import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/input";
import { getData, saveData } from "./persistence";
import TodoTable from "./components/todos";
import Todo from "./type/todo";
import ControlCenter from "./components/controlcenter";
import DangerousDialog from "./components/confirmdlg";

function App() {
  const [bgColor, setBgColor] = useState(250);
  const [displayInput, setDisplayInput] = useState("none");
  const [displaySingleDeleteDlg, setSDDisplayDlg] = useState("none");
  const [displayMultipleDeleteDlg, setMDDisplayDlg] = useState("none");
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
    setSDDisplayDlg("none");
  };

  const handleDlgCancel = () => {
    setSDDisplayDlg("none");
    setTodo(new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1));
  };

  const handleMultipleDeleteConfirm = () => {
    writeData([...data.filter((e) => !e.isSelected)]);
    setMDDisplayDlg("none");
  };

  const handleMultipleDeleteCancel = () => {
    setMDDisplayDlg("none");
  };

  return (
    <div
      className="flex flex-col pt-4 pl-96 pr-96 w-full h-screen"
      style={{
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`,
      }}
    >
      <ControlCenter
        setDisplayInput={setDisplayInput}
        setData={setData}
        data={data}
        bgColor={bgColor}
        setBgColor={setBgColor}
        setDisplayDlg={setMDDisplayDlg}
      />
      <Input
        username="sang"
        bgColor={bgColor}
        display={displayInput}
        setDisplay={setDisplayInput}
        data={data}
        setData={writeData}
        todo={todo}
        setTodo={setTodo}
        isDeletable={isDeletable}
        setDeletable={setDeletable}
        setDisplayDlg={setSDDisplayDlg}
      />
      <DangerousDialog
        bgColor={bgColor}
        display={displaySingleDeleteDlg}
        handleConfirm={handleDlgConfirm}
        handleCancel={handleDlgCancel}
      >
        Do you want to delete this todo item ({todo.title}) ?
      </DangerousDialog>
      <DangerousDialog
        bgColor={bgColor}
        display={displayMultipleDeleteDlg}
        handleConfirm={handleMultipleDeleteConfirm}
        handleCancel={handleMultipleDeleteCancel}
      >
        Do you want to delete these items ?
      </DangerousDialog>
      <TodoTable
        data={data}
        writeData={writeData}
        setData={setData}
        modifyTodo={modifyTodo}
        setDeletable={setDeletable}
        bgColor={bgColor}
      />
    </div>
  );
}

export default App;

function saveData(data) {
  localStorage.setItem("todoData", JSON.stringify(data));
}

function clearData(data) {
  localStorage.removeItem("todoData");
}

function getData() {
  const data = localStorage.getItem("todoData");
  return data ? JSON.parse(data) : [];
}

export { saveData, clearData, getData };

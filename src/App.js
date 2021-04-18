import { useState } from "react";
import Input from "./components/InputTask";
import "./App.css";
import List from "./components/LIstTask";
import uniqid from "uniqid";
import M from "materialize-css";
function App() {
  const [list, setList] = useState([]);

  const addTask = (task, priority, date) => {
    const newTask = {
      id: uniqid(),
      task,
      priority,
      date,
    };

    if (task.length > 0 && date.length > 0) {
      const myList = [...list, newTask];
      myList.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      });
      setList(myList);
    } else if (task.length == 0) {
      M.toast({ html: "Nie można wpisać pustego zadania", classes: "rounded" });
    } else {
      M.toast({
        html: "Nie można dodać zadania bez podania daty",
        classes: "rounded",
      });
    }
  };

  const doneHandler = (idx) => {
    const tmpList = [...list];
    const newList = tmpList.filter(({ id }) => id !== idx);
    setList(newList);
  };

  return (
    <div className="App">
      <Input addTask={addTask} />
      <List list={list} doneHandler={doneHandler} setList={setList} />
    </div>
  );
}

export default App;

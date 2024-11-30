import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoList } from "./store/slices/toDo.js";
import CardComponent from "./components/card/Card";

// to do list object
// {
// name: String
// state:enum [ Completed , Pending]
// }

function App() {
  const [enteredValue, setEnteredValue] = useState("");
  const list = useSelector((state) => {
    // console.log("State of the use selctro", state);
    return state?.toDoList?.list;
  });
  console.log("LiSt", list);
  const dispatch = useDispatch();

  const onEnteredTaskName = (e) => {
    const value = e.target.value;
    console.log("ENTERED VALUE ", value);
    setEnteredValue(value);
  };

  const onAddListHandler = () => {
    if (!enteredValue) {
      console.log("NO TEXT ADDED");
      return;
    }
    console.log("ADD LIST");

    const newTask = {
      name: enteredValue,
    };
    dispatch(addToDoList(newTask), newTask);
    setEnteredValue("");
  };

  const filterHandler = () => {
    console.log("FILTER HANDLER");
  };

  return (
    <div className="App">
      <div>
        <button>ALL</button>
        <button>Completed </button>
        <button>Pending</button>
      </div>

      <input onChange={onEnteredTaskName} value={enteredValue} />
      <button onClick={onAddListHandler}>Add Task to List</button>
      {list?.map((toDoItem) => {
        return <CardComponent key={toDoItem.id} toDoItem={toDoItem} />;
      })}
    </div>
  );
}

export default App;

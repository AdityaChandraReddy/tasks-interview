import { useDispatch } from "react-redux";
import "./card.css";
import {
  removeToDoList,
  StateMappings,
  updateToDoList,
} from "../../store/slices/toDo";

function CardComponent(props) {
  const { toDoItem } = props;
  console.log("TO DO ", toDoItem);

  const dispatch = useDispatch();

  const onDeleteListItemHandler = () => {
    dispatch(removeToDoList({ id: toDoItem.id }));
  };

  const onUpdateItem = (e, value) => {
    console.log(e.target.checked, value);
    dispatch(updateToDoList({ id: toDoItem.id, isCompleted: value }));
  };

  return (
    <div className="card-container">
      <div>
        <input
          type="checkbox"
          onChange={onUpdateItem}
          checked={toDoItem.state === StateMappings.Completed}
        />
        <button onClick={onDeleteListItemHandler}>Delete</button>
      </div>

      <h2>{toDoItem.name}</h2>
      <p>{toDoItem.state}</p>
    </div>
  );
}

export default CardComponent;

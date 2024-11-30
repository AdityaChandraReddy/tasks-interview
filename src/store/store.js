import { configureStore } from "@reduxjs/toolkit";
import { toDoList } from "./slices/toDo";

export default configureStore({
  reducer: {
    toDoList: toDoList.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { cloneDeep } from "lodash";

export const StateMappings = {
  Completed: "Completed",
  Pending: "Pending",
};

export const toDoList = createSlice({
  name: "toDoList",
  initialState: {
    list: [],
  },
  reducers: {
    addToDoList: (state, action) => {
      console.log("ADDIN TO THE STORE", action);
      if (action.payload) {
        // destructure the properties
        const { name } = action?.payload;

        // add at the last of the list
        state.list.push({
          id: uuidv4(), //
          name,
          state: StateMappings.Pending,
        });

        // return {
        //   ...state,
        // };
      }
    },
    removeToDoList: (state, action) => {
      if (action.payload?.id) {
        const idToRemove = action.payload.id;
        // accept id and find the id and remove
        const updatedList = state.list.filter(({ id }) => id !== idToRemove);
        return {
          list: cloneDeep(updatedList),
        };
      }
    },
    updateToDoList: (state, action) => {
      state.value += action.payload;

      if (action.payload.id) {
        const idToUpdate = action.payload.id;
        const indexToUpdate = state.list.find(({ id }) => id === idToUpdate);
        if (indexToUpdate !== -1) {
          state.list[indexToUpdate] = action.payload;
          return {
            list: cloneDeep(state.list),
          };
        }
      }
    },
  },
});
export const { addToDoList, removeToDoList, updateToDoList } = toDoList.actions;

export default toDoList.reducer;

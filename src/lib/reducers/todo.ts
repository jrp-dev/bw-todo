import { TTodoItem } from "@/common/types/todo";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: {
  list: TTodoItem[] 
} = { list: [{
  id: "1",
  title: "title 1",
  description: "description 1",
  status: "Pending",
  due_date: "2024-11-20"
},
{
  id: "2",
  title: "title 2",
  description: "description 2",
  status: "In Progress",
  due_date: "2024-11-20"
},
{
  id: "3",
  title: "title 3",
  description: "description 3",
  status: "Completed",
  due_date: "2024-11-30"
}
] };

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      }
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        list: state.list.map((item) => item.id === action.payload.id ? action.payload : item),
      }
    }
  },
});

export const { 
  addTodo, 
  removeTodo, 
  updateTodo
} = todoSlice.actions
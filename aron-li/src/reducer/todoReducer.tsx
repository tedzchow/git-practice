import { ADD_TODO } from "../config/constants";
const initialState = { todoList: [] };
export interface Actiontype {
  type: string;
  payload: string;
}

export default function (state = initialState, action: Actiontype) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
}

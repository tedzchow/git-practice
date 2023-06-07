import { ADD_TODO, DELETE } from "../config/constants";
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
    case DELETE:
      const id = Number(action.payload);
      state.todoList.splice(id, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}

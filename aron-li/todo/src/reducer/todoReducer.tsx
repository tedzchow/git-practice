import { ADD_TODO, DELETE_TODO } from '../config/constants';
import { Actiontype } from '../config/type';

const initialState = { todoList: [] };

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

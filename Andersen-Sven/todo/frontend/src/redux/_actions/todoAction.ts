import { TodoActionTypes, TODO_ACTION } from '../_types/todoTypes';

export const todoAction = (payload: Object): TodoActionTypes => ({
  type: TODO_ACTION,
  payload,
});

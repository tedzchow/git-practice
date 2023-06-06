
export interface todoState {
  todoValue: Object;
}

export const TODO_ACTION = 'TODO_ACTION';

interface TodoAction {
  type: typeof TODO_ACTION;
  payload: Object;
}

export type TodoActionTypes = TodoAction;

export const TODO_DELETE_ACTION = 'TODO_DELETE_ACTION';
interface TodoDeleteAction {
  type: typeof TODO_DELETE_ACTION;
  payload: Array<Object>;
}

export type TodoDeleteActionTypes = TodoDeleteAction;
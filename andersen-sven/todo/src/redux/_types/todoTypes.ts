export interface todoState {
  todoValue: Object;
}

export const TODO_ACTION = 'TODO_ACTION';

interface TodoAction {
  type: typeof TODO_ACTION;
  payload: Object;
}

export type TodoActionTypes = TodoAction;

import { TodoActionTypes, TODO_ACTION } from '../_types/todoTypes';

interface TodoState {
  todoVariable: Array<Object>;
}

const initialState: TodoState = {
  todoVariable: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TODO_ACTION:
      // console.log(action.payload);
      return {
        ...state,
        todoVariable: [...state.todoVariable, action.payload,]
      };
    default:
      return state;
  }
};

export default todoReducer;

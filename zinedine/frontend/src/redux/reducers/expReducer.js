import { READ_EXPENSE,ADD_EXPENSE} from "../action/constants";
const initialState = {
  exp:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case READ_EXPENSE:
      return {
        ...state,
        exp:action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state,
        exp:[...state.exp,action.payload]
      }
      
    default:
      return state;
  }
}

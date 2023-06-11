import { SET_CURRENT_USER } from "../action/constants";
const initialState = {
  isauth:false,
  user:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isauth:action.payload!=='',
        user:action.payload
      };
    default:
      return state;
  }
}

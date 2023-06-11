import axios from "axios";
import setauthtokentoheader from "./setauthtokentoheader";
import jwt_decode from 'jwt-decode';
import { GET_ERRORS,SET_CURRENT_USER } from "./constants";
export const registerUser = (userData,history) => dispatch => {
  axios
    .post('/api/users/registeruser',userData)
    .then(res=>{console.log(res);history('/')})
    .catch(err=>console.log(err))
};

export const loginuser = (userData,history) => dispatch => {
  axios
    .post('/api/users/loginuser',userData)
    .then(res=>{
      const {token}=res.data;
      localStorage.setItem('token',token);
      setauthtokentoheader(token);
      const decoded=jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history('/expense');
    })
    .catch(err=>{
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      })
    })
};
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token');
  setauthtokentoheader(false);
  dispatch(setCurrentUser(''));
};

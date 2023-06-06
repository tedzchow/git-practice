import axios from "axios";
import { GET_ERRORS,ADD_EXPENSE,DELETE_EXPENSE,READ_EXPENSE,UPDATE_EXPENSE } from "./constants";
export const read_exp = (id) => dispatch => {
  axios
    .get(`/api/exp/readexp/${id}`)
    .then(res=>{
        dispatch({
            type:READ_EXPENSE,
            payload:res.data
        })
    })
    .catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    })
};
export const add_exp = (exp) => dispatch => {
    axios
      .post('/api/exp/addexp',exp)
      .then(res=>{
          dispatch({
              type:ADD_EXPENSE,
              payload:res.data
          })
      })
      .catch(err=>{
          dispatch({
              type:GET_ERRORS,
              payload:err.response.data
          })
      })
  };
  export const update_exp = (exp,id) => dispatch => {
    axios
      .put(`/api/exp/updateexp/${id}`,exp)
      .then(res=>{
          console.log(res);
      })
      .catch(err=>{
          dispatch({
              type:GET_ERRORS,
              payload:err.response.data
          })
      })
  };
  export const del_exp = (id) => dispatch => {
    axios
      .delete(`/api/exp/delexp/${id}`)
      .then(res=>{
            console.log(res);
      })
      .catch(err=>{
          dispatch({
              type:GET_ERRORS,
              payload:err.response.data
          })
      })
  };
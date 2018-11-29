import {CREATE_USER, DELETE_USER, LOGIN} from "./types";
import axios from "axios";

export const createUser = (params) => (dispatch) => {
  axios.post("/api/users/create/", {
    params: params,
  }).then(res => {
    dispatch({
      type: CREATE_USER,
      payload: res.data,
    });
  }).catch(err => console.log(err));
};

export const deleteUser = (username) => (dispatch) => {
  axios.delete("/api/users/delete/", {
    params: username,
  }).then(res => {
    dispatch({
      type: DELETE_USER,
      payload: res.data,
    });
  }).catch(err => console.log(err));
};

export const login = (params) => (dispatch) => {
  axios.post("/api/users/login/", {
    params: params,
  }).then(res => {
    dispatch({
      type: LOGIN,
      payload: res.data,
    })
  })
};

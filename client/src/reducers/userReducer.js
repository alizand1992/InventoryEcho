import {CREATE_USER, DELETE_USER, LOGIN} from "../actions/types";

const initialState = {
  query: null,
  loading: false,
};

// CHANGE THESE TO CONSTANTS

export default function (state = initialState, action) {
  switch (action.type) {
  case CREATE_USER:
    break;
  case DELETE_USER:
    break;
  case LOGIN:
    break;
  default:
    return {
      ...state,
    };
  }
};

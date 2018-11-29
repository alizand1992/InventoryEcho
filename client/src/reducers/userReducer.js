import {
  CREATE_USER,
  DELETE_USER,
  LOGIN,
  LOGOUT,
} from "../actions/types";

const initialState = {
  query: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case DELETE_USER:
    return {
      ...state,
      user: null,
      loading: false,
    };
    case LOGIN:
    return {
      ...state,
      user: action.payload,
      loading: false,
    };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      };
  default:
    return {
      ...state,
    };
  }
};

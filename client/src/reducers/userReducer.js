const initialState = {
  query: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER":
      break;
    case "DELETE_USER":
      break;
    case "LOGIN":
      break;
    default:
      return {
        ...state,
      };
  }
};
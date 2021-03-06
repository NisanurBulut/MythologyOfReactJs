const DefaultState = {
  loading: false,
  data: [],
  errorMessage: '',
  count:20
};

const MythListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case  "MYTH_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case "MYTH_LIST_LOADING_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: "",
        count:20
      };
    case "MYTH_LIST_LOADING_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: 'Unable to server',
      };
    default:
      return state;
  }
};
export default MythListReducer;

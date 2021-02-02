const DefaultState = {
  loading: false,
  data: [],
  errorMessage: '',
  count:0
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
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMessage: "",
        count:action.payload.count
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

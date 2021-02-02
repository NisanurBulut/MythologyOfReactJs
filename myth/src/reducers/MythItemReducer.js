const DefaultState = {
  loading: false,
  data: {},
  errorMessage: '',
};

const MythItemReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'MYTH_ITEM_LOADING':
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    case 'MYTH_ITEM_LOADING_SUCCESS':
      return {
        ...state,
        loading: false,
        errorMessage: '',
        data: { ...state.data, [action.mythName]: action.payload },
      };
    case 'MYTH_LOADING_FAIL':
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
     return state;
  }
};

export default MythItemReducer;
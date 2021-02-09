import { v4 as uuidv4 } from 'uuid';
export const bookReducer = (state, action) => {
  console.log(state,action);
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

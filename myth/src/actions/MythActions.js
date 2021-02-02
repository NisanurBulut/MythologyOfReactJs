import axios from 'axios';
export const GetMythList = (page) => async (dispathch) => {
  try {
    dispathch({
      type: 'MYTH_LIST_LOADING',
    });
    const perPage = 5;
    const offset = page * perPage - perPage; // 1=0 2=5 => (2*5)-5
    const response = axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`
    );

    dispathch({
      type: 'MYTH_LIST_LOADING_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
      dispathch({
          type:'MYTH_LIST_LOADING_FAIL',
          payload:e.Message
      })
  }
};

import axios from 'axios';
export const GetMythList = (page) => async (dispathch) => {
  try {
    dispathch({
      type: 'MYTH_LIST_LOADING',
    });

    const perPage = 15;
    debugger;
    const offset = page * perPage - perPage; // 1=0 2=30 => (2*15)-15
    const indexOfLastTodo = page * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const res = await axios
      .get('http://localhost:3000/mythItems')
      .then((respo) => {
        return respo;
      });
      console.log(res);
    dispathch({
      type: 'MYTH_LIST_LOADING_SUCCESS',
      payload: res.data.slice(indexOfFirstTodo, indexOfLastTodo),
    });
  } catch (e) {
    dispathch({
      type: 'MYTH_LIST_LOADING_FAIL',
      payload: e.Message,
    });
  }
};
export const GetMyth = (myth) => async (dispathch) => {
  try {
    dispathch({
      type: 'MYTH_ITEM_LOADING',
    });
    const res = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${myth}`)
      .then((respo) => {
        return respo;
      });
    dispathch({
      type: 'MYTH_ITEM_LOADING_SUCCESS',
      payload: res.data,
      mythName: myth,
    });
  } catch (ex) {
    dispathch({
      type: 'MYTH_ITEM_LOADING_FAIL',
      payload: ex.Message,
    });
  }
};

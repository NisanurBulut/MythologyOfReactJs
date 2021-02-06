import axios from 'axios';
export const GetMythList = (page, searchData) => async (dispathch) => {
  console.log(searchData);
  try {
    dispathch({
      type: 'MYTH_LIST_LOADING',
    });

    const perPage = 8;
    const indexOfLastTodo = page * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const res = await axios
      .get('http://localhost:3000/mythItems')
      .then((respo) => {
        return respo;
      });
      const returnData=res.data.filter(a=>a.name.toLowerCase().includes(searchData));
    dispathch({
      type: 'MYTH_LIST_LOADING_SUCCESS',
      payload: returnData.slice(indexOfFirstTodo, indexOfLastTodo),
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
      .get(`http://localhost:3000/mythItems?name=${myth}`)
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

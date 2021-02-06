import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import _ from 'lodash';
import { GetMythList } from '../../actions/MythActions';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import styledMythList from '../MythList/MythList.modules.css';
const MythList = (props) => {
  const [search, setSearch]=useState("");
  const dispatch = useDispatch();
  const mythList = useSelector((state) => state.MythList);

  React.useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(GetMythList(page));
  };

  const showData = () => {
    if (!_.isEmpty(mythList.data)) {
      return (
        <div className={styledMythList.listWrapper}>
          <GridList cellHeight={160} className={styledMythList.gridList} cols={5}>
        {mythList.data.map((item) => (
          <GridListTile key={item.name} cols={1} className={styledMythList.mythItem}>
            <Link to={`/myth/${item.name}`}><p>{item.name}</p></Link>
          </GridListTile>
        ))}
      </GridList>
        </div>
      );
    }
    if (mythList.loading) {
      return <p>....Loading</p>;
    }
    if (mythList.errorMessage !== '') {
      return <div>{mythList.errorMessage}</div>;
    }
    return <p>unable to data</p>;
  };
  return <div>
    <div className={styledMythList.searchWrapper}>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>props.history.push(`/myth/${search}`)}>Search</button>
    </div>
    {showData()}
    {

      !_.isEmpty(mythList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(mythList.count / 10)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName={styledMythList.pagination}
        ></ReactPaginate>
      )
    }
    </div>;
};

export default MythList;

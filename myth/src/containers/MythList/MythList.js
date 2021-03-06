import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import _ from 'lodash';
import { GetMythList } from '../../actions/MythActions';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import styledMythList from '../MythList/MythList.modules.css';
import appStyled from '../../App.css';
import MythItem from '../MythItem/MythItem';
import Loader from "react-loader-spinner";

const MythList = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const mythList = useSelector((state) => state.MythList);

  React.useEffect(() => {
    fetchData(1,search);
  }, [search]);

  const fetchData = (page = 1) => {
    dispatch(GetMythList(page,search.toLowerCase()));
  };

  const showData = () => {
    if (!_.isEmpty(mythList.data)) {
      return (
        <div className={styledMythList.listWrapper}>
          <GridList
            cellHeight={250}
            className={styledMythList.gridList}
            cols={4}
          >
            {mythList.data.map((item) => (
              <GridListTile
                key={item.name}
                cols={1}
                className={styledMythList.mythItem}
              >
                <Link to={`/myth/${item.name}`}>
                  <MythItem name={item.name} imagePath={item.imagePath} />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }
    if (mythList.loading) {
      return (
      <Loader
      className={styledMythList.listWrapper}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />)
    }
    if (mythList.errorMessage !== '') {
      return <div className={appStyled.errorMessage}>{mythList.errorMessage}</div>;
    }
    return <p className={appStyled.errorMessage}>unable to data</p>;
  };

  return (
    <div>
      <div className={styledMythList.searchWrapper}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      {showData()}
      {!_.isEmpty(mythList.data) && (
        <ReactPaginate
          pageCount={(Math.ceil(mythList.count / 8))}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName={styledMythList.pagination}
        ></ReactPaginate>
      )}
    </div>
  );
};

export default MythList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetMythList } from '../actions/MythActions';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

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
        <div className="list-wrapper">
          { mythList.data.map((item) => {
            return (
                <div key={item.name} className="myth-item">
                    <p>{item.name}</p>
                    <Link to={`/myth/${item.name}`}>View</Link>
                </div>
            )
          })
          }
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
    <div className="search-wrapper">
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>props.history.push(`/myth/${search}`)}>Search</button>
    </div>
    {showData()}
    {
      !_.isEmpty(mythList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(mythList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName={"pagination"}
        ></ReactPaginate>
      )
    }
    </div>;
};

export default MythList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMyth } from '../../actions/MythActions';
import styledMythItem from '../MytItemDetail/MythItemDetail.css';
import styledApp from '../../App.css';
import _ from 'lodash';
import Loader from "react-loader-spinner";

const MythItemDetail = (props) => {
  const mythItemName = props.match.params.myth;
  const dispathch = useDispatch();
  const mythItemState = useSelector((state) => state.MythItem);

  React.useEffect(() => {
    dispathch(GetMyth(mythItemName));
  }, []);

  const showData = () => {
    if (! _.isEmpty(mythItemState.data[mythItemName])) {
      const mythItemData=mythItemState.data[mythItemName][0];

      return(
        <div className={styledMythItem.mythWrapper}>
          <div className={styledMythItem.mythItemHeader}>
           <h1>{mythItemName}</h1>
           <hr/>
          </div>
          <div className={styledMythItem.item}>
            <img src={mythItemData.imagePath} alt={mythItemData.name}/>
            <p>{mythItemData.description}</p>
          </div>
        </div>
      )
    }

    if (mythItemState.loading) {
      return (  <Loader
        className={styledMythItem.listWrapper}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />)
    }

    if (mythItemState.errorMessage !== "") {
      return <p className={styledApp.errorMessage}>{mythItemState.errorMessage}</p>
    }

    return <p className={styledApp.errorMessage}>error getting myth item</p>
  };

  return (
    <div>
      {showData()}
    </div>
  );
};
export default MythItemDetail;

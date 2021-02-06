import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMyth } from '../../actions/MythActions';
import styledMythItem from '../MytItemDetail/MythItemDetail.css';
import _ from 'lodash';

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
          </div>
          <div className={styledMythItem.item}>
            <img src={mythItemData.imagePath} alt={mythItemData.name}/>
            <p>{mythItemData.description}</p>
          </div>
        </div>
      )
    }

    if (mythItemState.loading) {
      return <p>Loading...</p>
    }

    if (mythItemState.errorMessage !== "") {
      return <p>{mythItemState.errorMessage}</p>
    }

    return <p>error getting myth item</p>
  };

  return (
    <div>
      {showData()}
    </div>
  );
};
export default MythItemDetail;

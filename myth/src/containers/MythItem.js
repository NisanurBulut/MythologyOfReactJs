import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMyth } from '../actions/MythActions';
import _ from 'lodash';

const MythItem = (props) => {
  const mythItemName = props.match.params.myth;
  const dispathch = useDispatch();
  const mythItemState = useSelector((state) => state.MythItem);

  React.useEffect(() => {
    dispathch(GetMyth(mythItemName));
  }, []);

  const showData = () => {
    if (! _.isEmpty(mythItemState.data[mythItemName])) {
      const mythItemData=mythItemState.data[mythItemName][0];
      console.log(mythItemData);
      return(
        <div className={"myth-wrapper"}>
           <h1>{mythItemName}</h1>
          <div className={"item"}>
            <img src={mythItemData.imagePath} alt=""/>
          </div>
          <div className="item">
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
export default MythItem;

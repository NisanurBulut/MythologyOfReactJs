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
    console.log(mythItemState.data[mythItemName]);
    if (! _.isEmpty(mythItemState.data[mythItemName])) {
      const mythItemData=mythItemState.data[mythItemName];
      return(
        <div className={"myth-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={mythItemData.sprites.front_default} alt=""/>
            <img src={mythItemData.sprites.back_default} alt=""/>
            <img src={mythItemData.sprites.front_shiny} alt=""/>
            <img src={mythItemData.sprites.back_shiny} alt=""/>
          </div>
          <div className="item">
            <h1>Stats</h1>
            {mythItemData.stats.map(el => {
              return <p>{el.stat.name} {el.base_stat}</p>
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {mythItemData.abilities.map(el => {
              return <p>{el.ability.name}</p>
            })}
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
      <h1>{mythItemName}</h1>
      {showData()}
    </div>
  );
};
export default MythItem;
